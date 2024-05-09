<template>
  <RadarSpinner
    v-if="isLoading"
    :class="$style.loader"
    :animation-duration="1000"
    :size="120"
    color="#e81c1c"
  />
  <div :class="$style.wrapper">
    <div :class="$style.block">
      <template v-if="data?.length">
        <router-link
          :class="$style.link"
          v-for="item in data"
          :key="item?.id"
          :to='`products/${item?.id}`'
        >
          <CategoryItem
            :title="item?.name"
            :id="item?.id"
            :imgUrl="item?.imageUrl"
          />
        </router-link>
      </template>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { RadarSpinner } from 'epic-spinners';
import CategoryItem from '@/components/category/CategoryItem.vue';
import { getAllCategories } from '@/api';

const isLoading = ref(false);
const data = ref(null);

onBeforeMount(async () => {
  isLoading.value = true;
  const { items } = await getAllCategories();
  if (items.length) {
    data.value = items;
  }
  isLoading.value = false;
});
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
