<template>
  <div :class={active} class="progress">
    <div ref="indicator" class="indicator"></div>
  </div>
</template>

<script>
  export default {
    name: 'progressBar',
    data () {
      return {
        active: false
      }
    },
    emits: ['onFinish'],
    methods: {
      emitOnFinish () {
        this.$emit('onFinish')
      }
    },
    mounted () {
      // this.$nextTick(() => {
      //   this.active = true
      // })
      setTimeout(() => {
        this.active = true
      }, 0)
      this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
    },
    beforeUnmount () {
      this.$refs.indicator.remove.addEventListener('transitionend', this.emitOnFinish)
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
