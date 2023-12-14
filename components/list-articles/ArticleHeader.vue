<template>
  <header class="article-header">
    <div>
      <a class="article-header__link" :href="article.sources.original.site">{{ article.sources.original.name }}</a>
      <div class="article-header__row">
        <span class="article-header__delimiter">|</span>
        <span>{{ article.sources.inosmi.country }}</span>
      </div>
      <div v-if="isDateShown" class="article-header__row">
        <span class="article-header__delimiter">|</span>
        <span>{{ article.date }}</span>
      </div>
    </div>
    <div class="article-header__wrap-icon">
      <SvgIcon class="article-header__icon" name="bookmark" />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { Article } from '~/fixtures/articles';

interface Props {
  article: Article
    isDateShown: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isDateShown: true
});

const { article } = props;

</script>

<style lang="scss" scoped>
.article-header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;

  color: var(--second-font-color);

  &__link {
    color: inherit;
  }

  &__row {
    display: inline-block;
  }

  &__delimiter {
    margin: 0 8px;
  }

  &__wrap-icon {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 48px;
    height: 48px;
  }

  &__icon {
    display: block;

    width: 24px;
    height: 24px;
  }
}
</style>
