<template>
  <div class="c-content-loader">
    <div class="item" v-for="n in 3" :key="n"></div>
  </div>
</template>

<script>
export default {
  name: 'preloaderComp'
}
</script>

<style lang="scss" scoped>
.item {
  height: 22px;
  border-radius: 4px;
  margin-bottom: 10px;
  background: linear-gradient(90deg, #EAEAEA 0%, #F8F8F8 50%, #EAEAEA 100%);
  animation: swing 2s infinite;

  &:nth-child(2) {
    width: 70%;
  }
  &:nth-child(3) {
    width: 40%;
  }
}
</style>
