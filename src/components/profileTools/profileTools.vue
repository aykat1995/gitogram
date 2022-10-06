<template>
  <div class="profile-tools-wrap">
    <a href="#" class="icon">
      <div class="icon-wrap">
        <iconComp name="homeIcon" />
      </div>
    </a>
    <div class="avatar">
      <a href="#" class="avatar-link">
        <profileAvatar :avatarUrl="'https://w7.pngwing.com/pngs/244/76/png-transparent-avatar-male-man-person-profile-user-website-website-internet-icon.png'" :nickname="''"/>
      </a>
    </div>
    <a href="#" class="icon">
    <iconComp name="exitIcon" />
    </a>
  </div>
</template>

<script>
import { iconComp } from '../../icons'
import profileAvatar from '../profileAvatar/profileAvatar.vue'

export default {
  name: 'profileTools',
  components: {
    iconComp,
    profileAvatar
  }
}
</script>

<style lang="scss" src="./profileTools.scss" scoped></style>
