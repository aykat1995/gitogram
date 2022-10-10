import repositoryInfo from './repositoryInfo.vue'

export default {
  title: 'repositoryInfo',
  components: {
    repositoryInfo
  }
}

export const DefaultView = () => ({
  components: { repositoryInfo },
  template: '<repositoryInfo :likesCount="4" :followers="7"/>'
})
