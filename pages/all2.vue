<template>
  <div class="all">
    <!-- <div v-for="item in articles" :key="item.id">
      <div>
        {{ item.title }}
      </div>
      <NuxtLink :to="item.href">{{ item.href }}</NuxtLink>
    </div> -->
    <ListArticles :articles="articles" />
  </div>
</template>

<script lang="ts" setup>
import { fakeArticles } from '../fixtures/articles';

const articles = fakeArticles;
</script>

<style lang="scss" scoped>
.favorites {
  border: 1px solid rgb(189 17 205);
}
</style>
