// useRef保存普通变量
import React, { useState, useEffect, useRef } from 'react'

// useRef 获取DOM元素


// inputEl是useRef的返回值，那么这个变量给谁当属性，就能表示该元素的DOM
function Example() {
  const inputEl = useRef(null)
  // inputEl.current: input}
 
  const onButtonClick = () => {
    console.log(inputEl)
    inputEl.current.value = "dhyuan"
  }

  const [text, setText] = useState('dhyuan')
  const textRef = useRef()

  useEffect(() => {
    textRef.current = text 
    console.log(textRef.current)
  })
  return (
    <div>
      <input ref={inputEl} type="text"/>
      <button onClick={onButtonClick}>在input上展示文字</button>
      <br/>
      <hr/>
      <input type="text" onChange={(e) => {setText(e.target.value)}} value={text}/>
    </div>
  )
}

export default Example