// componentWillUnmount 组件卸载之前生命周期
// useEffect 实现了componentWillUnmount， 解绑副作用
// useEffect 第二个参数，是一个数组用来控制状态

import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect => 你点击了${count}`)
    return () => {
      console.log('-------------')
    }
  },[count])
  return (
    <div>
      <div>你点了{count}次</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>点击</button>

      <Router>
        <ul>
          <li>
            <Link to="/">首页</Link>
          </li>
          <li>
            <Link to="/list">列表</Link>
          </li>
        </ul>
        <Route path="/" exact component={Index}></Route>
        <Route path="/list" component={List}></Route>
      </Router>
    </div>
  )
}

function Index() {
  useEffect(() => {
    console.log('useEffect => 这里是Index页面')
    return () => {
      console.log('你离开了Index页面')
    }
  }, [])
return <h2>Effect学习</h2>
}
function List() {
  useEffect(() => {
    console.log('useEffect => 这里是List页面')
  })
  return <h2>List-Page</h2>
}

export default Example