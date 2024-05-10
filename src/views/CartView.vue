<template>
<div :class="$style.wrapper">
  <div :class="$style.table">
    <div v-for="(item, key) in cartStore.items" :key="item?.id" :class="$style.item">
      <img v-if="item?.imageUrl" :class="$style.image" :src="item?.imageUrl" :alt="item?.name">
      <div :class="$style.block">
        <div :class="$style.name"> {{ item?.name }} </div>
        <div :class="$style.price"> Price: {{ item?.price }}₾ </div>
      </div>
      <ButtonDefault :class="$style.delete" text="Delete" @click="cartStore.deleteItem(key)"/>
    </div>
    <ButtonPrimary v-if="cartStore.amount" :class="$style.primary" @click="placeOrder" />
  </div>
  <div v-if="!cartStore.amount" :class="$style.empty">Empty list</div>
</div>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';
import ButtonDefault from '@/components/common/ButtonDefault.vue';
import ButtonPrimary from '@/components/common/ButtonPrimary.vue';

const cartStore = useCartStore();
const router = useRouter();

const placeOrder = () => {
  cartStore.clearState();
  router.push({ path: 'success' });
};

</script>

<style module lang="scss">
.wrapper {
  width: 1140px;
  margin: 0 auto;
}

.primary {
  margin-top: 60px;
}

.table {
  width: 100%;
  margin: 20px 50px;
}

.image {
  border-radius: 8px;
  margin-right: 10px;
  display: block;
  height: 50px;
}

.item {
  display: flex;
  align-items: center;
  height: 50px;
  margin-top: 25px;
  margin-bottom: 25px;
}

.block {
  text-align: left;
  width: 300px;
}

.price {
  text-align: left;
  margin-top: 5px;
  color: var(--red-color);
}

.name {
  font-size: 18px;
  font-weight: var(--font-weight-bold);
}

.delete {
  margin-left: 30px;
}

.empty {
  font-size: 44px;
  font-weight: var(--font-weight-bold);
  margin-top: 40px;
  margin-bottom: 40px;
  color: var(--blue-font);
}
</style>
