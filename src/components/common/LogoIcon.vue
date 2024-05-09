<script setup lang="ts">

</script>

<template>
  <div :class="$style.wrapper">
    <img :class="$style.img" src="@/assets/img/logo.svg" alt="logo">
    <span :class="$style.text"> DressShop </span>
  </div>
</template>

<style module lang="scss">
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
}

.img {
  width: 50px;
  height: 70px;
}

.text {
  font-size: 30px;
  font-weight: var(--font-weight-bold);
  color: var(--blue-font);
}
</style>
