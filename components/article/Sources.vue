<template>
  <div class="sources">
    <a class="sources__original" :href="source.original">Оригинал</a>
    <a class="sources__inosmi" :href="source.inosmi">ИноСМИ</a>
  </div>
</template>

<script lang="ts" setup>
import type { Source } from '~/repo/interfaces/articles';

interface Props {
  source: Source
}

const props = defineProps<Props>();

const { source } = props;

</script>

<style lang="scss" scoped>
.sources {
  box-sizing: border-box;
  width: 100%;

  font-weight: bold;

  &__original, &__inosmi  {
    display: inline-block;

    padding: 4px 8px;

    border-radius: 4px;
    background: lavenderblush;

    font-weight: bold;
  }

  &__inosmi {
    margin-left: 4px;
  }
}
</style>
