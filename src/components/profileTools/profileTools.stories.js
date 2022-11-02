import profileTools from './profileTools.vue'
import { iconComp } from '../../icons'
import profileAvatar from '../profileAvatar/profileAvatar.vue'

export default {
  title: 'profileTools',
  components: {
    profileTools
  }
}

export const DefaultView = () => ({
  components: { profileTools },
  subcomponents: {
    iconComp,
    profileAvatar
  },
  template: '<profileTools/>'
})
