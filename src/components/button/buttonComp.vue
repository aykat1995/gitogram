<template>
  <button class="button">{{ text || "Follow" }}</button>
</template>

<script>
export default {
  name: 'buttonComp',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style lang='scss' src='./button.scss' scoped></style>
