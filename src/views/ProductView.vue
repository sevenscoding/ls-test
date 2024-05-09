<template>
<fulfilling-bouncing-circle-spinner
  v-if="isLoading"
  :class="$style.loader"
  :animation-duration="1000"
  :size="120"
  color="#e81c1c"
/>
<div :class="$style.wrapper">
  <img v-if="data?.imageUrl" :class="$style.image" :src="data?.imageUrl" :alt="data?.name">
  <div :class="$style.block">
    <div :class="$style.name"> {{ data?.name }} </div>
    <div :class="$style.description" v-html="data?.description"></div>
    <ButtonDefault v-if="!isLoading" @click="addItem(data)"/>
  </div>
</div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onBeforeMount, ref } from 'vue';
import { getProductDetails } from '@/api';
import { FulfillingBouncingCircleSpinner } from 'epic-spinners';
import ButtonDefault from '@/components/common/ButtonDefault.vue';
import { useCartStore } from '@/store/cart';

const { addToCart } = useCartStore();

const route = useRoute();

const isLoading = ref(false);
const data = ref(null);

onBeforeMount(async () => {
  isLoading.value = true;
  const details = await getProductDetails(route.params.id);
  console.log(details);
  data.value = details;
  isLoading.value = false;
});

const addItem = (item: any) => {
  addToCart(item);
};
</script>

<style module lang="scss">
.wrapper {
  width: 1140px;
  margin: 0 auto;
  display: flex;
}

.name {
  font-size: 36px;
  font-weight: var(--font-weight-bold);
}

.image {
  width: 400px;
  height: auto;
  object-fit: contain;
}

.block {
  padding: 20px;
  text-align: left;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
