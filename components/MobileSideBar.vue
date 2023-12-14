<template>
  <div class="mobile-side-bar">
    <SideBar class="mobile-side-bar__side-bar" />
    <div class="mobile-side-bar__close-button" @click="closeSideBar" />
  </div>
</template>

<script lang="ts" setup>
import { useSideBarStore } from '@/stores/side-bar';

const sideBarStore = useSideBarStore();

function closeSideBar(): void {
  sideBarStore.close();
}
</script>

<style lang="scss" scoped>
.mobile-side-bar {
  display: grid;

  width: 100vw;
  height: 100dvh;
  grid-template-columns: 80% 20%;
  grid-template-columns: 300px 1fr;

  &__side-bar {
    background: white;
    box-shadow: 0 10px 10px -3px rgb(0 0 0 / 10%);
  }
}
</style>
