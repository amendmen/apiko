<template>
  <div class="container">
    <div class="create">
      <ProductForm @submit="onSaveProduct" />
    </div>
  </div>
</template>

<script>
import ProductForm from "@/components/ProductForm";
export default {
  middleware: ["check-auth", "auth"],
  components: {
    ProductForm
  },
  methods: {
    onSaveProduct(product) {
      this.$store.dispatch("addProduct", product);
    }
  }
};
</script>

<style lang="scss">
.create {
  background: #ffffff;
  box-shadow: 0px 2px 42px rgba(0, 0, 0, 0.111233);
  border-radius: 7px;
  max-width: 1136px;
  margin-top: 34px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 36px;
  padding-bottom: 32px;
  padding-left: 15px;
  padding-right: 15px;
}
</style>
