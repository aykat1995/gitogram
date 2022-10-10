import profileTools from './profileTools.vue'

export default {
  title: 'profileTools',
  components: {
    profileTools
  }
}

export const DefaultView = () => ({
  components: { profileTools },
  template: '<profileTools />'
})
