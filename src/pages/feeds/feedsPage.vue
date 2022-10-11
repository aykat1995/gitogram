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
        <repositoryItem v-for="item in items" :key="item.id" :nickname="item.owner.login">
          <div class="wrappper">
            <repositoryDescription :reponame="item.name" :repodescription="item.description" :likesCount="item.stargazers_count" :followers="item.forks" />
          </div>
        </repositoryItem>
      </div>
    </div>
  </div>
  <div class="slider-wrapper">
    <sliderComp />
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
import sliderComp from '../../components/sliderComp/sliderComp.vue'
import * as api from '../../api/main.js'

export default {
  name: 'feedsPage',
  components: {
    topLine,
    logoComp,
    storyUserItem,
    profileTools,
    repositoryItem,
    repositoryDescription,
    sliderComp
},
  data () {
    return {
      stories,
      items: []
    }
  },
  methods: {},
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
    console.log(error)
    }
  }
}
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
