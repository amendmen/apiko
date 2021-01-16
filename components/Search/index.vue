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
  padding: 15px 0;
  background-color: #171236;
  display: flex;
  align-items: center;
  flex-flow: column;

  &__form {
    display: flex;
    flex-wrap: wrap;
  }

  &__group {
    display: flex;
    position: relative;
    margin-bottom: 5px;
    width: 100%;
  }

  &__control {
    height: 46px;
    font-size: 15px;
    line-height: 31px;
    color: rgba(123, 123, 123, 0.776523);
    padding: 0;
    padding-left: 52px;
    width: 100%;
  }

  &__icon {
    position: absolute;
    left: 15px;
    top: 20px;
  }
  &__btn {
    background: #3e3961;
    height: 50px;
    border-radius: 4px;
    flex-grow: 1;
    color: #fff;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  @media (min-width: 768px) {
    &__group {
      width: 40%;
      margin-right: 3px;
    }
  }

  @media (min-width: 992px) {
    &__form {
      flex-wrap: nowrap;
    }

    &__group {
      width: auto;
      &:first-child {
        width: 60%;
      }
    }

    &__btn {
      width: 176px;
    }
  }
}
</style>
