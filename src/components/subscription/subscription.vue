<template>
  <div class="subscription">
    <div class="user">
      <profileAvatar
        :type="type"
        :nickname="username"
        :avatarUrl="avatarUrl"
        :size="avatar_m"
      >
      </profileAvatar>
    </div>
    <div class="button">
      <buttonComp
        :theme="following ? 'theme_green' : 'theme_grey'"
        :hoverText="following ? 'Unfollowed' : 'Following'"
        :size="size_s"
        @click="$emit(following ? 'onUnFollow' : 'onFollow', id)"
      >
        {{following ? "Following" : "Unfollowed"}}
      </buttonComp>
    </div>
  </div>
</template>

<script>
import buttonComp from '../button/buttonComp.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'

export default {
  name: 'subscriptionComp',
  components: {
    buttonComp,
    profileAvatar
},
  data () {
    return {
      avatar_s: 'avatar_s',
      avatar_m: 'avatar_m',
      avatar_l: 'avatar_l',
      hoverText: 'Unfollowed',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  emits: ['onFollow', 'onUnFollow'],
  props: {
    loading: {
      type: Boolean
    },
    id: {
      type: Number
    },
    type: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      required: true
    },
    avatarUrl: {
      type: String,
      required: true
    },
    following: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped src="./subscription.scss"></style>
