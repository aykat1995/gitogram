import dataComp from './dataComp.vue'

export default {
  title: "Date",
  components: {
    dataComp
  }
}

export const DefaultView = () => ({
  components: {
    dataComp
  },
  template: `<dataComp />`
});