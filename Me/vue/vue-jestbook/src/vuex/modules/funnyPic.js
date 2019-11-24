import * as types from '../types' // 取出types所有的抛出

const state = {
  funnyPic: []
}
const mutations = {
  [types.COM_SET_PICS] (state, status){
    state.funnyPic = status
  }
}
const actions = {
  setFunnyPic ({commit, state}, query) {
    let funnyPic = [query, ...state.funnyPic.slice()]
    funnyPic = [...new Set(funnyPic)]
    commit(types.COM_SET_PICS, funnyPic)
  }
}
const getters = {
}

export default {
  state,
  getters,
  mutations,
  actions
}
