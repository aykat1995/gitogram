<template>
  <!-- <div class="avatar">
    <div class="avatar-img-wrapp">
      <img v-bind="attrs" :src='avatarUrl' alt="" class="avatar-img" />
    </div>
    <div class="avatar-text">
      <p>{{ nickname }}</p>
    </div>
  </div> -->
  <img class="avatar-img" v-bind="attrs" :src='avatarUrl' alt=""/>
  <p class="avatar-text">{{ nickname }}</p>
</template>

<script>
  export default {
  inheritAttrs: false,
  props: {
    avatarUrl: String,
    nickname: String
  }
}
</script>

<style lang="scss" src="./profileAvatar.scss" scoped></style>
