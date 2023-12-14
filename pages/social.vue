<template>
  <div class="social">
    <ListArticles
      title="Общество"
      :articles="displayedArticles"
      :pagination="pagination"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ArticleType } from '~/repo/interfaces/articles';
import { useArticles } from '~/shared/use-articles';

const page = ref(1);

const {
  displayedArticles,
  pagination
} = await useArticles(page, ArticleType.social);

function handleCurrentChange(value: number): void {
  page.value = value;
}
</script>
