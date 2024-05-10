<template>
  <div :class="$style.wrapper">
    <fulfilling-bouncing-circle-spinner
      v-if="isLoading"
      :class="$style.loader"
      :animation-duration="1000"
      :size="120"
      color="#e81c1c"
    />
    <div :class="$style.wrapper">
        <template v-if="data?.length">
          <router-link
            :class="$style.link"
            v-for="item in data"
            :key="item?.id"
            :to='`/product/${item?.id}`'
          >
            <ProductItem
              :title="item?.name"
              :id="item?.id"
              :imgUrl="item?.imageUrl"
              :price="item?.price"
              @addItem="addItem(item)"
            />
          </router-link>
        </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import { getCategoryProducts } from '@/api';
import { useRoute } from 'vue-router';
import { FulfillingBouncingCircleSpinner } from 'epic-spinners';
import ProductItem from '@/components/product/ProductItem.vue';
import { useCartStore } from '@/store/cart';
import { Product } from '@/types/product';

const isLoading = ref(false);
const data = ref(null);
const { addToCart } = useCartStore();
const route = useRoute();

onBeforeMount(async () => {
  isLoading.value = true;
  const items = await getCategoryProducts(route.params.id);
  if (items.length) {
    data.value = items;
  }
  isLoading.value = false;
});

const addItem = (item: Product) => {
  console.log(item);
  addToCart(item);
};
</script>

<style module lang="scss">
.wrapper {
  width: 1140px;
  margin: 0 auto;
  padding-bottom: 40px;
  & > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.link {
  text-decoration: none;
}
</style>
