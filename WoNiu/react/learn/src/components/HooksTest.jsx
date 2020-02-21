// Hook(钩子函数) 可以在不编写 class 的情况下使用state 内部的状态和React其它的特性

// 使用 state Hook
import React, { useState, useEffect } from 'react'

export default function HooksTest () {
  // useState(initalState), 接受一个初始状态，返回一个状态变量和它的更新函数，属性名可以自定义
  // 声明一个叫 "count" 的 state 变量
  const [count, setCount] = useState(0)

  // 可以做：数据获取， 设置订阅，以及手动更改React组件中的DOM ---- 副作用
  useEffect(() => {
    document.title = `您点击了${count}次`
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  )
}