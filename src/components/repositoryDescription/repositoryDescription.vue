<template>
  <h1 class="reponame">{{ reponame }}</h1>
  <p class="repodesc">{{ repodescription }}</p>
  <repositoryInfo :likesCount='likesCount' :followers='followers' />
</template>

<script>
import repositoryInfo from '../repositoryInfo/repositoryInfo.vue'
export default {
  name: 'repositoryDescription',
  props: ['reponame', 'repodescription', 'likesCount', 'followers'],
  components: {
    repositoryInfo
  }
}
</script>
<style lang='scss' src='./repositoryDescription.scss' scoped></style>
