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
class Counter extends React.Component {
  constructor (props) {
    super(props)
    // console.log(props)
    //初始化构造器，num为1
    this.state = {
      num: 1
    }

    this.handleClick = this.handleClick.bind(this)
  }
  // 生命周期方法，组件渲染完成
  componentDidMount() {
    console.log('componentDidMount函数触发')
  }
  // 生命周期方法，避免组件重复或者无意义的渲染
  shouldComponentUpdate(nextProps, nextState) {
  //  console.log(nextProps, nextState)
    if (nextState.num % 2) {
      return true// return true时，组件才会更新
    } 
    return false// 为false时， 组件不会更新
  }
  handleClick () {

    this.setState({
      num: this.state.num +1
    })
  }
  render () {
    return (
      <div>
        <p>{this.state.num}</p>
        <button onClick={this.handleClick}>click</button>
      </div>
    )
  }
}



ReactDOM.render(<Counter />, document.querySelector('#root'))