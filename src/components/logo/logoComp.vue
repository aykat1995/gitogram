<template>
  <span :class='["logo", {white: isWhite}]'>{{appName}} /</span>
</template>

<script>
  export default {
    data () {
      return {
        appName: 'Gitogram'
      }
    },
    props: {
      isWhite: Boolean
    }
}
</script>

<style lang="scss" src="./logoComp.scss" scoped></style>
