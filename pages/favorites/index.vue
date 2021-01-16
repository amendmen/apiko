<template>
  <div class="inner-container">
    <h1>Favorites list</h1>
    <Products :items="products" />
  </div>
</template>

<script>
export default {
  layout: "default",
  middleware: ["check-auth", "auth"],
  computed: {
    products() {
      return this.$store.getters.favorites;
    }
  }
};
</script>

<style></style>
