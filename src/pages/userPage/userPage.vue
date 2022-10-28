<template>
  <top-line>
      <template #headline>
        <div class="headline">
          <router-link :to="{name: 'home'}">
            <logo-comp />
          </router-link>
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
  <div class="x-container container">
    <div class="wrapper">
      <div class="user">
        <div class="title">My profile</div>
<!--        <pre>{{user}}</pre>-->
        <aboutComp
          v-if="user.login"
          :userNickname="user.login"
          :username="user.name"
          :avatarUrl="user.avatar_url"
          :repos="user.public_repos"
          :following="followingQty"
          :size="avatar_l"
        />
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapState, mapGetters } from 'vuex'
import { topLine } from '../../components/topline'
import { logoComp } from '../../components/logo'
import { profileTools } from '../../components/profileTools'
import aboutComp from '../../components/about/about.vue'

import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'UserPage',
  components: {
    topLine,
    logoComp,
    profileTools,
    aboutComp
  },
  setup () {
    const { dispatch, state } = useStore()
    //
    dispatch('starred/fetchStarred')
    // user: (state) => state.user.data
    // //const user = computed(() => state.user.data)
    // followingQty: 'starred/getFollowingQty'
    // const getFollowingQty = computed(() => getters.starred.getFollowingQty)
    return {
      user: computed(() => state.user.data),
      // starred: computed(() => state.starred.data),
      // followingQty: computed(() => getters.starred.getFollowingQty)
      followingQty: computed(() => state.starred.data.length)
      // user,
      // getFollowingQty
    }
  },
  data () {
    return {
      items: [],
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      logo_white: 'logo_white',
      logo_black: 'logo_black'
    }
  }
  // computed: {
  //   ...mapState({
  //     user: (state) => state.user.data
  //   }),
  //   ...mapGetters({
  //     followingQty: 'starred/getFollowingQty'
  //   })
  // },
  // methods: {
  //   ...mapActions({
  //     fetchStarred: 'starred/fetchStarred'
  //   })
  // },
  // created () {
  //   this.fetchStarred()
  // }
}
</script>

<style src="./userPage.scss" scoped lang="scss"></style>
