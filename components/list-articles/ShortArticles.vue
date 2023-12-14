<template>
  <div class="short-articles">
    <ArticleHeader
      :id="article.id"
      class="short-articles__header"
      :article="articleAttributes"
      :is-date-shown="false"
    />

    <div class="short-articles__body">
      <NuxtLink class="short-articles__title" :to="id">
        {{ articleAttributes.title }}
      </NuxtLink>
      <NuxtLink class="short-articles__announce" :to="id">
        {{ articleAttributes.announce }}
      </NuxtLink>
    </div>

    <footer class="short-articles__footer">
      <span>{{ dateOfCreation }}</span>
      <div class="short-articles__wrap-icon" @click="copyToClipboard">
        <SvgIcon class="short-articles__icon" name="share" />
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { ElMessage } from 'element-plus';
import type { Article } from '~/repo/interfaces/articles';
import type { Entity } from '~/repo/repo';

interface Props {
  article: Entity<Article>
}

const props = defineProps<Props>();

const { $datefns } = useNuxtApp();

const articleAttributes = computed((): Article => {
  return props.article.attributes;
});

const id = computed((): string => {
  return `${props.article.id}`;
});

const dateOfCreation = computed(() => {
  return $datefns.format(articleAttributes.value.dateOfCreation, 'dd MMMM yyyy');
});

function copyToClipboard(): void {
  const url = `${window.location.href}${id.value}`;
  navigator.clipboard.writeText(url);

  openMessage();
}

function openMessage(): void {
  ElMessage({
    message: 'Ссылка скопирована в буфер обмена',
    type: 'success'
  });
}
</script>

<style lang="scss" scoped>
.short-articles {
  box-sizing: border-box;
  width: 100%;

  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--main-bg-color);

  &__header {
    padding-left: $mobile-padding;
  }

  &__body {
    padding: 0 $mobile-padding;
  }

  &__footer {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 48px;

    padding-left: $mobile-padding;

    color: var(--second-font-color);
  }

  &__title {
    display: inline-block;

    margin-bottom: 6px;

    color: var(--main-font-color);

    font-size: 16px;
    font-weight: bold;

    @media (min-width: $mobile) {
      margin-bottom: 12px;

      font-size: 24px;
    }
  }

  &__announce {
    display: inline-block;

    color: var(--link-font-color);
  }

  &__wrap-icon {
    position: absolute;
    right: 0;

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
  }

  @media (min-width: $mobile) {
    padding: 6px 12px;
  }
}
</style>
