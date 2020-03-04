import React, { Component } from 'react'

// HOC 高阶组件
function HOC(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'dhyuan'
      }
    }

    onChange = (event) => {
      // this.setState在这里是异步的
      this.setState({
        name: event.target.value
      })
      console.log(this.state.name)
    }

    render() {
      const newProps = {
          name: {
            value: this.state.name,
            onChange: this.onChange
          }
      }
      return (
        <div>
          <WrappedComponent {...newProps} />
        </div>
      );
    }
    
  }
}

// 使用
@HOC
// HOC(Example)
class Example extends Component {
  render() {
    return (
      <div>
        <input {...this.props.name} type="text"/>
      </div>
    );
  }
}
// const Exampled = HOC(Example)
export default Example