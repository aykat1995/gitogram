<template>
  <div class="wrapp">
    <div class="fixed-wrapper">
      <progress-bar />
      <div class="slider-avatar">
        <profileAvatar :avatarUrl="'https://png.pngtree.com/element_origin_min_pic/16/09/11/1157d4c8bbe76b3.jpg'" :nickname="'Nickname'"/>
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
