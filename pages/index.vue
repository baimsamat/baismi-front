<template>
  <div class="main">
    <ListArticles
      title="Все новости"
      :articles="displayedArticles"
      :pagination="pagination"
      @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { useArticles } from '~/shared/use-articles';

definePageMeta({
  title: 'BAISMI: Главная',
  alias: ['/all', '/home']
});

const page = ref(1);

const {
  displayedArticles,
  pagination
} = await useArticles(page);

function handleCurrentChange(value: number): void {
  page.value = value;
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
