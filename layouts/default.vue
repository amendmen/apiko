<template>
  <div>
    <Header :dark="true" />
    <Sidenav :dark="true" />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
import Sidenav from "@/components/Navigation/Sidenav.vue";

export default {
  components: {
    Header,
    Sidenav
  }
};
</script>
