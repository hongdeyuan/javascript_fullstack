import React, { Component } from 'react';
import logo from './logo.svg'

//函数型组件传递props
function WelCome1(props) {
return <div>hello , {props.name}</div>
}

export default class App extends Component {
  constructor(props) {
    super(props)
    //初始状态
    this.state = {
      count: 0,
      date: new Date()
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      //更新状态
      this.setState({
        date: new Date(),
        count: this.state.count++
      })

      //注意： setState是 异步的
      this.setState((preState, prevProps) => ({
        count: preState.count + 1
      }), () => {
        // console.log(this.state.count)
      })
    }, 1000)
  }

  componentWillMount(){
    clearInterval(this.timer)
  }

  formatName(user){
    return user.firstName + ' ' + user.lastName
  }

  render() {
    const name = 'dhyuan'
    const jsx = <p>hello , teacher</p>
    return (
      <div>
        App组件
        <h1>{name}</h1>
        <h1>{this.state.count}</h1>
        <p>{this.formatName({firstName: 'tom', lastName: 'jerry'})}</p>
        <img src={logo} style={{width: '100px'}} className='img'/>
        {jsx}
        <WelCome1 name="tom"/>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    )
  }
}