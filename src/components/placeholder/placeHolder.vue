<template>
  <div class="block"></div>
    <div class="paragraph">
      <div class="paragraph-item"></div>
      <div class="paragraph-item"></div>
      <div class="paragraph-item"></div>
    </div>
    <div class="paragraph">
      <div class="paragraph-item"></div>
      <div class="paragraph-item"></div>
      <div class="paragraph-item"></div>
    </div>
</template>

<script>
export default {
  name: 'placeHolder',
  props: {
    paragraphs: Number
  }
}
</script>

<style lang="scss" scoped>
.block {
  width: 100%;
  height: 136px;
  background-color: #DEDEDE;
  border-radius: 4px;
}
.paragraph {
  margin-top: 20px;
  margin-bottom: 14px;
  &-item {
    border-radius: 4px;
    background-color: #DEDEDE;
    height: 14px;
    width: 80%;
    margin-bottom: 5px;
    &:first-child {
      width: 60%;
    }
    &:last-child {
      width: 45%;
    }
  }
}
</style>
