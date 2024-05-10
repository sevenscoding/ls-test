<template>
  <div :class="$style.wrapper">
    <img :class="$style.image" src="@/assets/img/success.svg" alt="Success!">
    <div :class="$style.text">Success!</div>
  </div>
</template>

<style module lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.image {
  width: 200px;
  height: 200px;
}

.text {
  margin-top: 20px;
  font-size: 90px;
  color: var(--blue-font);
}
</style>
