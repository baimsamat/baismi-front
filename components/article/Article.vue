<template>
  <article class="article">
    <ListArticlesArticleHeader :article="article" />
    <ListArticlesSources :article="article" />
    <div class="article__title">
      {{ article.title }}
    </div>
    <div class="article__announce">
      {{ article.announce }}
    </div>
    <div class="article__content" v-html="content" />
  </article>
</template>

<script lang="ts" setup>
import { marked } from 'marked';
import type { Article } from '~/fixtures/articles';
// marked.use({
//   pedantic: true,
//   gfm: false,
//   breaks: true
// });

interface Props {
  article: Article
}

const props = defineProps<Props>();

const { article } = props;
//

// const state = reactive({
//   content: ""
// })

// state.content = marked(article);

const content = computed(() => {
  return marked.parse(article.text);
});
</script>

<style lang="scss" scoped>
.article {
  padding: 16px;

  border-radius: 12px;
  background: white;

  &__title {
    margin-top: 24px;

    font-size: xx-large;
    font-weight: bold;
  }

  &__announce {
    margin: 20px 0;
    padding: 12px;

    border-radius: 4px;
    background: aliceblue;
  }
}
</style>
