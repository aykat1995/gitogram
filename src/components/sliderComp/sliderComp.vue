<template>
  <div class="component-wrapper">
    <div class="container">
      <div class="header-wrapp">
        <div class="logo-wrapp">
          <logoComp isWhite />
        </div>
        <button class="icon">
          <div class="icon-wrapp">
            <iconComp name="crossIcon" />
          </div>
        </button>
      </div>
    <div class="slider-wrapp">
      <button class="arrow-button arrow-button-left">
        <div class="arrow left-arrow">
          <iconComp name="arrowIcon"/>
        </div>
      </button>
      <div class="slider-item">
        <sliderItem><p>Storybook helps you document components for reuse and automatically visually test your components to prevent bugs. Extend Storybook with an ecosystem of addons that help you do things like fine-tune responsive layouts or verify accessibility.
          Storybook integrates with most popular JavaScript UI frameworks and (experimentally) supports server-rendered component frameworks such as Ruby on Rails.

          Learning resources
          If you want to learn more about the component-driven approach that Storybook enables, this site is a good place to start.

          If you want a guided tutorial through building a simple application with Storybook in your framework and language, our tutorials have your back.

          Read on to learn Storybook basics and API!
          Storybook integrates with most popular JavaScript UI frameworks and (experimentally) supports server-rendered component frameworks such as Ruby on Rails.

          Learning resources
          If you want to learn more about the component-driven approach that Storybook enables, this site is a good place to start.

          If you want a guided tutorial through building a simple application with Storybook in your framework and language, our tutorials have your back.

          Read on to learn Storybook basics and API!</p></sliderItem>
      </div>
        <button class="arrow-button arrow-button-right">
          <div class="arrow right-arrow">
            <iconComp name="arrowIcon"/>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import sliderItem from '../sliderItem/sliderItem.vue'
import logoComp from '../logo/logoComp.vue'
import { iconComp } from '../../icons'

export default {
  components: {
    sliderItem,
    iconComp,
    logoComp
  }
}
</script>

<style lang="scss" scoped src="./sliderComp.scss"></style>
