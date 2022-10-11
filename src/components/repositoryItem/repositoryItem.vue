<template>
  <div class="repository-item">
    <div class="repository-avatar">
      <profileAvatar :avatarUrl="'https://w7.pngwing.com/pngs/244/76/png-transparent-avatar-male-man-person-profile-user-website-website-internet-icon.png'" :nickname="nickname" />
    </div>
    <div class="wrapper">
      <slot></slot>
    </div>
    <div class="toggler-wrapp"><togglerItem @onToggle="onTogglerClick" /></div>
    <messageList v-if="isShowMessage" />
    <dataComp />
  </div>
</template>

<script>
import togglerItem from '../togglerItem/togglerItem.vue'
import messageList from '../messageList/messageList.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'
import dataComp from '../dataComp/dataComp.vue'

export default {
  name: 'repositoryItem',
  props: {
    nickname: String
  },
  components: { togglerItem, messageList, profileAvatar, dataComp },
  data () {
    return {
      isShowMessage: false
    }
  },
  methods: {
    onTogglerClick (isShow) {
      this.isShowMessage = isShow
    }
  }
}
</script>

<style lang="scss" src="./repositoryItem.scss" scoped></style>
