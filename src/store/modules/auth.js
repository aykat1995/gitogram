import * as api from '../../api/main.js'

export default {
  namespaced: true,
  state: {},
  mutations: {
    getUser (state, user) {
      state.user = user
    }
  },
  actions: {
    getAuthCode () {
      api.auth.sendUserToAuthPage()
    },
    async authUserByCode (store, code) {
      const { data } = await api.auth.getAccessTokenByPersonalCode(code)
      return data.token
    },
    logout () {
      localStorage.removeItem('token')
      window.location.reload()
    }
  }
}
