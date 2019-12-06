import Vue from 'vue'
import Router from 'vue-router'
import StarNotes from '@/components/StarNotes'
import StarBanner from '@/components/starBanner/StarBanner'
import StarLogin from '@/components/login/StarLogin'
import StarRegister from '@/components/register/StarRegister'
import NoteClass from '@/components/noteClass/NoteClass'
import NoteList from '@/components/noteList/NoteList'
import NoteDetail from '@/components/noteDetail/NoteDetail'
import PublishNote from '@/components/publishNote/PublishNote'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'StarNotes',
      component: StarNotes,
      meta: {
        title: '星辰笔记'
      }
    },
    {
      path: '/StarBanner',
      name: 'StarBanner',
      component: StarBanner,
      meta: {
        title: '欢迎'
      }
    },
    {
      path: '/StarLogin',
      name: 'StarLogin',
      component: StarLogin,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/StarRegister',
      name: 'StarRegister',
      component: StarRegister,
      meta: {
        title: '注册'
      }
    },
    {
      path: '/noteClass',
      name: 'NoteClass',
      component: NoteClass,
      meta: {
        title: '笔记'
      }
    },
    {
      path: '/noteList',
      name: 'NoteList',
      component: NoteList,
      meta: {
        title: '笔记详情'
      }
    },
    {
      path: '/noteDetail',
      name: 'NoteDetail',
      component: NoteDetail,
      meta: {
        title: '内容详情'
      }
    },
    {
      path: '/publishNote',
      name: 'PublishNote',
      component: PublishNote,
      meta: {
        title: '编辑'
      }
    }
  ]
})
