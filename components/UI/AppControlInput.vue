<template>
  <div class="input-control">
    <label class="input-control__label"
      ><slot /><span
        v-if="data.$params.required"
        class="input-control__required"
        >*</span
      ></label
    >
    <input
      v-if="controlType === 'input'"
      class="input-control__input"
      v-model.trim="data.$model"
      :type="isPassword && !isPassVisible ? 'password' : 'text'"
    />
    <textarea
      v-if="controlType === 'textarea'"
      class="input-control__textarea"
      rows="10"
      v-model.trim="data.$model"
    ></textarea>
    <div
      v-if="isPassword"
      @click="isPassVisible = !isPassVisible"
      class="input-control__toggle"
      :class="{ isVisible: isPassVisible }"
    >
      <svg-icon name="eye" />
    </div>
    <div v-if="data.$error" class="error">Invalid input</div>
    <div v-if="help" class="input-control__help">{{ help }}</div>
  </div>
</template>

<script>
export default {
  name: "AppInputControl",
  props: {
    data: {
      type: Object,
      required: true,
      default: {}
    },
    controlType: {
      type: String,
      required: false,
      default: "input"
    },
    help: {
      type: String,
      required: false,
      default: ""
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isPassVisible: false
    };
  },
  mounted() {
    console.log(this.data);
  }
};
</script>

<style scoped lang="scss">
.input-control {
  margin: 15px 0;
  text-align: left;
  position: relative;

  &__label {
    display: block;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
    margin-bottom: 4px;
    color: #303030;
  }

  &__required,
  .error {
    color: #ff0000;
  }
  &__input,
  &__textarea {
    display: block;
    width: 100%;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    font-size: 16px;
    padding: 0 16px;
  }

  &__input {
    height: 58px;
  }

  &__help {
    letter-spacing: 0.4px;
    color: #8c8c8c;
    text-align: right;
    cursor: pointer;
    margin-top: 3px;
  }
  &__toggle {
    position: absolute;
    right: 10px;
    top: 30px;
    padding: 5px;

    &.isVisible {
      opacity: 0.7;
    }

    .icon {
      width: 24px;
      height: 24px;
    }
  }
  textarea {
    resize: vertical;
    padding: 16px;
  }
}
</style>
