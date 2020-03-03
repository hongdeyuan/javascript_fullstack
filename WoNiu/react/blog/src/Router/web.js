import loadable from '../utils/loadable'

const List = loadable(() => import('../pages/web/list/list'))
const Archive = loadable(() => import('../pages/web/archive'))
const Star = loadable(() => import('../pages/web/star'))
const About = loadable(() => import('../pages/web/about'))

const webRoutes = [
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '首页',
    path: '/web/index',
    component: List
  },
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '归档',
    path: '/web/archive',
    component: Archive
  },
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '收藏',
    path: '/web/star',
    component: Star
  },
  {
    menu: true,
    icon: 'HomeOutlined',
    title: '关于',
    path: '/web/about',
    component: About
  }
]

export default webRoutes