// 入口
import React from 'react'
import ReactDOM from 'react-dom'
import Lifecycle from './components/Lifecycle'
import CommentVs from './components/CommentVs'
import PureComponentTest from './components/PureComponentTest'
import ButtonTest from './components/ButtonTest'
import Hoc from './components/Hoc'
import KFormSample from './components/KFormSample'
import HooksTest from './components/HooksTest'
import ContextSample from './components/ContextSample'
// import App from './App'

// class App extends React.Component {
//   render () { 
//     // props
//     return <div>
//             hello {this.props.name}, I am {9 + 9} years old
//           </div>
//   }
// }


// state
// 生命周期
// class Counter extends React.Component {
//   constructor (props) {
//     super(props)
//     // 初始化构造器时设置内部状态 num值为1
//     this.state = {
//       num: 1
//     }
//     this.handleClick = this.handleClick.bind(this)
//   }
//   // 生命周期方法，组件渲染完成
//   componentDidMount() {
//     console.log('componentDidMount 函数触发')
//   }
//   // 生命周期方法, 避免组件重复或者无意义的渲染
//   shouldComponentUpdate(nextProps, nextState) {
//     // console.log(nextProps, nextState)
//     if (nextState.num%2) {
//       return true
//     }
//     return false
//   }
//   handleClick() {
//     console.log(123)
//     this.setState({
//       num: this.state.num + 1
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

// 表单
// 渲染列表
// class TodoList extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       text: '帅气的蜗牛',
//       todos: ['Learn React', 'Learn-Ant-design', 'Learn Koa']
//     }
//     this.handleChange = this.handleChange.bind(this)
//     this.handleClick = this.handleClick.bind(this)
//   }
//   handleChange (e) {
//     console.log(e.target.value)
//     this.setState({
//       text: e.target.value
//     })
//   }
//   handleClick () {
//     if (this.state.text) {
//       this.setState(state => ({
//         // 将text值追加到todos数组里面
//         todos: [...state.todos, state.text],
//         text: ''
//       }))
//     }
//   }
//   render () { //jsx
//     return (
//       <div>
//         {this.state.text}
//         <input type="text" value={this.state.text} onChange={this.handleChange}/>
//         <button onClick={this.handleClick}>add</button>
//         <ul>
//           {this.state.todos.map( v => {
//             return <li key={v}>{v}</li>
//           })}
//         </ul>
//       </div>
//     )
//   }
// }

// React 16 新增
// 1. render 函数支持返回数组和字符串
// 2. 异常处理， 添加componentDidCatch钩子（函数）获取组件错误

class React16 extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }
  render () {
    return (
      <div>
        {this.state.hasError ? <div>出错了</div> : null}
        <ClickWriteError/>
        <FeatureReturnFraments/>
      </div>
    )
  }
}

//ClickWriteError 是一个组件
class ClickWriteError extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      error: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({
      error: true
    })
  }
  render () {
    if (this.state.error) {
      throw new Error ('出错了！')
    }
    return <button onClick={this.handleClick}>抛出错误</button>
  }
}

// FeatureReturnFraments 是一个组件
class FeatureReturnFraments extends React.Component {
  render () {
    return [
      <p key="key1">React 很不错</p>,
      '文本1',
      <p key="key2">Antd也很赞</p>,
      '文本2'
    ]
  }
}

// ReactDOM.render(<PureComponentTest body='vue is very good' author='youyuxi'/>, document.querySelector('#root'))
// ReactDOM.render(<Hoc state="React"/>, document.getElementById('root'))
ReactDOM.render(<KFormSample/>, document.getElementById('root'))
