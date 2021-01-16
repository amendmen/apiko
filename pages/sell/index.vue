<template>
  <div>
    <Search />
    <div class="inner-container">
      <Filtering />
      <Products :items="products" />
    </div>
  </div>
</template>

<script>
import Products from "@/components/Products";
import Search from "@/components/Search";
import Filtering from "@/components/Filtering";

export default {
  middleware: ["check-auth", "auth"],
  components: {
    Products,
    Search,
    Filtering
  },

  asyncData(context) {
    context.store.dispatch("setProducts");
  },
  computed: {
    products() {
      return this.$store.getters.products;
    }
  }
};
</script>

<style></style>
template
