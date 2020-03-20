import { fromJS } from 'immutable'
import { types } from './index'

const defaultState = fromJS({
  title: '',
  content: ''
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case types.CHANGE_DETAIL:
      // console.log(action)
      return state.merge({
        title: action.title,
        content: action.content
      });
    default:
      return state;
  }
}