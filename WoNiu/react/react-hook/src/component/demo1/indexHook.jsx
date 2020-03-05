import React, { useState } from 'react'

//useState 就是一个Hook

function Example() {
  const [ count, setCount ] = useState(0)

  return (
    <div>
      <div>你点了{count}次</div>
      <button onClick={() => {setCount(count + 1)}}>点击</button>
    </div>
  
  )
}

function Example2() {

  // react是如何找到 age的setAge呢？
  // react 必须按属性顺序来执行 
  // react 不能出现在if判断条件中，因为太必须有完全一样的渲染顺序

  const [ age, setAge] = useState(18)
  const [ sex, setSex] = useState('男')
  const [ work, setWork] = useState('前端工程师')

  return <div>
    <p>dhyuan 今年 ：{age} 岁 </p>
    <p>工作： {work}</p>
  </div>
}

export default Example2