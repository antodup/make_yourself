import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  ingredients: {
    pains: [{
      id: '1',
      type: 'pains',
      name: 'Pain Blanc',
      src: require('../assets/burger_creation/pains/pain_blanc.jpg'),
      fixed: false
    }, {
      id: '2',
      type: 'pains',
      name: 'Pain Complet',
      src: require('../assets/burger_creation/pains/pain_complet.jpg'),
      fixed: false
    }, {
      id: '3',
      type: 'pains',
      name: 'Pain Céréale',
      src: require('../assets/burger_creation/pains/pain_sans_gluten.png'),
      fixed: false
    }, {
      id: '4',
      type: 'pains',
      name: 'Pain Sans Gluten',
      src: require('../assets/burger_creation/pains/pain_cereale.jpg'),
      fixed: false
    }],
    condiments: [{
      id: '5',
      type: 'condiments',
      name: 'Bacon',
      src: require('../assets/burger_creation/condiements/bacon.jpg'),
      fixed: false
    }, {
      id: '6',
      type: 'condiments',
      name: 'Fromage',
      src: require('../assets/burger_creation/condiements/cheese.jpg'),
      fixed: false
    }, {
      id: '7',
      type: 'condiments',
      name: 'Salade',
      src: require('../assets/burger_creation/condiements/salade.jpg'),
      fixed: false
    }, {
      id: '8',
      type: 'condiments',
      name: 'Tomate',
      src: require('../assets/burger_creation/condiements/tomate.jpg'),
      fixed: false
    }],
    proteines: [{
      id: '9',
      type: 'proteines',
      name: 'Boeuf',
      src: require('../assets/burger_creation/proteines/boeuf.jpg'),
      fixed: false
    }, {
      id: '10',
      type: 'proteines',
      name: 'Cabillaud pané',
      src: require('../assets/burger_creation/proteines/poisson.jpg'),
      fixed: false
    }, {
      id: '11',
      type: 'proteines',
      name: 'Poulet Rotit',
      src: require('../assets/burger_creation/proteines/poulet.jpg'),
      fixed: false
    }, {
      id: '12',
      type: 'proteines',
      name: 'Steak de Soja',
      src: require('../assets/burger_creation/proteines/soja.jpg'),
      fixed: false
    }]
  },
  resultBurger: {
    resultPain: [],
    resultCondiment1: [],
    resultProteines: [],
    resultCondiment2: [],
    resultCondiment3: [],
    price : 9
  },
  panier:{
    burger: {},
    boissons: [],
    desserts: [],
    price : 0,
  },
  headerChange: 'normal',
  modifyBurger: 'no'
}

const mutations = {
  CHANGE_HEADER(state, payload) {
    state.headerChange = payload
  },
  ADD_BURGER (state, payload){
    state.resultBurger.resultPain = payload.resultPain
    state.resultBurger.resultCondiment1 = payload.resultCondiment1
    state.resultBurger.resultCondiment2 = payload.resultCondiment2
    state.resultBurger.resultCondiment3 = payload.resultCondiment3
    state.resultBurger.resultProteines = payload.resultProteines
    state.panier.burger = state.resultBurger
    state.panier.price = state.resultBurger.price
  },
  MODIFY_BURGER(state, payload) {
    state.modifyBurger = payload
  }
}

const actions = {
  changeHeader({commit}, payload) {
    commit('CHANGE_HEADER', payload)
  },
  addBurger ({commit}, payload) {
    commit('ADD_BURGER', payload)
  },
  modifyBurger({commit}, payload) {
    commit('MODIFY_BURGER', payload)
  }
}

const getters = {
  loadedHeader(state) {
    return state.headerChange
  },
  loadedBurger(state) {
    return state.resultBurger
  },
  loadedIngredient(state) {
    return state.ingredients
  },
  loadedModify(state) {
    return state.modifyBurger
  },
  loadedPanier(state){
    return state.panier
  }
}

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})
