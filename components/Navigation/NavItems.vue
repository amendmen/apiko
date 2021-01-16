<template>
  <div class="navigation" :class="{ isDark: dark }">
    <ul class="navigation__items">
      <template v-if="isAuth">
        <li class="navigation__item">
          <nuxt-link to="/sell/add">+ add</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link exact to="/sell">Sell</nuxt-link>
        </li>
        <li class="navigation__item">
          <nuxt-link exact to="/favorites">
            <svg-icon name="heart-shape" />
          </nuxt-link>
        </li>
        <li class="navigation__item">
          <span @click="onLogout()">Logout</span>
        </li>
      </template>

      <li v-if="!isAuth" class="navigation__item">
        <nuxt-link to="/auth">Login</nuxt-link>
      </li>
    </ul>
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
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss">
.navigation {
  color: #2b2b2b;

  .icon {
    height: 14px;
    width: 16px;
  }
  a,
  span,
  .icon {
    color: #2b2b2b;
    text-decoration: none;
    cursor: pointer;
  }

  &.isDark {
    a,
    span,
    .icon {
      color: #fff;
    }
  }
  .nuxt-link-active {
    background: $main;
    border-radius: 4px;
    color: #fff;
  }
  @media (min-width: 992px) {
    &__items {
      list-style: none;
      display: flex;
      align-items: center;
    }

    a,
    span {
      padding: 5px 40px;
    }
  }
}
</style>
