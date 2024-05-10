<template>
  <button :class="$style.button">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

export interface Props {
  text?: string,
}

withDefaults(defineProps<Props>(), {
  text: 'Place order',
});
</script>

<style module lang="scss">
.button {
  width: 210px;
  height: 50px;
  border: 1px solid var(--blue-font);
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: var(--blue-font);
  color: var(--white-color);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: transparent;
    color: var(--blue-font);
  }
}
</style>
