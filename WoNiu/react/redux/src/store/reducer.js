import {CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM} from './actionTypes'

const defaultState = {
  inputValue: 'dhyuan',
  list: []
}

// state 指的是store里面上一次存储的数据
// action 是指用户传过来的数据
export default (state = defaultState, action) => {
  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState // reducer 有一个限制， 可以接受state， 但是绝对不能修改state
  }

  if (action.type === ADD_TODO_ITEM) {
    const newSate = JSON.parse(JSON.stringify(state))
    // console.log(newSate.inputValue)
    newSate.list.push(newSate.inputValue)
    newSate.inputValue = ''
    return newSate
  }

  if (action.type === DELETE_TODO_ITEM) {
    const newSate = JSON.parse(JSON.stringify(state))
    // console.log(newSate.inputValue)
    newSate.list.splice(action.index, 1)
    return newSate
  }

  console.log(state, action)
  return state
}