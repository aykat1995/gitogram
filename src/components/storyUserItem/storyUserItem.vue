<template>
  <button class="c-story-user-item" @click="$emit('onPress')">
    <div class="avatar">
      <img v-bind="attrs" class="avatar-img" :src="avatar" alt="user-avatar">
    </div>
    <div class="username">{{ username }}</div>
  </button>
</template>

<script>

export default {
  inheritAttrs: false,
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" src="./storyUserItem.scss" scoped></style>
