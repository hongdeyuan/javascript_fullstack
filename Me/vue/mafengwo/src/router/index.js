import Vue from 'vue'
import Router from 'vue-router'
import Lanuch from '@/components/lanuch'
import HelloWorld from '@/components/HelloWorld'
import Mine from '@/components/mine/Mine'
import Login from '@/components/login/Login'
import Register from '@/components/register/Register'
import Setting from '@/components/setting/Setting'
import Scan from '@/components/scan/Scan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lanuch',
      component: Lanuch
    },
    {
      path: '/home',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/setting',
      name: 'Setting',
      component: Setting
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan
    }
  ]
})
