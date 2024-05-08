<template>
  <div :class="$style.wrapper">
    <router-link :class="$style.logo" to="/">
      Super Shop
    </router-link>
  </div>
</template>

<script setup lang="ts">

</script>

<style module lang="scss">
.wrapper {
  margin: 30px 0;
}

.logo {
  font-size: 30px;
  font-weight: var(--font-weight-bold);
  color: var(--black-color);
  border: 3px solid  var(--red-color);
  border-radius: 8px;
  text-decoration: none;
  background-color: var(--white-color);
  padding: 10px;
  transition: .25s;
  &:hover {
    color: var(--white-color);
    background-color: var(--red-color);
  }
}
</style>
