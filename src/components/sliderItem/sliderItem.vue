<template>
  <div class="wrapp">
    <div class="fixed-wrapper">
      <progress-bar />
      <div class="slider-avatar">
        <profileAvatar :avatarUrl="'https://w7.pngwing.com/pngs/244/76/png-transparent-avatar-male-man-person-profile-user-website-website-internet-icon.png'" :nickname="'Nickname'"/>
      </div>
    </div>
    <div class="slider-content">
      <slot></slot>
    </div>
    <div class="button-wrapp">
      <button-comp/>
    </div>
  </div>
</template>

<script>
import progressBar from '../progressBar/progressBar.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'
import buttonComp from '../button/buttonComp.vue'

export default {
  name: 'sliderItem',
  components: {
    progressBar,
    profileAvatar,
    buttonComp
  }
}
</script>

<style lang="scss" src="./sliderItem.scss" scoped></style>
