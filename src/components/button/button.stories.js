import buttonComp from './buttonComp.vue'
import spinnerComp from '../spinner/spinnerComp.vue'

export default {
  title: 'button',
  components: { buttonComp },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    size: {
      options: ['size_s', 'size_m'],
      control: { type: 'select' }
    },
    theme: {
      options: ['theme_grey', 'theme_green'],
      control: { type: 'select' }
    }
  }
}

const template = (args) => ({
  components: { buttonComp },
  subcomponents: {
    spinnerComp
  },
  data () {
    return { args }
  },
  template: `
    <buttonComp v-bind="args">Following</buttonComp>
  `
})

export const Default = template.bind({})

Default.args = {
  hoverText: 'Unfollow',
  size: 'size_s',
  theme: 'theme_green'
}
