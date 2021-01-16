<template>
  <div class="toggler" :class="{ isDark: dark }" @click="onShowSidenav()">
    <svg-icon name="burger" />
  </div>
</template>

<script>
export default {
  props: {
    dark: {
      type: Boolean,
      required: false
    }
  },
  methods: {
    onShowSidenav() {
      this.$store.commit("showSidenav", true);
    }
  }
};
</script>

<style lang="scss">
.toggler {
  padding: 5px;
  cursor: pointer;

  .icon {
    color: #000;
  }
  &.isDark {
    .icon {
      color: #fff;
    }
  }

  @media (min-width: 992px) {
    display: none;
  }
}
</style>
