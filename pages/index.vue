<template>
  <div class="home">
    <h1>Home page</h1>
  </div>
</template>

<script>
export default {
  layout: "default",
  middleware: ["check-auth"]
};
</script>

<style lang="scss">
.home {
  text-align: center;
  padding: 50px 20px;
}
</style>
