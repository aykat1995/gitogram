import progressBar from './progressBar.vue'

export default {
  title: 'progressBar',
  components: { progressBar },
  argTypes: {
    onFinish: {
      action: 'onFinish',
      description: 'fires when progress reaches the end'
    }
  }
}

export const DefaultView = (args) => ({
  components: {
    progressBar
  },
  data () {
    return { args }
  },
  template: '<progressBar />'
})
