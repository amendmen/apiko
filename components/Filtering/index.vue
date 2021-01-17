<template>
  <div class="filter card">
    <div class="filter__category">
      <svg-icon name="grid" />
      <select name="" id="">
        <option value="1">Choose category</option>
      </select>
    </div>
    <div class="filter__range">
      <input
        class="filter__input"
        type="text"
        placeholder="Price from (USD)"
        v-model="min"
        @input="onChangeFilterRange('min')"
      />
      <div class="divider"></div>
      <input
        class="filter__input"
        type="text"
        placeholder="Price to (USD)"
        v-model="max"
        @input="onChangeFilterRange('max')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: null,
      max: null
    };
  },
  methods: {
    onChangeFilterRange(type) {
      this[type] = this[type].replace(/\D/g, "");
      const filter = {
        type: type,
        value: this[type]
      };
      this.$store.commit("setFilterRange", filter);
    }
  }
};
</script>

<style lang="scss">
.filter {
  display: flex;
  // flex-flow: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin-top: 20px;
  text-align: left;
  &.card {
    padding: 12px;
    padding-bottom: 0;
  }
  &__category {
    position: relative;
    margin-bottom: 12px;
    width: 100%;

    .icon {
      position: absolute;
      left: 10px;
      top: 8px;
    }
    select {
      height: 35px;
      width: 100%;
      background: #f9fafb;
      border: 1px solid #dedee0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 5px;
      padding-left: 30px;
    }
  }

  .divider {
    height: 1px;
    width: 12px;
    background-color: #dedee0;
    margin: 7px;
  }
  &__range {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    width: 100%;
  }

  &__input {
    height: 35px;
    width: 100%;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
  }

  @media (min-width: 680px) {
    &__category {
      margin-right: 23px;
      width: 285px;
    }

    &__range {
      width: auto;
    }
    &__input {
      width: 143px;
    }
  }
}
</style>
