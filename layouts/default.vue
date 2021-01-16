<template>
  <div>
    <Header :dark="true" />
    <Nuxt />
  </div>
</template>

<script>
import Header from "@/components/Navigation/Header";
export default {
  components: {
    Header
  }
};
</script>
