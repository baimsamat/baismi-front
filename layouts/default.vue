<template>
  <div class="default">
    <PageHeader class="header" />
    <div class="container">
      <div class="container__inner">
        <div class="wrap">
          <div class="default__side-bar">
            <SideBar />
          </div>
          <slot />
        </div>
      </div>
    </div>
    <PageFooter class="page-footer" />
    <TabBar class="tab-bar" />
    <div
      :class="{
        'default__mobile-side-bar': true,
        'default__mobile-side-bar--active': isOpen
      }"
    >
      <MobileSideBar />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSideBarStore } from '@/stores/side-bar';

const sideBarStore = useSideBarStore();

const isOpen = computed((): boolean => {
  return sideBarStore.isOpen;
});

</script>

<style>
html, body {
  margin: 0;

  padding: 0;

  font-family: 'PT Sans', sans-serif;
}

html {
  box-sizing: border-box;
  width: 100%;
}

body {
 min-width: 360px;

 background: var(--body-bg-color);

 font-size: 16px;
}

a {
  text-decoration: none;

  color: black;
}

a:hover {
  color: var(--second-color);
}

svg {
  fill: rgb(98 112 112);
}

</style>

<style lang="scss" scoped>
.default {
  display: flex;
  flex-direction: column;

  min-height: 100vh;

  &__side-bar {
    display: none;

    @media (min-width: $desktop) {
      position: sticky;
      top: 62px;

      display: flex;
    }
  }

  &__mobile-side-bar {
  position: fixed;
  z-index: 2;
  top: 0;
  left: -100vw;

  display: block;

  transition: all 0.3s;

  &--active {
    left: 0;
  }

  @media (min-width: $desktop) {
      display: none;
    }
  }
}

.container {
  flex: 1;

  box-sizing: border-box;
  width: 100%;
  margin-top: 42px;
  margin-bottom: 50px;

  &__inner {
    box-sizing: border-box;
    width: 100%;

    transition: all 0.2s;

    @media (min-width: $mobile) {
      width: 600px;
    }

    @media (min-width: $desktop) {
      width: $desktop;
      width: 1200px;
    }
  }

  @media (min-width: $mobile) {
   display: flex;
   justify-content: center;
  }

  @media (min-width: $desktop) {
    margin-bottom: 0;
  }
}

.wrap {
  width: 100%;
  margin-top: 10px;

  @media (min-width: $desktop) {
    display: grid;
    grid-template-columns: 220px 1fr 220px;
    gap: 60px;

    margin-top: 20px;
  }
}

.header {
  position: fixed;
  z-index: 1;
  top: 0;
}

.page-footer {
  display: none;

  @media (min-width: $desktop) {
    display: flex;
  }
}

.tab-bar {
  position: fixed;
  bottom: 0;

  @media (min-width: $desktop) {
    display: none;
  }
}
</style>
