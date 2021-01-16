<template>
  <div class="filter card">
    <div class="filter__category">
      <svg-icon name="grid" />
      <select name="" id="">
        <option value="1">Choose category</option>
      </select>
    </div>
    <div class="filter__range">
      <input class="filter__input" type="text" placeholder="Price from (USD)" />
      -
      <input class="filter__input" type="text" placeholder="Price to (USD)" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.filter {
  display: flex;
  // flex-flow: column;
  flex-wrap: wrap;
  justify-content: flex-start;

  margin-top: 20px;
  text-align: left;
  padding-bottom: 0;
  &.card {
    padding: 12px;
    padding-bottom: 0;
  }
  &__category {
    margin-right: 23px;
    position: relative;
    margin-bottom: 12px;
    .icon {
      position: absolute;
      left: 10px;
      top: 8px;
    }
    select {
      height: 35px;
      width: 285px;
      background: #f9fafb;
      border: 1px solid #dedee0;
      box-sizing: border-box;
      border-radius: 5px;
      padding: 5px;
      padding-left: 30px;
    }
  }

  &__range {
    margin-bottom: 12px;
  }

  &__input {
    height: 35px;
    width: 143px;
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 5px;
  }
}
</style>
