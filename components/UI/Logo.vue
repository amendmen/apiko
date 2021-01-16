<template>
  <nuxt-link to="/">
    <div class="logo">
      <img v-if="dark" src="~assets/images/Logofull-light.png" alt="" />
      <img v-else src="~assets/images/Logofull.png" alt="" /></div
  ></nuxt-link>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style></style>
