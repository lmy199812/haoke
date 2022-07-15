import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken } from '@/utils'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: getToken() || {}
  },

  mutations: {
    setUser (state, payload) {
      state.user = payload
      // 本地存储
      setToken(payload)
    }
  }
})
