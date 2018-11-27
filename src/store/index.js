import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    allGoodsData: [],
    totalNum: 0,
    totalPrice: 0,
  },
  actions: {
    setGoodsData({commit}, allGoodsData) {
      commit('setGoodsData', allGoodsData)
    },
    add({commit}, value) {
      commit('incrementMut', value)
    },
    reduce({commit}, value) {
      commit('decreaseMut', value)
    }
  },
  mutations: {
    setGoodsData(state, allGoodsData) {
      state.allGoodsData = allGoodsData
    },
    incrementMut(state, value) {
      state.totalNum++
      state.totalPrice += value
    },
    decreaseMut(state, value) {
      state.totalNum--
      state.totalPrice -= value
    }
  },
  getters: {}
})

export default store
