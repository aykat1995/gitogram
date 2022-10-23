<template>
  <div :class="{active}" class="progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
  export default {
    name: 'progressBar',
    props: {
      active: Boolean
    },
    emits: ['onFinish'],
    mounted () {
      this.$refs.indicator.addEventListener('transitionend', this.$emit('onFinish'))
    },
    beforeUnmount () {
      this.$refs.indicator.remove.addEventListener('transitionend', this.$emit('onFinish'))
    }
  }
</script>

<style lang='scss' scoped>
.progress {
  background-color: rgba(49, 174, 84, 0.3);
  border-radius: 1px;
  height: 2px;
  position: relative;
  overflow: hidden;
  &.active {
    .indicator {
      width: 100%;
    }
  }
}
.indicator {
  background-color: #31AE54;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 0;
  height: 100%;
  transition: 5s;
}
</style>
