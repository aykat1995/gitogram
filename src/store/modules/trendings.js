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
      state.data = payload.map((item) => {
        item.following = {
          status: false,
          loading: false,
          error: ''
        }
        return item
      })
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
    },
    setFollowing (state, payload) {
      state.data = state.data.map((repo) => {
        if (payload.id === repo.id) {
          repo.following = {
            ...repo.following,
            ...payload.data
          }
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
    },
    async starRepo ({ commit, getters }, id) {
      const { name: repo, owner } = getters.getRepoById(id)
      commit('setFollowing', {
        id,
        data: {
          status: false,
          loading: true,
          error: ''
        }
      })

      try {
        await api.starred.starRepoApi({ owner: owner.login, repo })
        commit('setFollowing', {
          id,
          data: {
            status: true
          }
        })
        console.log('TRY')
      } catch (error) {
        console.log(error)
        commit('setFollowing', {
          id,
          data: {
            status: false,
            error: 'Error has happend'
          }
        })
      } finally {
        commit('setFollowing', {
          id,
          data: {
            status: false
          }
        })
      }
    }
  }
}
