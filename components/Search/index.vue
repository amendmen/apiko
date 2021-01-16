<template>
  <div class="search">
    <div class="inner-container">
      <form class="search__form">
        <div class="search__group">
          <svg-icon class="search__icon" name="search_icon" />
          <input
            type="text"
            class="search__control"
            placeholder="Search products by name"
            v-model="search.name"
          />
        </div>
        <div class="search__group">
          <svg-icon class="search__icon" name="location_filled" />
          <input
            type="text"
            class="search__control"
            placeholder="Location"
            v-model="search.location"
          />
        </div>
        <div class="search__btn" @click="onSearch">
          Search
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: {
        name: "",
        location: ""
      }
    };
  },
  methods: {
    onSearch() {
      console.log(this.search);
    }
  }
};
</script>

<style lang="scss">
.search {
  height: 90px;
  background-color: #171236;
  display: flex;
  align-items: center;

  &__form {
    display: flex;
  }

  &__group {
    margin-right: 7px;
    display: flex;
    flex-flow: column;
    position: relative;

    &:first-child {
      width: 60%;
    }
  }

  &__control {
    height: 50px;
    font-size: 15px;
    line-height: 31px;
    color: rgba(123, 123, 123, 0.776523);
    padding-left: 52px;
  }

  &__icon {
    position: absolute;
    left: 15px;
    top: 20px;
  }
  &__btn {
    background: #3e3961;
    border-radius: 4px;
    flex-grow: 1;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-basis: 200px;
    cursor: pointer;
  }
}
</style>
