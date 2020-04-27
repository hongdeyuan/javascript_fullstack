// import React from 'react'
// React.createElement('span', {}, 'Index')

// Next.js集成了 React,所以不要导入 React
// import '../test/test.css' // 不能直接通过import导入css
// 需要使用@zeit/next-css 这个模块进行处理
// import { Button } from 'antd/lib/button'
// import { Button } from 'antd'// babel会自动干 antd/lib/button
// import Link from 'next/link'
import store from '../store/store'
import Router from 'next/router'

// 路由钩子
const events = [
  'routeChangeStart',
  'routeChangeComplete',
  'routeChangeError',
  'beforeHistoryChange',
  'hashChangeStart',
  'hashChangeComplete'
]

function makeEvent(type) {
  return (...args) => {
    console.log(type, ...args)
  }
}


events.forEach(event => {
  Router.events.on(event, makeEvent(event))
})

export default () => {

  return (
    <>
      <span>index</span>
    </>
  )
}
