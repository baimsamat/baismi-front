<template>
  <div class="economic">
    <ListArticles
      title="Экономика"
      :articles="displayedArticles"
      :pagination="pagination"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { ArticleType } from '~/repo/interfaces/articles';
import { useArticles } from '~/shared/use-articles';

definePageMeta({
  title: 'BAISMI: Экономика'
});

const page = ref(1);

const {
  displayedArticles,
  pagination
} = await useArticles(page, ArticleType.economic);

function handleCurrentChange(value: number): void {
  page.value = value;
}
</script>

<style lang="scss" scoped>
.economic{
  display: block;
}
</style>
