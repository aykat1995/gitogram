import buttonComp from './buttonComp.vue'

export default {
  title: 'button',
  components: { buttonComp },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    }
  }
}

const template = (args) => ({
  components: { buttonComp },
  data () {
    return { args }
  },
  template: `
    <buttonComp v-bind="args">Following</buttonComp>
  `
});

export const Default = template.bind({})

Default.args = {
  text: "Unfollow"
}