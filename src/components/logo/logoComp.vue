<template>
  <span class="logo" :class="{white: isWhite}">{{appName}} /</span>
</template>

<script>
  export default {
    data () {
      return {
        appName: 'Gitogram',
        isWhite: false
      }
    }
}
</script>

<style lang="scss" src="./logoComp.scss" scoped></style>
