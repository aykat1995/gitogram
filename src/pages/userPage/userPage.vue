<template>
  <top-line>
    <template #headline>
      <div class="headline">
        <router-link class="logo" :to="{name: 'home'}">
          <logo-comp />
        </router-link>
        <profile-tools />
      </div>
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

<!-- Using Composition API -->

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
    dispatch('starred/fetchStarred')
    return {
      user: computed(() => state.user.data),
      followingQty: computed(() => state.starred.data.length)
    }
  },
  data () {
    return {
      items: [],
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l'
    }
  }
}
</script>

<style src="./userPage.scss" scoped lang="scss"></style>
