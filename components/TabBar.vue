<template>
  <div class="tab-bar">
    <div class="tab-bar__button" @click="openSideBar">
      <div class="tab-bar__link">
        <SvgIcon class="tab-bar__icon" name="menu" />
      </div>
    </div>
    <div v-for="item in links" :key="item.name" class="tab-bar__button">
      <NuxtLink class="tab-bar__link" :to="item.href">
        <SvgIcon class="tab-bar__icon" :name="item.name" />
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSideBarStore } from '@/stores/side-bar';

const links = [
  {
    name: 'home',
    href: '/'
  },
  {
    name: 'favorite',
    href: '/favorites'
  }
];

const sideBarStore = useSideBarStore();

function openSideBar(): void {
  sideBarStore.open();
}
</script>

<style lang="scss" scoped>
.tab-bar {
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  width: 100%;

  border-top: 1px solid var(--border-color);
  background: var(--main-bg-color);

  &__link {
    display: block;

    padding: 12px;

    color: var(--second-font-color);
  }

  &__icon {
    display: block;

    width: 24px;
    height: 24px;

    fill: currentcolor;
  }

  &__button {
    > .router-link-active {
      color: var(--third-color);
    }
  }

}
</style>
