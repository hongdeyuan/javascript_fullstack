// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import '../src/api/index'
import store from './vuex/store'
import '../static/css/reset.styl'
import axios from 'axios'
import fastclick from 'fastclick'

// Vue.prototype.$http = axios
// 去除 300ms的处理时间
fastclick.attach(document.body)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

