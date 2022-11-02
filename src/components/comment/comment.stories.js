import commentComp from './commentComp.vue'

export default {
  title: 'comment',
  component: { commentComp },
  argTypes: {
    username: { type: 'text' },
    text: { type: 'text' }
  }
}

const template = (args) => ({
  components: {
    commentComp
  },
  data () {
    return {
      args
    }
  },
  template: `
    <commentComp :username="args.username" :text="args.text"></commentComp>
  `
})

export const Default = template.bind({})
Default.args = {
  username: 'Default Name',
  text: 'Default text'
}
