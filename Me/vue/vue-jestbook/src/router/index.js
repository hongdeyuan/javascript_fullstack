import Vue from 'vue'
import Router from 'vue-router'
import Mine from '@/components/page/mine'
import FunnyPic from '@/components/page/funnyPic'
import Recommend from '@/components/page/recommend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/img',
      name: 'FunnyPic',
      component: FunnyPic
    },
    {
      path: '/recommend',
      name: 'Recommend',
      component: Recommend
    }
  ]
})
