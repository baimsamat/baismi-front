<template>
  <div class="sources">
    <a class="sources__original" :href="article.sources.original.link">Оригинал</a>
    <a class="sources__inosmi" :href="article.sources.inosmi.link">{{ article.sources.inosmi.name }}</a>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/fixtures/articles';

interface Props {
  article: Article
}

const props = defineProps<Props>();

const { article } = props;

</script>

<style lang="scss" scoped>
.sources {
  box-sizing: border-box;
  width: 100%;

  font-weight: bold;

  &__original, &__inosmi  {
    display: inline-block;

    padding: 4px 8px;

    border-radius: 4px;
    background: lavenderblush;

    font-weight: bold;
  }

  &__inosmi {
    margin-left: 4px;
  }
}
</style>
