<template>
  <div>
    <Header />
    <Sidenav />
    <Nuxt />
  </div>
</template>

<style></style>

<script>
import Header from "@/components/Navigation/Header";
import Sidenav from "@/components/Navigation/Sidenav.vue";

export default {
  components: {
    Header
  }
};
</script>
