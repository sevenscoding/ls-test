<template>
  <header :class="$style.wrapper">
    <router-link :class="$style.link" to="/">
      <LogoIcon />
    </router-link>
    <CartNav />
  </header>
</template>

<script setup lang="ts">
import LogoIcon from '@/components/common/LogoIcon.vue';
import CartNav from '@/components/cart/CartNav.vue';
</script>

<style module lang="scss">
.wrapper {
  margin: 20px 0;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #879bb91a;
}

.link {
  text-decoration: none;
}
</style>
