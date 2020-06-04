import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    fund: 8000,
    loggedInUser: 'Rohit'
  },
  getters: {
    getFunds: state => {
      return state.fund;
    },
    getLoggedInUser: state => {
      return state.loggedInUser
    }
  },
  mutations: {
    updateFunds: (state, transactionAmount) => {
      state.fund += transactionAmount;
    },
    updateLoggedInuser: (state, user) => {
      state.loggedInUser = user
    }
  },
  actions: {
    updateFunds: (state, transactionAmount) => {
      state.commit('updateFunds', transactionAmount)
    },
    updateLoogedInUserAction: (state, user) => {
      state.commit('updateLoggedInuser', user)
    }
  }
})