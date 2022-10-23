<template>
  <div class="component-wrapper">
    <div class="container">
      <div class="header-wrapp">
        <router-link :to="{name: 'home'}">
          <div class="logo-wrapp">
            <logoComp isWhite />
          </div>
        </router-link>
        <router-link :to="{name: 'home'}">
          <button class="icon">
            <div class="icon-wrapp">
              <iconComp name="crossIcon" />
            </div>
          </button>
        </router-link>
      </div>
      <div class="slider-wrapp">
        <sliderWrapp :initialSlide="+($route.params.initialSlide)"/>
      </div>
    </div>
  </div>
</template>

<script>
import logoComp from '../logo/logoComp.vue'
import { iconComp } from '../../icons'
import sliderWrapp from '../sliderWrapp/sliderWrapp.vue'

export default {
  components: {
    logoComp,
    iconComp,
    sliderWrapp
  }
}
</script>

<style lang="scss" scoped src="./sliderComp.scss"></style>
