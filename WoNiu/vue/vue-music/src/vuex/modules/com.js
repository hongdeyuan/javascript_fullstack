import * as types from '../types' // 取出types所有的抛出

const state = {
  showSidebar: false,
  searchHistoey: ['许嵩', '胡歌']
}
const mutations = {
  [types.COM_SHOW_SIDE_BAR] (state, status) {
    state.showSidebar = status
  },
  [types.COM_SAVE_SEARCH_HISTORY] (state, status) {
    state.searchHistoey = status
  },
  [types.COM_DELETE_SEARCH_HISTORY] (state, index) {
    state.searchHistoey.splice(index, 1)
  },
  [types.COM_CLEAR_HISTORY_ALL] (state) {
    state.searchHistoey = []
  }
}
const actions = {
  setShowSidebar ({commit}, status) {
    commit(types.COM_SHOW_SIDE_BAR, status)
  },
  saveSearchHistory ({commit, state}, query) {
    let searchHistoey = [query, ...state.searchHistoey.slice()]
    searchHistoey = [...new Set(searchHistoey)]
    commit(types.COM_SAVE_SEARCH_HISTORY, searchHistoey)
  },
  deleteSearchHistory ({commit}, index) {
    commit(types.COM_DELETE_SEARCH_HISTORY, index)
  },
  clearSearchHistory ({commit}) {
    commit(types.COM_CLEAR_HISTORY_ALL)
  }
}
const getters = {
  showSidebar: state => state.showSidebar,
  searchHistoey: state => state.searchHistoey
}

export default {
  state,
  getters,
  mutations,
  actions
}
