<template>
  <button :class="$style.button">{{ text }}</button>
</template>

<script setup lang="ts">
import { defineProps, withDefaults } from 'vue';

interface Props {
  text?: string,
}

withDefaults(defineProps<Props>(), {
  text: 'Buy',
});
</script>

<style module lang="scss">
.button {
  width: 140px;
  height: 40px;
  border: 1px solid var(--red-color);
  border-radius: 8px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  background: var(--red-color);
  color: var(--white-color);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  cursor: pointer;
  transition: .25s;
  &:hover {
    background-color: transparent;
    color: var(--red-color);
  }
}
</style>
