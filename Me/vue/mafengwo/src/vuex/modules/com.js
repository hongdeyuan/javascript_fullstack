import * as types from '../types' // 取出types所有的抛出

const state = {
  isLogin: false,
  userInfo: {}
}
const mutations = {
  [types.COM_SAVE_USER_INFO] (state, status) {
    state.userInfo = status
  },
  [types.COM_DELETE_USER_INFO] (state) {
    state.userInfo = {}
  }
}
const actions = {
  saveUserInfo ({commit}, userInfo) {
    commit(types.COM_SAVE_USER_INFO, userInfo)
  },
  deleteUserInfo ({commit}) {
    console.log('delete success')
    commit(types.COM_DELETE_USER_INFO)
  },
  setShowSidebar () {}
}
const getters = {
  currentUser: (state)=> {
    console.log(state.userInfo)
    return state.userInfo
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
