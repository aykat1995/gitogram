<template>
  <div class="topline">
    <top-line>
      <template #headline>
        <div class="headline">
          <logo-comp />
          <profile-tools />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories-item" v-for="story in stories" :key="story.key">
            <story-user-item :avatar="story.avatar" :username="story.username" @onPress="handlePress(story.id)">
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="repository-list">
    <div class="container">
      <div class="repository-list__container">
        <repositoryItem v-for="n in 5" :key="n">
          <div class="wrappper">
            <repositoryDescription :reponame="'Vue.js'" :repodescription="'JavaScript framework for building interactive web applications'" :likesCount="4" :followers="7" />
          </div>
        </repositoryItem>
      </div>
    </div>
  </div>
</template>

<script>
import { topLine } from '../../components/topline'
import { logoComp } from '../../components/logo'
import { storyUserItem } from '../../components/storyUserItem'
import { profileTools } from '../../components/profileTools'
import repositoryItem from '@/components/repositoryItem/repositoryItem.vue'
import repositoryDescription from '@/components/repositoryDescription/repositoryDescription.vue'
import stories from './data.json'

export default {
  name: 'feedsPage',
  components: {
    topLine,
    logoComp,
    storyUserItem,
    profileTools,
    repositoryItem,
    repositoryDescription
},
  data () {
    return {
      stories
    }
  }
}
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
