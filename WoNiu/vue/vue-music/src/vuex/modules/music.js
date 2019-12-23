import * as types from '../types' // 取出types所有的抛出
import { findIndex } from '@/common/utils'

const state = {
  playing: false,
  fullScreen: false,
  playList: [],
  currentIndex: -1,
  favoriteList: [],
  playHistory: []
}
const mutations = {
  [types.SET_PLAYLIST] (state, playlist) {
    state.playList = playlist
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}
const actions = {
  // 选择音乐 播放
  selectPlaySong ({commit, state}, song) {
    let playlist = state.playList.slice()
    let currentIndex = state.currentIndex
    // 查找当前列表中是否有待插入的歌曲，并返回其索引
    let fpIndex = findIndex(playlist, song)
    // 如果 已经包含 这首歌
    if (fpIndex > -1) {
      currentIndex = fpIndex
    } else {
      playlist = [song, ...playlist]
      currentIndex = 0
    }
    commit(types.SET_PLAYLIST, playlist)
    commit(types.SET_CURRENT_INDEX, currentIndex)
  },
  addPlayList ({commit, state}, song) {
    let playlist = [...state.playList.slice(), song]
    if (playlist.length === 1) {
      let currentIndex = state.currentIndex
      currentIndex++
      commit(types.SET_CURRENT_INDEX, currentIndex)
    }
    commit(types.SET_PLAYLIST, playlist)
  }
}
const getters = {
  currentSong: state => {
    return state.playList[state.currentIndex] || {}
  },
  playList: state => state.playList
}

export default {
  state,
  getters,
  mutations,
  actions
}
