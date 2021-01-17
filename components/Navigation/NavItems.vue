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
          <div class="user">TS</div>
        </li>
        <li class="navigation__item">
          <nuxt-link exact to="/favorites" class="fav">
            <svg-icon name="heart-shape" />
          </nuxt-link>
        </li>
        <li class="navigation__item">
          <span @click="onLogout()"> <svg-icon name="logout"/></span>
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

  &__items {
    list-style: none;
    display: flex;
    flex-flow: column;
    padding: 0;
  }

  &__item {
    font-size: 18px;
    margin-bottom: 15px;
  }
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
    padding: 5px;
    display: block;
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

  .user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #f1c40f;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: rgba(19, 15, 2, 0.72);
    margin-right: 20px;
  }
  @media (min-width: 992px) {
    &__items {
      flex-flow: row;
      align-items: center;
    }

    &__item {
      font-size: 14px;
      padding: 0;
    }
    a {
      padding: 5px 40px;
    }

    .user {
      margin-left: 20px;
    }
    .fav {
      padding: 5px;
    }
  }
}
</style>
