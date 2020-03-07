// useContext 让父子组件传值变得更加简单

import React, { useState, createContext,useContext } from 'react'

const CountContext = createContext()


function Example() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>你点了{count}次</div>
      <button onClick={() => {setCount(count + 1)}}>点击</button>
      <CountContext.Provider value={count}>
        <Counter></Counter>
      </CountContext.Provider>
    </div>
  )
}

function Counter() {
  const count = useContext(CountContext)
  return (
    <h2>{count}</h2>
  )
}

export default Example