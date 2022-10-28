<template>
  <router-link class="logo-link" :to="{name: 'home'}">
    <span :class='["logo", {white: isWhite}]'>{{appName}} /</span>
  </router-link>
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
