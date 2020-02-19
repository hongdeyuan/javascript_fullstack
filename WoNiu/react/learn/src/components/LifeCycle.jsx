import React, { Component } from 'react'

class LifeCycle extends Component {

  constructor(props) {
    super(props)
    console.log('1. 构造函数')
    this.state = {
      msg : '来自属性传递' + props.name
    }
  }

  componentWillMount() {
    // 此时可以访问属性和状态，可以进行API调用， 但是没有办法做dom相关操作
    console.log('2. 组件将要挂载')
  }
  componentDidMount() {
    // 组件已经渲染完成，可以进行状态更新操作
    console.log('3. 组件已挂载')
  }

  componentWillReceiveProps() {
    // 父组件传递的属性有变换，做相应的操作之后才会执行
    console.log('4. 组件属性更新了')
  }

  shouldComponentUpdate(){
    //组件是否需要更新， 如果返回值 为 true则更新组件，如果返回false则不更新组件
    console.log('5. 组件判断是否需要更新')
    return true
  }

  componentWillUpdate() {
    //组件将要更新
    console.log('6. 组件将要更新')
  }

  componentDidUpdate () {
    //组件已经更新
    console.log('7. 组件已经更新')
  }

  // render 在  componentWillMount之后去执行，再去执行componentDidMount
  render() {
    console.log('组件渲染')
    return (
      <div>组件生命周期</div>
    )
  }
}

export default class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      someProp: 'dhyuan'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        someProp: 'ljc'
      })
    }, 1000);
  }

  render() {
    return (
      <LifeCycle name= {this.state.someProp}/>
    )
  }
};