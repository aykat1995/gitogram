import { createStore } from 'vuex'
import trendings from './modules/trendings.js'
import auth from './modules/auth.js'
import starred from './modules/starred.js'
import user from './modules/user.js'
import repos from './modules/repos.js'

export default createStore({
  getters: {
    getUnstarredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => !state.starred.data.some((starredRepo) => trendingsRepo.id === starredRepo.id))
    }
  },
  modules: {
    trendings,
    auth,
    starred,
    user,
    repos
  }
})
