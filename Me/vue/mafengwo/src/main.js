// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import axios from 'axios'
import '../static/css/reset.styl'
import 'amfe-flexible'
import Vant from 'vant'
import store from './vuex/store'
import 'vant/lib/index.css'
import plus from 'vue-h5-plus'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.use(plus)
Vue.use(Vant)
Vue.use(VueAwesomeSwiper)
Vue.prototype.$http = axios
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
