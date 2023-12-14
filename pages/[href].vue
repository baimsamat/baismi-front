<template>
  <div class="article-wrap">
    <Article :article="article" />
  </div>
</template>

<script lang="ts" setup>
import { getArticleById } from '../fixtures/articles';

const route = useRoute();
const { href } = route.params;
const id = getArticleIdFromHref(href as string);

function getArticleIdFromHref (href: string): number {
  const arr = href.split('-');
  return Number(arr[arr.length - 1]);
}

const article = getArticleById(id);
</script>

<style lang="scss" scoped>
.article-wrap {
  // border: 1px solid rgb(189, 17, 205);
}
</style>
