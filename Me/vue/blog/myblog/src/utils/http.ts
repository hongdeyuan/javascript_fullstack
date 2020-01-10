import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { Message } from 'element-ui'

export interface ResponseData {
  code: number;
  data?: any;
  message: string
}

// 创建axios的实例
let service: AxiosInstance | any

if (process.env.NODE_ENV === 'development') {
  service = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
} else {
  service = axios.create({
    baseURL: '/api',
    timeout: 10000
  })
}

// request 拦截
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    console.log('error', error)
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.status === 200) {
      const data: ResponseData = res.data
      if (data.code === 0) {
        return data.data
      } else {
        Message({
          message: data.message,
          type: 'error'
        })
      }
    } else {
      Message({
        message: '网络错误',
        type: 'error'
      })
      return Promise.reject(new Error(res.data.message || 'Error'))
    }
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default service