import sliderItem from './sliderItem.vue'
import progressBar from '../progressBar/progressBar.vue'
import profileAvatar from '../profileAvatar/profileAvatar.vue'
import spinnerComp from '../spinner/spinnerComp.vue'
import placeHolder from '../placeholder/placeholder.vue'
import buttonComp from '../button/button.vue'

export default {
  title: 'sliderItem',
  components: {
    sliderItem
  },
  subcomponents: {
    progressBar,
    profileAvatar,
    spinnerComp,
    placeHolder,
    buttonComp
  }
}

export const defaultView = () => ({
  components: {
    sliderItem,
    progressBar,
    profileAvatar,
    spinnerComp,
    placeHolder,
    buttonComp
  },
  template: `
    <sliderItem></sliderItem>
  `
})
