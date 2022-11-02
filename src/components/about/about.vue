<template>
  <div class="c-user">
    <div class="avatar">
      <profileAvatar
        :avatarUrl="avatarUrl"
        :username="userNickname"
      />
    </div>
    <div class="info">
      <div class="header">
        <div class="username">{{userNickname}}</div>
        <ul class="stats">
          <li class="stats-item">
            <router-link :to="{name: 'repos'}" class="reposts">
              <span class="stats-int">{{repos}}</span>
              <span class="stats-title">reposts</span>
            </router-link>
          </li>
          <li class="stats-item">
            <router-link :to="{name: 'following'}" class="watchers">
              <span class="stats-int">{{following}}</span>
              <span class="stats-title">watchers</span>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="data">
        <p>
          {{username}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import profileAvatar from '../profileAvatar/profileAvatar.vue'

export default {
  name: 'aboutComp',
  components: {
    profileAvatar
  },
  props: {
    userNickname: {
      type: String,
      required: true
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
      type: Number,
      required: true
    },
    repos: {
      type: Number,
      required: true
    },
    size: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src="./about.scss"></style>
