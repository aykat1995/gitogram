import * as api from '../../api/main.js'

export default {
  namespaced: true,
  state: {
      data: [],
      loading: false,
      error: '',
      content: []
  },
  getters: {
    getRepoById: (state) => (id) => {
    return state.data.find((item) => item.id === id)
    }
  },
  mutations: {
    setTrendingsData (state, payload) {
      state.data = payload
    },
    setTrendingsLoading (state, payload) {
      state.loading = payload
    },
    setTrendingsError (state, payload) {
      state.error = payload
    },
    setReadme (state, payload) {
      state.data = state.data.map(repo => {
        if (payload.id === repo.id) {
          repo.readme = payload.content
        }
        return repo
      })
    }
  },
  actions: {
    async fetchTrendings ({ commit }) {
      commit('setTrendingsLoading', true)
      try {
        const { data } = await api.trendings.getTrendings()
        commit('setTrendingsData', data.items)
      } catch (error) {
        console.log(error)
        commit('setTrendingsError', 'Не удалось получить пользователя')
        throw error
      } finally {
        commit('setTrendingsLoading', false)
      }
    },
    async fetchReadme ({ commit, getters }, { id, owner, repo }) {
      const currRepo = getters.getRepoById(id)
      if (currRepo.readme !== undefined) return
      try {
        const { data } = await api.readme.getReadme({ owner, repo })
        commit('setReadme', { id, content: data })
      } catch (error) {
        console.log(error)
        throw error
      }
    }
  }
}
