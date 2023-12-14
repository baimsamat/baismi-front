<template>
  <div class="main">
    <ListArticles :articles="articles" />
  </div>
</template>

<script lang="ts" setup>
import { fakeArticles } from '../fixtures/articles';

const articles = fakeArticles;
definePageMeta({
  title: 'BAISMI: Главная'
});

// const route = useRoute();
// console.log(route.meta.title);

definePageMeta({
  alias: ['/all', '/home']
});
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
}
</style>
