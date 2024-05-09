<template>
  <div :class="$style.wrapper">
    <img :class="$style.img" :src="imgUrl" :alt="title">
    <h2 :class="$style.text"> {{ title }} </h2>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
  title?: string
  imgUrl?: string
}>();

</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid transparent;
  padding: 20px;
  transition: .25s;
  cursor: pointer;
  &:hover {
    border-color: #f5f5f5;
    .text {
      color: var(--red-color);
    }
  }
}

.img {
  display: block;
  max-width: 100%;
  min-height: 400px;
  object-fit: contain;
}

.text {
  font-size: 24px;
}
</style>
