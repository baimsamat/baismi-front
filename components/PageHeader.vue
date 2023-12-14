<template>
  <header class="header">
    <NuxtLink class="header__link" to="/">
      BAISMI
    </NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
.header {
  box-sizing: border-box;
  width: 100%;
  height: 42px;
  padding: 6px 0;

  text-align: center;

  border-bottom: 1px solid var(--border-color);
  background-color: white;

  font-family: PTSans-Bold, sans-serif;
  font-size: 24px;
  font-weight: bold;

  &__link {
    color: var(--third-color);
  }
}
</style>
