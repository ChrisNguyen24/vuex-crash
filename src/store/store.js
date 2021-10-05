import Vue from 'vue'
import Vuex from 'vuex'
import Value from './module/Value.js'

Vue.use(Vuex)

const storeData = {
  state: {
    todos :[
      { id:1, title: 'Viec 1', complete: false},
      { id:2, title: 'Viec 2', complete: false},
      { id:3, title: 'Viec 3', complete: false},
    ],
    auth: {
      isAuthenticated: "false",
    },
    result: 0,
  },
  getters :{
    tenResult : state => {
      return state.result+10;
    },
    getName : state => {
      return state.result + '_name result_' + state.result;
    },
    getValue: state => {
      return state.value;
    }
  },
  mutations :{
    increaseOpt(state, n) {
      state.result += n;
    },
    decrement(state) {
      state.result --;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  actions : {
    incement: ({commit},num) => {
      commit('increaseOpt',num);
    },
    decrementTimeout: ({commit}) =>{
      setTimeout(()=>{
        commit('decrement')
      },2000)
    },
    updateValue: ({commit},payload) => {
      commit('updateValue',payload);
    }
  },
  modules : {
    Value
  }
}

const store = new Vuex.Store(storeData)

export default store
