import { createStore } from 'vuex'
import trendings from './modules/trendings.js'
import auth from './modules/auth.js'
import starred from './modules/starred.js'

export default createStore({
  modules: {
    trendings,
    auth,
    starred
  }
})
