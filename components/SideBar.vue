<template>
  <div class="side-bar">
    <NuxtLink
      v-for="item in menu"
      :key="item.id"
      class="side-bar__link"
      :to="item.href"
      :active-class="'side-bar__link-active'"
      @click.prevent="closeSideBar"
    >
      {{ item.name }}
    </NuxtLink>
    <div class="side-bar__about-wrapper">
      <About class="side-bar__about" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { fakeMenu } from '../fixtures/menu';
import { useSideBarStore } from '@/stores/side-bar';

const menu = ref(fakeMenu);
const sideBarStore = useSideBarStore();

function closeSideBar(): void {
  sideBarStore.close();
}
</script>

<style lang="scss" scoped>
.side-bar {
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px 0;

  &__link {
    padding: 10px 12px;

    color: black;
    border-radius: 2px;

    font-size: 16px;
    font-weight: 700;

    &:hover {
      background-color: rgb(0 0 0 / 5%);
    }

    &-active {
      color: var( --second-color);
      background-color: rgb(0 0 0 / 5%);

      @media (min-width: $desktop) {
        background-color: none;
      }
    }

    @media (min-width: $desktop) {
      padding: 8px 4px;
    }
  }

  &__about-wrapper {
    margin-top: 20px;
    padding: 0 12px;

    @media (min-width: $desktop) {
      display: none;
    }
  }

  @media (min-width: $desktop) {
    padding: 0;
  }
}
</style>
