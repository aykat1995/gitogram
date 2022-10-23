<template>
  <div class="progress" :class="active">
    <div ref="indicator" :style="style" class="indicator"></div>
  </div>
</template>

<script>
export default {
  name: 'progressBar',
  props: {
    active: {
      type: Boolean,
      default: true
    }
  },
  emits: ['onFinish'],
  data () {
    return {
      style: {}
    }
  },
  mounted () {
    if (this.active) {
        this.style = {
          width: '100%',
          transition: 'all ' + 5 + 's'
        }
    }
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  },
  watch: {
    active (newValue) {
      if (newValue) {
        setTimeout(() => {
          this.style = {
            width: '100%',
            transition: 'all ' + 5 + 's'
          }
        }, 0)
      } else {
        this.style = {
          width: '0%'
        }
      }
    }
  },
  methods: {
    emitOnFinish () {
      this.$emit('onFinish')
    }
  }
}
</script>

<style lang="scss" scoped>
.progress {
  position: relative;
  height: 5px;
  border-radius: 1px;
  background: rgba(49, 174, 84, 0.3);
}
.indicator {
  position: absolute;
  width: 0;
  height: 5px;
  border-radius: 1px;
  background: #31AE54;;
}
</style>
