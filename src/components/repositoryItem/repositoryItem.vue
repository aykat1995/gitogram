<template>
  <div class="repository-item">
    <div class="repository-avatar">
      <profileAvatar :avatarUrl="avatarUrl" :nickname="nickname" />
    </div>
    <div class="wrapper">
      <slot></slot>
    </div>
    <div class="toggler-wrapp"><togglerItem @onToggle="onTogglerClick" /></div>
    <div class="content-loader" v-if="loading">
      <preloaderComp></preloaderComp>
    </div>
    <div class="comments" v-if="isShowMessage">
      <ul v-if="issues.length" class="comments__list">
        <li class="comments__item" v-for="issue in issues" :key="issue.id">
          <commentComp :text="issue.title" :username="issue.user.login"/>
        </li>
      </ul>
      <div v-else class="no-comments">No comments</div>
    </div>
    <dataComp />
  </div>
</template>

<script>
import togglerItem from '../togglerItem/togglerItem.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'
import dataComp from '../dataComp/dataComp.vue'
import commentComp from '../comment/commentComp.vue'
import preloaderComp from '../preloader/preloaderComp.vue'

export default {
  name: 'repositoryItem',
  props: {
    nickname: String,
    avatarUrl: String,
    loading: Boolean,
    issues: {
      type: Array,
      default: () => []
    }
  },
  components: { togglerItem, profileAvatar, dataComp, commentComp, preloaderComp },
  data () {
    return {
      isShowMessage: false
    }
  },
  methods: {
    onTogglerClick (isShow) {
      this.isShowMessage = isShow
      if (isShow && this.issues.length === 0) {
        this.$emit('loadContent')
        console.log('Emit is happend')
      }
    }
  }
}
</script>

<style lang="scss" src="./repositoryItem.scss" scoped></style>
