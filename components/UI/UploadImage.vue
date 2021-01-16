<template>
  <div class="upload">
    <div class="upload__label">PHOTOS</div>
    <div class="upload__wrapper">
      <div
        v-for="(imgSrc, index) in imgPreviews"
        :key="index"
        class="upload__preview"
      >
        <img :src="imgSrc" alt="" />
      </div>

      <input
        style="display: none;"
        type="file"
        accept="image/*"
        ref="uploadImage"
        @change="onFileSelected($event)"
      />
      <button
        class="upload__add"
        type="button"
        @click.prevent="$refs.uploadImage.click()"
      >
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPreviews: []
    };
  },
  methods: {
    onFileSelected(event) {
      let file = event.target.files[0];
      this.$emit("addedFile", file);
      this.readURL(file);
    },
    readURL(file) {
      const reader = new FileReader();
      reader.onload = e => {
        this.imgPreviews.push(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  }
};
</script>

<style lang="scss">
.upload {
  &__label {
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.3px;
    text-transform: uppercase;
  }

  &__wrapper {
    background: #f9fafb;
    border: 1px solid #dedee0;
    box-sizing: border-box;
    border-radius: 5px;
    display: flex;
    flex-wrap: wrap;
  }

  &__preview {
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  &__preview,
  &__add {
    font-size: 80px;
    width: 92px;
    height: 92px;
    background: #e4e4e4;
    border-radius: 4px;
    color: $main;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
  }

  &__add {
    cursor: pointer;
  }
}
</style>
