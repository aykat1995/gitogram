<template>
  <div class="toggler-wrapp">
    <button :class="['button', { active: isOpened }]" @click="toggle">
      <span class="text">{{isOpened ? "Hide" : "Show"}} issues</span>
      <span class="icon">
        <iconComp name="triangleIcon" />
      </span>
    </button>
  </div>
</template>

<script>
  import { iconComp } from '../../icons'

export default {
  name: 'togglerItem',
  components: {
    iconComp
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" src="./togglerItem.scss" scoped></style>
