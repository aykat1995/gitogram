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
          <li class="stories-item" v-for="(trending) in trendings" :key="trending.id">
            <story-user-item :avatar="trending.owner.avatar_url" :username="trending.owner.login" @onPress="$router.push({ name: 'stories', params: { initialSlide: trending.id}})">
            </story-user-item>
          </li>
        </ul>
      </template>
    </top-line>
  </div>
  <div class="repository-list">
    <div class="container">
      <div class="repository-list__container">
        <repositoryItem v-for="trending in this.trendings" :key="trending.id" :nickname="trending.owner.login">
          <div class="wrappper">
            <repositoryDescription :reponame="trending.name" :repodescription="trending.description" :likesCount="trending.stargazers_count" :followers="trending.forks" />
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
import { mapState, mapActions } from 'vuex'

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
      stories,
      items: [],
      storiesIsActive: false,
      currentId: 0
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data
    })
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    })
  },
  async created () {
    await this.fetchTrendings()
  }
}
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
