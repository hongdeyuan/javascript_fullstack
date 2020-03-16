import { combineReducers } from 'redux'// 用来合并每个页面的reducer
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReducer } from '../pages/home/store'

const reducer =  combineReducers ({
  header: headerReducer,
  home: homeReducer
})

export default reducer;