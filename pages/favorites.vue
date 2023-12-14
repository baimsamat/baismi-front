<template>
  <div class="favorites">
    <ListArticles
      title="Избранное"
      :articles="articles.data"
    />
  </div>
</template>

<script lang="ts" setup>
import { useFavoritesArtilesStore } from '@/stores/favorites-articles';
import type { Article } from '~/repo/interfaces/articles';
import type { Response } from '~/repo/repo';

const articles: Response<Article[]> = reactive({ data: [], meta: null });

const favoritesArtiles = useFavoritesArtilesStore();

const { $projectRepo } = useNuxtApp();

const articleIds = computed(() => {
  return favoritesArtiles.articles;
});

await useAsyncData(async() => {
  const arts = await Promise.all(
    articleIds.value.flatMap((id) => {
      return $projectRepo.getArticle(id);
    })
  );

  arts.forEach(item => articles.data.push(item.data));
});

</script>
