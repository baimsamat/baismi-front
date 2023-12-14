<template>
  <header class="article-header">
    <div>
      <a class="article-header__link" :href="source?.original">
        {{ magazine?.name }}
      </a>
      <div class="article-header__row">
        <span class="article-header__delimiter">|</span>
        <span>{{ magazine?.country }}</span>
      </div>
      <div v-if="isDateShown" class="article-header__row">
        <span class="article-header__delimiter">|</span>
        <span>{{ dateOfCreation }}</span>
      </div>
    </div>
    <div class="article-header__wrap-icon" @click="addToFavorites">
      <SvgIcon
        :class="{
          'article-header__icon': true,
          'article-header__icon--active': hasFavoritesArticlesId(id)
        }"
        name="bookmark"
      />
    </div>
  </header>
</template>

<script lang="ts" setup>
import type { Article } from '~/repo/interfaces/articles';
import { useFavoritesArtilesStore } from '@/stores/favorites-articles';

interface Props {
  id: number
  article: Article
  isDateShown: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isDateShown: true
});

const { $datefns } = useNuxtApp();
const favoritesArtiles = useFavoritesArtilesStore();
const { hasFavoritesArticlesId } = storeToRefs(favoritesArtiles);

const { article } = props;

const source = computed(() => {
  return article.source?.data.attributes;
});

const magazine = computed(() => {
  return article.magazine?.data.attributes;
});

const dateOfCreation = computed(() => {
  return $datefns.format(article.dateOfCreation, 'dd MMMM yyyy');
});

function addToFavorites(): void {
  favoritesArtiles.add(props.id);
}
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

    cursor: pointer;
  }

  &__icon {
    display: block;

    width: 24px;
    height: 24px;

    &--active {
      fill: var(--third-color);
    }
  }
}
</style>
