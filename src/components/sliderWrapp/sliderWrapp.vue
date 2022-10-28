<template>
  <div class="slider-wrapp">
    <ul class="slider" ref="slider">
      <li class="slider-item" ref="item"
      v-for="(trending, ndx) in trendings"
      :key="trending.id">
        <sliderItem
        :data="getStoryData(trending)"
        :loading="slideNdx === ndx && loading"
        :active="slideNdx === ndx"
        :btnsShown="activeBtns"
        @onNextSlide="handleSlide(ndx + 1)"
        @onPrevSlide="handleSlide(ndx - 1)"
        @onProgressFinish="handleSlide(ndx + 1)"
        @onFollow="starRepo(trending.id)"
        @onUnFollow="unStarRepo(trending.id)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import sliderItem from '../sliderItem/sliderItem.vue'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    sliderItem
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false
    }
  },
  props: {
    isActive: Boolean,
    currentId: Number,
    initialSlide: {
      type: Number
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.data,
      starred: (state) => state.starred.data
    }),
    activeBtns () {
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    getStoryData (obj) {
      return {
        id: obj.id,
        avatarURL: obj.owner?.avatar_url,
        nickname: obj.owner?.login,
        content: obj.readme,
        following: obj.following
      }
    },
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      console.log(id, owner.login, name)
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(getComputedStyle(item[slideNdx]).getPropertyValue('width'), 10)

      this.slideNdx = slideNdx
      this.sliderPosition = -((slideWidth + 60) * slideNdx)
      slider.style.transform = `translateX(${this.sliderPosition}px)`
    },
    async loadReadme () {
      this.loading = true
      try {
        await this.fetchReadmeForActiveSlide()
      } catch (error) {
        console.log(error)
        throw error
      } finally {
        this.loading = false
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      // console.log('trendings: ' + JSON.stringify(this.trendings))
      console.log('INITIAL_SLIDE: ' + this.initialSlide)
      const ndx = this.trendings.findIndex(item => item.id === this.initialSlide)
      console.log('NDX IS: ' + ndx)
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }

}
</script>

<style lang="scss" scoped src="./sliderWrapp.scss"></style>
