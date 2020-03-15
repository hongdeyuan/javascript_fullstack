import { combineReducers } from 'redux'// 用来合并每个页面的reducer
import { reducer as headerReducer } from '../common/header/store/index'

const reducer =  combineReducers ({
  header: headerReducer
})

export default reducer;