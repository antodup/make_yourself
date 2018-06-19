import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  burgerFinished: [{
    pain: 'Pain blanc',
    condiments1: 'Bacon',
    proteines: 'Boeuf',
    condiments2: 'Salade',
    condiments3: 'Cheese'
  }],
  headerChange: 'normal'
}

const mutations = {
  CHANGE_HEADER(state, payload) {
    state.headerChange = payload
  }
}

const actions = {
  changeHeader({commit}, payload) {
    payload = 'commander'
    commit('CHANGE_HEADER', payload)
  }
}

const getters = {
  loadedHeader(state) {
    return state.headerChange
  }
}

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})
