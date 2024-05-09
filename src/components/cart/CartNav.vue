<template>
  <div :class="$style.cart">
    <img :class="$style.img" src="@/assets/img/cart.svg" alt="cart navigation button">
    <div :class="$style.count"> {{ cartStore.amount }} </div>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';

const cartStore = useCartStore();
</script>

<style module lang="scss">
.cart {
  position: relative;
  cursor: pointer;
}

.img {
  width: 40px;
  height: 40px;
}

.count {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: var(--white-color);
  background-color: var(--red-color);
  position: absolute;
  right: 0;
  bottom: 0;
  font-weight: var(--font-weight-bold);
}
</style>
