import * as types from './types' // 取出types所有的抛出

const state = {
  showSidebar: false
}
const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  }
}
const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  }
}
const getters = {
  showSidebar: state => state.showSidebar
}

export default {
  state,
  getters,
  mutations,
  actions
}
