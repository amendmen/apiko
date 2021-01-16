<template>
  <div class="card">
    <div>Login</div>
    <form novalidate @submit.prevent="onSubmit()">
      <AppControlInput
        :data="$v.formData.email"
        :placeholder="'Example@gmail.com'"
        >email</AppControlInput
      >
      <AppControlInput
        :data="$v.formData.password"
        :isPassword="true"
        :help="'Don’t remember password?'"
        >password</AppControlInput
      >
      <AppButton
        :disabled="
          $v.$invalid ||
            !$v.formData.password.$model ||
            !$v.formData.email.$model
        "
        :type="'submit'"
        >Continue</AppButton
      >
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
const { required, minLength, email } = require("vuelidate/lib/validators");

export default {
  mixins: [validationMixin],
  validations: {
    formData: {
      email: {
        email
      },
      password: {
        minLength: minLength(6)
      }
    }
  },
  data() {
    return {
      formData: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const params = this.$v.formData.$model;
      params.isLogin = true;
      this.$store
        .dispatch("authUser", params)
        .then(() => this.$router.push("/sell"));
    }
  }
};
</script>

<style></style>
