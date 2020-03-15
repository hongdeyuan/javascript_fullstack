import * as types from './actionTypes'
import { fromJS } from 'immutable'
// fromJS 转换成 immutable对象
// immutable.js
// immutable对象 - 不可改变的对象
const defaultState = fromJS({
  focused: false
})

export default (state = defaultState, action) => {

  if (action.type === types.SEARCH_FOCUS) {
    // immutable 对象的set方法，会结合之前immutable对象的值和设置的值
    // 返回一个全新的对象
    // 这里如果不使用 immutable 必须用深拷贝
    return state.set('focused', true)
  }
  if (action.type === types.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  return state
}