<template>
  <button
  class="button"
  :class="[`${theme}`, `${size}`, {'hover-text': withHoverText}]"
  :data-hover-text="hoverText"
  >
    <div class="spinner" v-if="loading">
      <spinnerComp white/>
    </div>
    <span v-if="!loading" class="button-text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
import spinnerComp from '../spinner/spinnerComp.vue'

export default {
  name: 'buttonComp',
  components: { spinnerComp },
  data () {
    return {
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  props: {
    size: {
      type: String
    },
    theme: {
      type: String
    },
    hoverText: {
      type: String
    },
    loading: {
      type: Boolean
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang='scss' src='./button.scss' scoped></style>
