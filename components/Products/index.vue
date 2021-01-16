<template>
  <div class="products-list">
    <ProductItem v-for="item in items" :key="item.id" :product="item" />
  </div>
</template>

<script>
import ProductItem from "@/components/Products/ProductItem";
export default {
  components: {
    ProductItem
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => []
    }
  }
};
</script>

<style>
.products-list {
  display: flex;
  flex-wrap: wrap;
  margin-left: -3px;
  margin-right: -3px;
}
</style>
