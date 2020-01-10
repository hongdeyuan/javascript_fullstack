import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
// react   js + template App.js
// .css 别的文件 .js + .css
function App() {
  const [todos, setTodos] = useState([
    {
      content: 'Pickup dry cleaning',
      isCompleted: true,
    },
    {
      content: 'Get haircut',
      isCompleted: false,
    },
    {
      content: 'Build a todo app in React',
      isCompleted: false,
    }
  ])
  return (
    <div className="app">
      {/* hello, react */}
      <div className="header">
        <img src={logo} className="logo" alt=""/>
      </div>
      <form className="todo-list">
        <ul>
          {
            // 相当于js的运行区域
            todos.map((todo,i) => (
              <li>{todo.content}</li>
            ))
          }
        </ul>
      </form>
    </div>
  )
}
export default App
