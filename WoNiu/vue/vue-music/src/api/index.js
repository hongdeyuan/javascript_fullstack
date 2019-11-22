// 封装axios
import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()

// axios 配置
axios.defaults.timeout = 10000// 请求不能超时10S
axios.defaults.baseURL = 'http://localhost:3000'

// 判断返回状态, 响应拦截
axios.interceptors.response.use((res) => {
  // 请求不成功时
  if (res.data.code !== 200) {
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
  // 用户登录
  Login (params) {
    return fetchGet ('/login', params)
  },
  // banners
  BannerList () {
    return fetchGet ('/banner')
  },
  // 歌单
  DiscList (params) {
    return fetchGet ('/top/playList', params)
  },
  // 热搜
  HotSearchKey () {
    return fetchGet('/search/hot')
  },
  // 歌曲搜索
  MusicSearch (params) {
    return fetchGet('/search', params)
  }
}
