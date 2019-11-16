import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1,
  str: 'dhyuan'
}

// mutations 的方法 与页面的方法是同步的，
const mutations = {
  add (state) {
    state.count++
  },
  add1 (state, n) {
    state.count += n
  },
  subtract (state){
    state.count--
  }
}

// 异步 ： 是某些方法 变成 异步的 -> 准确的来说是支持 异步
const actions = {
  addAction (context, n) {
    // context： 上下文
    context.commit('add1', n)
  },
  subtractAction ({commit}) {
    commit('subtract')
    // setTimeout(() =>{
    //   commit('subtract')
    // }, 3000)
  }
}

const getters = {
  getCount: (state) => {
    return state.count + 100
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})