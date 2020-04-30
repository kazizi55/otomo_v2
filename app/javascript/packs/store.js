import Vue from 'vue'
import Vuex from 'vuex'
import persistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: '',
    userData: ''
  },
  mutations: {
    fetchSignedIn(state) {
      state.signedIn = !!localStorage.signedIn
    }
  },
  actions: {
    doFetchSignedIn({ commit }) {
      commit('fetchSignedIn')
    }
  },
  plugins: [persistedState({ storage: window.sessionStorage, key: 'otomo' })]
})