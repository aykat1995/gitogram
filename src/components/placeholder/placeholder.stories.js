import placeHolder from './placeHolder.vue'

export default {
  title: 'placeholder',
  components: {
    placeHolder
  }
}

export const DefaultView = () => ({
  components: { placeHolder },
  template: '<place-holder />'
})
