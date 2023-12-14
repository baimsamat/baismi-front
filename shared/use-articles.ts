import type { Article, ArticleType } from '~/repo/interfaces/articles';
import type { Response } from '~/repo/repo';

export const useArticles = async(page: Ref<number>, type?: ArticleType) => {
  const articles: Response<Article[]> = reactive({ data: [], meta: null });

  const { $projectRepo } = useNuxtApp();

  await useAsyncData(async() => {
    await getArticles(1);
  });

  async function getArticles(page: number): Promise<void> {
    const arts = await $projectRepo.getArticles({ page }, type);

    articles.data.push(...arts.data);
    articles.meta = arts.meta;
  }

  watch(page, getArticles);

  const displayedArticles = computed(() => {
    return articles.data;
  });

  const pagination = computed(() => {
    return articles.meta?.pagination;
  });

  return {
    displayedArticles,
    pagination
  };
};
