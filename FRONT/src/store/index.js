import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  resultBurger: {
    resultPain: [],
    resultCondiment1: [],
    resultProteines: [],
    resultCondiment2: [],
    resultCondiment3: [],
  },
  headerChange: 'normal'
}

const mutations = {
  CHANGE_HEADER(state, payload) {
    state.headerChange = payload
  },
  ADD_BURGER (state, payload){
    state.resultBurger = payload
  }
}

const actions = {
  changeHeader({commit}, payload) {
    commit('CHANGE_HEADER', payload)
  },
  addBurger ({commit}, payload) {
    console.log(payload)
    commit('ADD_BURGER', payload)
  }

}

const getters = {
  loadedHeader(state) {
    return state.headerChange
  },
  loadedBurger(state) {
    return state.result
  }
}

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})
