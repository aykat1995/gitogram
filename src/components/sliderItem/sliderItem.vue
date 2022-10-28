<template>
  <div class="wrapp" :class="{active}">
    <div class="fixed-wrapper">
      <progressBar :active="active" @onFinish="$emit('onProgressFinish')"/>
      <div class="slider-avatar">
        <profileAvatar :avatarUrl="data.avatarURL" :nickname="data.nickname"/>
      </div>
    </div>
    <div class="slider-content">
      <div class="loader" v-if="loading">
        <spinnerComp />
      </div>
      <div v-else class="info">
        <div v-if="data.content?.length" class="content-text" v-html="data.content"></div>
        <placeHolder v-else :paragraphs="2"/>
      </div>
    </div>
    <div class="button-wrapp">
      <button-comp
        :theme="data.following.status ? 'theme_grey' : 'theme_green'"
        :loading='data.following.loading'
        @click="$emit(data.following.status ? 'onUnFollow' : 'onFollow', data.id)">
        {{data.following.status ? 'Unfollow' : 'follow'}}
      </button-comp>
    </div>
    <div v-if="active" class="arrow-wrapp">
      <button v-if="btnsShown.includes('prev')" @click="$emit('onPrevSlide')" class="arrow-button arrow-button-left">
        <div class="arrow left-arrow">
          <iconComp name="arrowIcon"/>
        </div>
      </button>
      <button v-if="btnsShown.includes('next')" @click="$emit('onNextSlide')" class="arrow-button arrow-button-right">
        <div class="arrow right-arrow">
          <iconComp name="arrowIcon"/>
        </div>
      </button>
    </div>
  </div>
</template>

<script>
import progressBar from '../progressBar/progressBar.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'
import buttonComp from '../button/buttonComp.vue'
import spinnerComp from '../spinner/spinnerComp.vue'
import placeHolder from '../placeholder/placeHolder.vue'
import { iconComp } from '../../icons'

export default {
  name: 'sliderItem',
  components: {
    profileAvatar,
    buttonComp,
    spinnerComp,
    iconComp,
    placeHolder,
    progressBar
  },
  data () {
    return {
      hoverText: 'Unfollow',
      size_s: 'size_s',
      size_m: 'size_m',
      theme_grey: 'theme_grey',
      theme_green: 'theme_green'
    }
  },
  emits: ['onFollow', 'onNextSlide', 'onPrevSlide', 'onProgressFinish'],
  props: {
    active: Boolean,
    loading: Boolean,
    status: Boolean,
    content: String,
    btnsShown: {
      type: Array,
      default: () => ['next', 'prev'],
      validator (value) {
        return value.every((item) => item === 'next' || item === 'prev')
      }
    },
    initialSlide: {
      type: Number
    },
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  actions: {

  }
  // computed: {
  //   buttonTheme () {
  //     return this.following.status === true ? 'theme_grey' : 'theme_green'
  //   }
  // }
}
</script>

<style lang="scss" src="./sliderItem.scss" scoped></style>
