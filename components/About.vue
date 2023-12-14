<template>
  <div class="about">
    <p>Сайт разработан в учебных целях</p>
    <p><a href="https://github.com/baimsamat/baismi-front" target="_blank">Исходный код</a></p>
    <p>{{ new Date().getFullYear() }} г.</p>
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;

  & > p {
    margin: 0;
    margin-bottom: 4px;
  }

  @media (min-width: $desktop) {
    align-items: center;
  }
}
</style>
