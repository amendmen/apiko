<template>
  <div class="product">
    <div class="product__preview">
      <img :src="getImgUrl" alt="" />
    </div>
    <div class="product__info">
      <div class="product__status" @click="onFavoritesUpdate">
        <svg-icon :name="product.isFavList ? 'heart-like' : 'heart-shape'" />
      </div>
      <div class="product__title">
        {{ product.title }}
      </div>
      <div class="product__price">${{ product.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  computed: {
    getImgUrl() {
      let url = "";
      if (this.product.photos && this.product.photos.length) {
        url = this.product.photos[this.product.photos.length - 1].imgUrl;
      }
      return url;
    }
  },
  methods: {
    onFavoritesUpdate() {
      this.$store.dispatch("updateFavStatus", this.product);
    }
  }
};
</script>

<style lang="scss">
.product {
  background: #ffffff;
  border: 1px solid #e4e4e4;
  box-sizing: border-box;
  box-shadow: 0px 4px 14px rgba(121, 121, 121, 0.0527344);
  border-radius: 4px;
  padding: 3px;
  margin: 3px;
  width: 100%;

  &__preview {
    height: 150px;
    width: 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px 4px 0px 0px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__status {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.163407);
    position: absolute;
    right: 3px;
    top: -15px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    .icon {
      color: $main;
    }
  }
  &__info {
    padding: 3px 9px;
    position: relative;
  }
  &__title {
    font-size: 15px;
    line-height: 17px;
    color: #373738;
  }

  &__price {
    font-size: 18px;
    line-height: 21px;
    color: #101010;
    font-weight: 600;
  }
  @media (min-width: 480px) {
    width: calc(50% - 6px);
  }

  @media (min-width: 768px) {
    width: calc(33% - 6px);
  }

  @media (min-width: 992px) {
    width: calc(25% - 6px);
  }
}
</style>
