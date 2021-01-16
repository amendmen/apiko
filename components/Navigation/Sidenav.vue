<template>
  <div
    class="sidenav"
    :class="{ isOpen: isShow, isDark: dark }"
    @click="hideSidenav()"
  >
    <div class="backdrop"></div>
    <div class="side-panel">
      <div class="forTablet">
        <Logo :dark="dark" />
        <NavItems :dark="dark" />
      </div>
    </div>
  </div>
</template>

<script>
import Navitems from "@/components/Navigation/NavItems";

export default {
  props: {
    dark: {
      type: Boolean,
      required: false
    }
  },
  components: {
    Navitems
  },
  computed: {
    isShow() {
      return this.$store.getters.isShowSidenav;
    }
  },
  methods: {
    hideSidenav() {
      this.$store.commit("showSidenav", false);
    }
  }
};
</script>

<style lang="scss">
.sidenav {
  .backdrop {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0.5;
    display: none;
    z-index: 3;
  }

  .side-panel {
    background: #fff;
    height: 100%;
    width: 250px;
    position: absolute;
    top: 0;
    transform: translateX(-100%);
    z-index: 4;
    transition: all 0.4s;
    padding: 15px;
  }
  &.isDark {
    .side-panel {
      background: linear-gradient(180deg, #090810 0%, #171236 100%);
    }
  }

  &.isOpen {
    .backdrop {
      display: block;
    }

    .side-panel {
      transform: translateX(0);
    }
  }

  @media (min-width: 992px) {
    .forTablet {
      display: none;
    }
  }
}
</style>
