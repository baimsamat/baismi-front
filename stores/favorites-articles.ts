import { defineStore } from 'pinia';

const STORE_NAME = 'favoritesArtiles';

const getArticleIds = (): number[] => {
  const articlesIds = localStorage.getItem(STORE_NAME);

  return articlesIds ? JSON.parse(articlesIds) : [];
};

export const useFavoritesArtilesStore = defineStore(STORE_NAME, {
  state: () => {
    return {
      articles: getArticleIds()
    };
  },
  getters: {
    hasFavoritesArticlesId: (state) => {
      return (articleId: number) => state.articles.includes(articleId);
    }
  },
  actions: {
    add(id: number) {
      if (this.hasFavoritesArticlesId(id)) {
        this.remove(id);

        return;
      }

      this.articles.push(id);
      this.addLocalStorage();
    },
    remove(id: number) {
      const indexArticle = this.articles.findIndex(item => item === id);
      this.articles.splice(indexArticle, 1);
      this.addLocalStorage();
    },
    addLocalStorage() {
      localStorage.setItem(STORE_NAME, JSON.stringify(this.articles));
    }
  }
});
