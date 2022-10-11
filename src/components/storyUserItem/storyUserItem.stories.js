import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  components: {
    storyUserItem
  }
}

export const DefaultView = () => ({
  components: { storyUserItem },
  template: `
  <story-user-item :avatar="'https://png.pngtree.com/element_origin_min_pic/16/09/11/1157d4c8bbe76b3.jpg'" :username="'Test Testovich'">
  </story-user-item>
  `
})
