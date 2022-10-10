import messageItem from './messageItem.vue'

export default {
  title: 'messageItem',
  components: {
    messageItem
  }
}

export const DefaultView = () => ({
  components: { messageItem },
  template: '<messageItem name="Camille" message="Text text text"/>'
})
