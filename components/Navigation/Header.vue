<template>
  <div class="header" :class="{ isDark: dark }">
    <div class="container">
      <Logo :dark="dark" />
      <div class="desktop">
        <NavItems :dark="dark" />
      </div>
      <SidenavToggler :dark="dark" />
    </div>
  </div>
</template>

<script>
import NavItems from "@/components/Navigation/NavItems";
import SidenavToggler from "@/components/Navigation/SidenavToggler.vue";

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

  .desktop {
    display: none;
    @media (min-width: 992px) {
      display: block;
    }
  }
}
</style>
