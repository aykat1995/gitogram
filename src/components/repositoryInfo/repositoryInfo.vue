<template>
  <div class="info-wrapp">
    <div class="info-item">
      <button class="info-button">
        <div class="info-button-wrapp">
          <div class="icon-wrapp">
            <iconComp class="icon" name="starIcon" />
          </div>
          <div class="span-wrapp">
            <span>Star</span>
          </div>
        </div>
      </button>
    </div>
    <div class="info-item">
      <span>{{followers}}</span>
    </div>
    <div class="info-item">
      <button class="info-button">
        <div class="info-button-wrapp">
          <div class="icon-wrapp">
            <iconComp class="icon" name="forkIcon" />
          </div>
          <div class="span-wrapp">
            <span>Fork</span>
          </div>
        </div>
      </button>
    </div>
    <div class="info-item">
      <span>{{likesCount}}</span>
    </div>
  </div>
</template>

<script>
import { iconComp } from '../../icons'

export default {
  name: 'repositoryInfo',
  props: ['likesCount', 'followers'],
  components: {
    iconComp
  }
}
</script>

<style lang="scss" src="./repositoryInfo.scss" scoped></style>
