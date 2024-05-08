<template>
  <div class="wrapper">
      123
  </div>
</template>

<script setup lang="ts">
import { getAllCategories } from '@/api';

const data = await getAllCategories();
console.log(data);
</script>

<style module lang="scss">
.wrapper {
  background-color: #000;
}
</style>
