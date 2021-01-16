<template>
  <button class="button" :disabled="disabled" :type="type">
    <slot />
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: "button"
    }
  }
};
</script>

<style lang="scss">
.button {
  height: 58px;
  width: 100%;
  max-width: 377px;
  background: $main;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: auto;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
