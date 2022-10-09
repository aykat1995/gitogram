import topLine from './topLine.vue'

export default {
  title: "topline",
  components: { topLine }
}

export const DefaultView = () => ({
  components: { topLine },
  template: `
  <topLine />
  `
})