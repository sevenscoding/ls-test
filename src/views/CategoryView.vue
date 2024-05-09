<template>
  <RadarSpinner
    v-if="isLoading"
    :class="$style.loader"
    :animation-duration="1000"
    :size="120"
    color="#e81c1c"
  />
  <div :class="$style.wrapper">
    <template v-if="data?.length">
      <CategoryItem
        v-for="item in data"
        :key="item?.id"
        :title="item?.name"
        :imgUrl="item?.imageUrl"
        @click="goTo(item?.id)"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from 'vue';
import { RadarSpinner } from 'epic-spinners';
import CategoryItem from '@/components/category/CategoryItem.vue';
import { getAllCategories, getCategory } from '@/api';

const isLoading = ref(false);
const data = ref(null);

const goTo = async (id: string) => {
  const categories = await getCategory(id);
  console.dir(categories);
};

onBeforeMount(async () => {
  isLoading.value = true;
  const { items } = await getAllCategories();
  console.log(items);
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
</style>
