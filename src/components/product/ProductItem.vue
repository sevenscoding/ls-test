<template>
  <div :class="$style.wrapper">
    <img v-if="imgUrl" :class="$style.img" :src="imgUrl" :alt="title">
    <h2 :class="$style.text"> {{ title }} </h2>
    <div :class="$style.price"> {{ price }}₾</div>
    <ButtonDefault />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import ButtonDefault from '@/components/common/ButtonDefault.vue';

const props = defineProps<{
  title?: string
  imgUrl?: string
  price?: number
}>();

</script>

<style module lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 5px solid transparent;
  padding: 10px 10px 50px;
  transition: .25s;
  cursor: pointer;
  &:hover {
    border-color: #f5f5f5;
    .text {
      color: var(--red-color);
    }
    .price {
      color: var(--black-color);
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
  color: var(--black-color);
  margin-bottom: 10px;
}

.price {
  font-size: 20px;
  color: var(--red-color);
  border-bottom: 1px solid transparent;
  margin-bottom: 20px;
}
</style>
