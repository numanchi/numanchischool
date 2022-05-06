import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
  },
  getters: {
  },
  mutations: {
    SET_DRAWER: (state, val) => state.drawer = val,
  },
  actions: {
  },
  modules: {
  }
})
