import logoComp from './logoComp.vue'
import './logoComp.scss'

export default {
  title: 'logo',
  components: {
    logoComp
  }
}

export const DefaultView = () => ({
  components: { logoComp },
  template: '<logoComp />'
})

DefaultView.story = {
  name: 'Лого по умолчанию'
}
