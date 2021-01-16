<template>
  <div class="card">
    <div>Register</div>
    <form novalidate @submit.prevent="onSubmit()">
      <AppControlInput :data="$v.formData.email">email</AppControlInput>
      <AppControlInput :data="$v.formData.name">full name</AppControlInput>
      <AppControlInput :data="$v.formData.password" :isPassword="true"
        >password</AppControlInput
      >
      <AppControlInput :data="$v.formData.passwordRepeat" :isPassword="true"
        >password again</AppControlInput
      >
      <AppButton
        :type="'submit'"
        :disabled="
          $v.$invalid ||
            $v.formData.password.$model != $v.formData.passwordRepeat.$model
        "
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
      name: {
        required
      },
      email: {
        email,
        required
      },
      password: {
        required,
        minLength: minLength(6)
      },
      passwordRepeat: {
        minLength: minLength(6)
      }
    }
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        passwordRepeat: ""
      }
    };
  },
  methods: {
    onSubmit() {
      const params = this.$v.formData.$model;
      this.$store
        .dispatch("authUser", params)
        .then(() => this.$router.push("/sell"));
    }
  }
};
</script>

<style></style>
