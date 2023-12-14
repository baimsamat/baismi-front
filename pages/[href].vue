<template>
  <div class="article-wrap">
    <Article :id="id" :article="article" />
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/repo/interfaces/articles';
import type { Entity, Response } from '~/repo/repo';

const route = useRoute();
const { href } = route.params;

const id = getArticleIdFromHref(href as string);

function getArticleIdFromHref(href: string): number {
  const arr = href.split('-');
  return Number(arr[arr.length - 1]);
}

const { $projectRepo } = useNuxtApp();

const art: Response<Article> = await $projectRepo.getArticle(id);

const article = computed(() => {
  return (art.data as Entity<Article>).attributes;
});
</script>
