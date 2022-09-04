import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    overlay: null,
  },
  getters: {
  },
  mutations: {
    SET_DRAWER: (state, val) => state.drawer = val,
    SET_OVERLAY: (state, val) => state.overlay = val,
  },
  actions: {
  },
  modules: {
  }
})
