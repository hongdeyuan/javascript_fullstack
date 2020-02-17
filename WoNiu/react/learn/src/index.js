//入口文件
import React from 'react'
import ReactDOM from 'react-dom'
// import App from './App'

// class App extends React.Component {
//   render () {// jsx, props
//     return <div>
//       hello { this.props.name }, I am { 9 + 9 } year old
//     </div>
//   }
// }

// state 相当与vue 的data
// class Counter extends React.Component {
//   constructor (props) {
//     super(props)
//     // console.log(props)
//     //初始化构造器，num为1
//     this.state = {
//       num: 1
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }
//   // 生命周期方法，组件渲染完成
//   componentDidMount() {
//     console.log('componentDidMount函数触发')
//   }
//   // 生命周期方法，避免组件重复或者无意义的渲染
//   shouldComponentUpdate(nextProps, nextState) {
//   //  console.log(nextProps, nextState)
//     if (nextState.num % 2) {
//       return true// return true时，组件才会更新
//     } 
//     return false// 为false时， 组件不会更新
//   }
//   handleClick () {

//     this.setState({
//       num: this.state.num +1
//     })
//   }
//   render () {
//     return (
//       <div>
//         <p>{this.state.num}</p>
//         <button onClick={this.handleClick}>click</button>
//       </div>
//     )
//   }
// }

//表单
// class ToDoList extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       test: 'dhyuan',
//       todos: ['Learn React', 'Learn-Ant-design', 'Learn Koa']
//     }
//     this.handlechange = this.handlechange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }

//   handlechange(e){
//     console.log(e.target.value)
//     this.setState({
//       test: e.target.value
//     })
//   }
//   handleClick () {
//     if (this.state.test) {
//       console.log(this.state.test)
//       this.setState({
//         // 将text值追加到todos数组里面
//         todos: [...this.state.todos, this.state.test],
//         text: ''
//       })
//       console.log(this.state.todos)
//     }
//   }
//   render() {
//     return (
//     <div>{this.state.test}
//       <input type="text" value={this.state.test} onChange={this.handlechange} />
//       <button onClick={this.handleClick}>add</button>
//       <ul>
//         {this.state.todos.map((v, index) => {
//           return <li key={index}> {v}</li>
//         })}
//       </ul>
//     </div>
//     )
//   }
// }

// React 16 新增
// 1. render 函数支持返回数组和字符串
// 2. 异常处理，添加componentDidCarch钩子(函数) 获取组件错误

class React16 extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState({
      hasError: true
    })
  }
  render () {
    return (
    <div>
      <button onClick={this.handleClick}>抛出错误</button>
      <ClickWriteError />
    </div>
    )
  }
}

// 组件： 错误组件

class  ClickWriteError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
  }
  render() {
    return (
      <div>错误</div>
    )
  }
}


ReactDOM.render(<React16 />, document.querySelector('#root'))