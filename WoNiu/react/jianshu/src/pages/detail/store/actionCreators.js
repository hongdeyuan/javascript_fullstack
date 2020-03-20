import * as types from './actionTypes'
import axios from 'axios'
import { fromJS } from 'immutable'

const changeDetail = (title, content) => ({
  type: types.CHANGE_DETAIL,
  title,
  content
})

export const getDetail = (id) => {

  // 1.动态路由传参
  // 2. 编程式路由跳转 ，想vue的this.$route.push({path: 'detail', param= {id: id}})

  return (dispatch) => {
    axios.get('/api/detail.json?id=' + id).then((res) => {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.content))
    })
  }
}