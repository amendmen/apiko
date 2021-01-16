<template>
  <div class="product-form">
    <div class="product-form__title">Add product</div>
    <form novalidate @submit.prevent="onSave()">
      <AppControlInput
        :data="$v.formData.title"
        :placeholder="'For example: Iron man suit'"
        >title</AppControlInput
      >
      <AppControlInput
        :data="$v.formData.location"
        :placeholder="'For example: Los Angeles, CA'"
        >location</AppControlInput
      >
      <AppControlInput
        :data="$v.formData.description"
        controlType="textarea"
        :placeholder="'For example: Iron man suit'"
        >description</AppControlInput
      >
      <UploadImage @addedFile="onFileAdded($event)" />
      <AppControlInput
        :data="$v.formData.price"
        :placeholder="'For example: 99'"
        >price</AppControlInput
      >
      <AppButton :type="'submit'" :disabled="$v.$invalid">Submit</AppButton>
    </form>
  </div>
</template>

<script>
import UploadImage from "@/components/UI/UploadImage";
import { validationMixin } from "vuelidate";
const { required, numeric } = require("vuelidate/lib/validators");

export default {
  mixins: [validationMixin],
  components: {
    UploadImage
  },
  validations: {
    formData: {
      title: {
        required
      },
      location: {
        required
      },
      description: {},
      price: {
        required,
        numeric
      }
    }
  },
  data() {
    return {
      formData: {
        title: "",
        location: "",
        description: "",
        price: ""
      },
      photos: [],
      files: []
    };
  },
  methods: {
    onFileAdded(file) {
      this.files.push(file);
    },
    onSave() {
      console.log(this.$v);
      const params = this.$v.formData.$model;
      params.files = this.files;
      this.$emit("submit", params);
    }
  }
};
</script>

<style lang="scss">
.product-form {
  max-width: 684px;
  margin-left: auto;
  margin-right: auto;

  &__title {
    text-align: center;
  }
}
</style>
