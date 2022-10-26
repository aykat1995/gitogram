<template>
  <div class="spinner-wrapp">
    <div class="spinner" :class="{white}"></div>
  </div>
</template>

<script>
export default {
  name: 'spinnerComp',
  props: {
    white: {
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
.spinner {
    height: 50px;
    width: 50px;
    border-left: 3px solid #31AE54;
    border-bottom: 3px solid #31AE54;
    border-right: 3px solid #31AE54;
    border-top: 3px solid transparent;
    border-radius: 50%;
    animation: spinner 1s linear infinite;
    &.white {
      width: 18px;
      height: 18px;
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      border-right: 3px solid #fff;
    }
}
@keyframes spinner {
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
}
</style>
