// 副作用 --- hooks模式下(state) 发生变更的时候提供给我们的额外操作

// 1. react 首次渲染和之后的每一次渲染，都会调用副作用函数
// 2. useEffrct里面定义的函数时异步执行的，它不会组织浏览器更新视图
import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(`useEffect => 你点击了${count}`)
  })
  return (
    <div>
      <div>你点了{count}次</div>
      <button onClick={() => {
        setCount(count + 1)
      }}>点击</button>
    </div>
  )
}

export default Example