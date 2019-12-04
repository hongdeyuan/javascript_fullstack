import Vue from 'vue'
import App from './index'
import '../../css/iconfont.css'
import '../../css/common.css'

// add this to handle exception
Vue.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err)
  }
}

const app = new Vue(App)
app.$mount()
