import * as types from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeHomeData = (result) => (
  {
    type: types.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    users: result.users
  }
)

const addHomeList = (result, nextPage) => ({
  type: types.ADD_HOME_ARTICLE_LIST,
  list: fromJS(result),
  nextPage 
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
        const result = res.data.data
        const action = changeHomeData(result)
        dispatch(action)
      })
  }
}


export const getMoreList = (page) => {
  return (dispatch) => {

    axios.get('/api/homeList.json?page=' + page).then((res) => {
      const result = res.data.data
      const action = addHomeList(result, page + 1)
      dispatch(action)
    })
    
  }
}