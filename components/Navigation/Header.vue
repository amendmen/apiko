<template>
  <div class="header" :class="{ isDark: dark }">
    <div class="container">
      <Logo :dark="dark" />
      <NavItems :dark="dark" />
    </div>
  </div>
</template>

<script>
import NavItems from "@/components/Navigation/NavItems";

export default {
  props: {
    dark: {
      type: Boolean,
      required: false
    }
  },
  components: {
    NavItems
  }
};
</script>

<style lang="scss">
.header {
  height: 77px;
  width: 100%;
  &.isDark {
    background: linear-gradient(180deg, #090810 0%, #171236 100%);
  }
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
