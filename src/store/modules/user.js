import * as api from '../../api/main.js'

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_USER: (state, payload) => {
      state.data = payload
    }
  },
  getters: {
    hasUser (state) {
      return Boolean(Object.keys(state.data).length)
    }
  },
  actions: {
    async getUser ({ commit }) {
      try {
        const { data } = await api.user.getUserData()
        commit('SET_USER', data)
        console.log(data)
      } catch (e) {
        console.log(e)
        throw e
      }
    }
  }
}
