<template>
  <div class="short-articles">
    <ListArticlesArticleHeader :article="article" :is-date-shown="false" />
    <NuxtLink class="short-articles__title" :to="article.href">
      {{ article.title }}
    </NuxtLink>
    <NuxtLink class="short-articles__body" :to="article.href">
      {{ article.announce }}
    </NuxtLink>
    <footer class="short-articles__footer">
      <span>{{ article.date }}</span>
      <div class="short-articles__wrap-icon">
        <SvgIcon class="short-articles__icon" name="share" />
      </div>
    </footer>
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
.short-articles {
  box-sizing: border-box;
  width: 100%;
  padding-left: 12px;

  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--main-bg-color);

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    color: var(--second-font-color);
  }

  &__title {
    display: inline-block;

    margin-bottom: 6px;

    color: var(--main-font-color);

    font-size: 16px;
    font-weight: bold;
  }

  &__body {
    display: inline-block;

    padding-right: 12px;

    color: var(--link-font-color);
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
