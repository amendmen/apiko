<template>
  <div class="auth">
    <div class="auth__wrapper">
      <Login v-if="isLoginMode" />
      <Register v-else />
      <div class="auth__switcher card">
        <span v-if="!isLoginMode"
          >I already have an account,
          <span class="auth__toggle" @click="toggleMode">LOG IN</span>
        </span>
        <span v-else
          >I have no account,
          <span class="auth__toggle" @click="toggleMode">REGISTER NOW</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Login from "@/components/Auth/Login";
import Register from "@/components/Auth/Register";

export default {
  layout: "auth",
  middleware: ["check-auth"],
  component: {
    Login,
    Register
  },
  data() {
    return {
      isLoginMode: true
    };
  },
  methods: {
    toggleMode() {
      this.isLoginMode = !this.isLoginMode;
    }
  }
};
</script>

<style lang="scss">
.auth {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &__wrapper {
    width: 100%;
    max-width: 425px;
    margin-top: 50px;
  }

  &__toggle {
    color: $main;
    cursor: pointer;
  }
}
</style>
