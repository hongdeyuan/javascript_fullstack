// 封装axios
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 配置
axios.defaults.timeout = 10000// 请求不能超时10S
// axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json';

// 判断返回状态, 响应拦截
axios.interceptors.response.use((res) => {
  // 请求不成功时
  if (res.status !== 200) {
    alert('网络异常')
    // Promise 有两个参数 reject, resolve
    return Promise.reject(res)
  }
  return res
}, (error) => {
  alert('服务器开小差了')
  return Promise.reject(error)
})
// 请求拦截 - 暂时不写
// ...

export function fetchGet (url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: param
    })
    .then(response => {
      resolve(response.data)
    }, err => {
      reject(err)
    })
    .catch((error) => {
      reject(error)
    })
  })
}

export default {
  // 按更新时间查询笑话
  GetJokeByTime (params) {
    return fetchGet ('/api/Joke/QueryJokeByTime', params)
  },
  // 最新笑话
  NewJoke (params) {
    return fetchGet ('/api/Joke/NewstJoke', params)
  },
  // 按更新时间查询趣图
  GetImgByTime (params) {
    return fetchGet ('/api/Joke/QueryImgByTime', params)
  },
  // 最新趣图
  NewImg (params) {
    return fetchGet ('/api/Joke/NewstImg', params)
  },
  HeadLine (params) {
    return fetchGet ('/api//TouTiao/Query', params)
  },
}
