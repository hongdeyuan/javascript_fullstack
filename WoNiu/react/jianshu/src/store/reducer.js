import { combineReducers } from 'redux'// 用来合并每个页面的reducer
import { reducer as headerReducer } from '../common/header/store/index'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as detailReducer } from '../pages/detail/store/index'

const reducer =  combineReducers ({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer
})

export default reducer;