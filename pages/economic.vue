<template>
  <div class="economic">
    <ListArticles :articles="articles" />
  </div>
</template>

<script lang="ts" setup>
import { fakeArticles } from '../fixtures/articles';

const articles = fakeArticles;
definePageMeta({
  title: 'BAISMI: Экономика'
});
</script>

<style lang="scss" scoped>
.economic {
  border: 1px solid rgb(189 17 205);
}
</style>
