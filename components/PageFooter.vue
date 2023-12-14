<template>
  <div class="footer">
    <About />
  </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  align-items: center;
  flex-direction: column;

  margin-top: 30px;

  border: 1px dotted rgb(184 215 30);

  & > p {
    margin: 0;
  }
}
</style>
