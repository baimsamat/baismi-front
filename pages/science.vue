<template>
  <div class="science">
    <ListArticles
      title="Наука"
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
  title: 'BAISMI: Наука'
});

const page = ref(1);

const {
  displayedArticles,
  pagination
} = await useArticles(page, ArticleType.science);

function handleCurrentChange(value: number): void {
  page.value = value;
}
</script>
