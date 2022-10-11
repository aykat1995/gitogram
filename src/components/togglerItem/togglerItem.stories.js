import togglerItem from './togglerItem.vue'

export default {
  title: 'togglerItem',
  components: { togglerItem }
}

export const defaultView = () => ({
  components: { togglerItem },
  template: `
    <togglerItem />
  `
})
