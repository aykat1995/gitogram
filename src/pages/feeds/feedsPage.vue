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
        <ul class="repository__list">
          <li class="repository__item"
            v-for="{ id, owner, name, description, stargazers_count, forks_count, issues } in starred"
            :key="id">
            <repositoryItem
            :avatarUrl="owner.avatar_url"
            :nickname="owner.login"
            :issues="issues?.data"
            :loading="issues?.loading"
            @loadContent="loadIssues({ id, owner: owner.login, repo: name })">
              <div class="wrappper">
                <repositoryDescription :reponame="name" :repodescription="description" :likesCount="stargazers_count" :followers="forks_count" />
              </div>
            </repositoryItem>
          </li>
        </ul>
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
import { mapState, mapActions, mapGetters } from 'vuex'
import * as api from '../../api/main.js'

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
      trendings: state => state.trendings.data,
      starred: state => state.starred.data
    }),
    ...mapGetters(['getUstarredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchStarred: 'starred/fetchStarred',
      fetchIssuesForRepo: 'starred/fetchIssuesForRepo'
    }),
    loadIssues ({ id, owner, repo }) {
      this.fetchIssuesForRepo({ id, owner, repo })
    }
  },
  async created () {
    try {
      const { data } = await api.trendings.getTrendings()
      this.items = data.items
    } catch (error) {
      console.log(error)
    }
  },
  mounted () {
    this.fetchTrendings()
    this.fetchStarred({ limit: 10 })
    console.log('ISSUES: ' + JSON.stringify(this.starred.issues))
  }
}
</script>

<style lang="scss" src="./feedsPage.scss" scoped>
</style>
