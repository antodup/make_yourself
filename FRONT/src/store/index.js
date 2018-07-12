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
      id: '4',
      type: 'pains',
      src: require('../assets/burger_creation/pains/pain_cereale.jpg'),

      name: 'Pain Céréale',
      fixed: false
    }, {
      id: '3',
      type: 'pains',
      name: 'Pain Sans Gluten',
      src: require('../assets/burger_creation/pains/pain_sans_gluten.png'),
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
      name: 'Poulet Roti',
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
  boissons: [
    {
      id: '1',
      name: 'Evian',
      src: require('../assets/boisson/evian.png'),
      price: 2,
      fixed: false,
      type: 'boisson'
    },
    {
      id: '2',
      name: 'Badoit',
      src: require('../assets/boisson/badoit.png'),
      price: 2,
      fixed: false,
      type: 'boisson'
    },
    {
      id: '3',
      name: 'Ice Tea',
      src: require('../assets/boisson/canette-_ice_tea.png'),
      price: 2,
      fixed: false,
      type: 'boisson'
    },
    {
      id: '4',
      name: 'Seven Up',
      src: require('../assets/boisson/sevenUp.png'),
      price: 2,
      fixed: false,
      type: 'boisson'
    },
    {
      id: '5',
      name: 'Coca-cola',
      src: require('../assets/boisson/cocacola.png'),
      price: 2,
      fixed: false,
      type: 'boisson'
    },
  ],
  desserts: [
    {
      id: '1',
      name: 'Brownie',
      src: require('../assets/dessert/brownie.png'),
      price: 3,
      fixed: false,
      type: 'dessert'
    },
    {
      id: '2',
      name: 'Cookies',
      src: require('../assets/dessert/cookies.png'),
      price: 3,
      fixed: false,
      type: 'dessert'
    },
    {
      id: '3',
      name: 'Salade de Fruit',
      src: require('../assets/dessert/salade_fruit.png'),
      price: 3,
      fixed: false,
      type: 'dessert'
    },
  ],
  resultBurger: {
    resultPain: [],
    resultCondiment1: [],
    resultProteines: [],
    resultCondiment2: [],
    resultCondiment3: [],
    price: 9
  },
  panier: {
    burger: {},
    boissons: [],
    desserts: [],
    price: 0,
  },
  headerChange: 'normal',
  userSession : {},
  modifyBurger: 'no'
}

const mutations = {
  CHANGE_HEADER(state, payload) {
    state.headerChange = payload
  },
  ADD_BURGER(state, payload) {
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
  },
  ADD_PANIER(state, payload) {
    state.panier.price = payload.price
    if (payload.boissons || payload.desserts) {
      state.panier.boissons = payload.boissons
      state.panier.desserts = payload.desserts
    }
  },
  CLEAR_STATE(state, payload) {
    if (payload == 'clear') {
      //CLEAR PANIER
      state.panier.burger = {}
      state.panier.boissons = []
      state.panier.desserts = []
      state.price = 0

      //CLEAR RESULT
      state.resultBurger.resultPain = []
      state.resultBurger.resultCondiment1 = []
      state.resultBurger.resultCondiment2 = []
      state.resultBurger.resultCondiment3 = []
      state.resultBurger.resultProteines = []
      state.resultBurger.price = 9
    }
  },
  USER_SESSION(state, payload) {
    state.userSession.id = payload.id
    state.userSession.name = payload.name
  }
}

const actions = {
  changeHeader({commit}, payload) {
    commit('CHANGE_HEADER', payload)
  },
  addBurger({commit}, payload) {
    commit('ADD_BURGER', payload)
  },
  modifyBurger({commit}, payload) {
    commit('MODIFY_BURGER', payload)
  },
  addPanier({commit}, payload) {
    commit('ADD_PANIER', payload)
  },
  clearState({commit}, payload) {
    commit('CLEAR_STATE', payload)
  },
  userSession({commit}, payload) {
    commit('USER_SESSION', payload)
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
  loadedPanier(state) {
    return state.panier
  },
  loadedDesserts(state) {
    return state.desserts
  },
  loadedBoissons(state) {
    return state.boissons
  },
  loadedSession(state) {
    return state.userSession
  }
}

export const store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions,
})
