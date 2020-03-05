import React from 'react'

function HOC(WrappedComponent) {
  let inputElement = null
  
  function handleClick() {
    inputElement.focus()
  }

  return (props) => (
    <div>
      <WrappedComponent inputRef={(el) => {inputElement = el}} {...props}/>
      <input type="button" value="获取子组件的焦点" onClick={handleClick}/>
    </div>
  )
}

export default HOC