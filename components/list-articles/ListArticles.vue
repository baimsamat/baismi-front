<template>
  <div class="list-articles">
    <h1 class="list-articles__title">
      {{ title }}
    </h1>
    <ListArticlesShortArticles
      v-for="item in articles"
      :key="item.id"
      class="list-articles__item"
      :article="item"
    />
    <div
      v-if="isUploadMoreButtonShown"
      class="list-articles__btn-wrap"
    >
      <button
        class="list-articles__btn"
        @click="handleCurrentChange"
      >
        Загрузить еще
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Article } from '~/repo/interfaces/articles';
import type { Pagination } from '~/repo/interfaces/meta';
import type { Entity } from '~/repo/repo';

interface Props {
  title: string
  articles: Entity<Article>[]
  pagination?: Pagination
}

const props = defineProps<Props>();

enum Event {
  currenChange = 'current-change'
}

interface Emits {
    (event: Event.currenChange, value: number): void
  }

const emit = defineEmits<Emits>();

const isUploadMoreButtonShown = computed((): boolean => {
  return !!props.pagination && props.pagination.page < props.pagination.pageCount;
});

function handleCurrentChange(): void {
  if (!isUploadMoreButtonShown.value) {
    return;
  }

  emit(Event.currenChange, props.pagination.page + 1);
}
</script>

<style lang="scss" scoped>
.list-articles {
  box-sizing: border-box;
  width: 100%;

  &__title {
    padding: 0 6px;

    @media (min-width: $desktop) {
      margin-top: 0;
    }
  }

  &__item {
    margin-bottom: 10px;

    @media (min-width: $mobile) {
      margin-bottom: 16px;
    }
  }

  &__btn-wrap {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 24px 0;
  }

  &__btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    box-sizing: border-box;
    height: 32px;
    padding: 0;
    padding: 8px 15px;

    cursor: pointer;
    user-select: none;
    transition: .1s;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;

    color: inherit;
    border: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    outline: inherit;
    outline: none;
    background: none;
    background-color: #dcdfe6;

    font: inherit;
    appearance: none;
  }
}
</style>
