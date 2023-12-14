<template>
  <div class="list-articles">
    <ListArticlesShortArticles
      v-for="item in articles"
      :key="item.id"
      class="list-articles__item"
      :article="item"
    />
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/fixtures/articles';

interface Props {
  articles: Article[]
}

const props = defineProps<Props>();

const { articles } = props;

</script>

<style lang="scss" scoped>
.list-articles {
  box-sizing: border-box;
  width: 100%;

  &__item {
    margin-bottom: 6px;

    @media (min-width: $mobile) {
      // width: 700px;
    }

    @media (min-width: $desktop) {

    }
  }

  @media (min-width: $mobile) {
    // display: flex;
    // align-items: center;
    // flex-direction: column;
  }
}
</style>
