<template>
  <div class="profile-tools-wrap">
    <router-link :to="{name: 'home'}" class="icon">
      <div class="icon-wrap">
        <iconComp name="homeIcon" />
      </div>
    </router-link>
    <div class="avatar">
      <router-link :to="{name: 'repos'}" class="avatar-link">
        <profileAvatar :avatarUrl="user.avatar_url"/>
      </router-link>
    </div>
    <button class="icon">
      <iconComp @click="logout" name="exitIcon" />
    </button>
  </div>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex'
import { iconComp } from '../../icons'
import profileAvatar from '../profileAvatar/profileAvatar.vue'

export default {
  name: 'profileTools',
  components: {
    iconComp,
    profileAvatar
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
      getUser: 'user/getUser'
    })
    // logout () {
    //   console.log('logout')
    //   localStorage.removeItem('token')
    //   this.$router.replace({ name: 'auth' })
    //   window.location.reload()
    // }
  },
  computed: {
    ...mapState({
      user: state => state.user.data
    }),
    ...mapGetters({
      hasUser: 'user/hasUser'
    })
  },
  created () {
    this.getUser()
  }
}
</script>

<style lang="scss" src="./profileTools.scss" scoped></style>
