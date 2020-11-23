import React from 'react'

// 定义一个纯函数 无状态的组件

function withMouse(Component) {
  return class extends React.Component {
    state = { x: 0, y: 0}
    
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     x: null,
    //     y: null
    //   }
    //   this.handleMouseMove = this.handleMouseMove.bind(this)
    // }
    

    handleMouseMove = (event) => {
      // console.log(event)
      this.setState({
        x: event.clientX,
        y: event.clientY
      })
    }
    render() {
      return (
        <div style={{height: '100vh'}} onMouseMove={this.handleMouseMove}>
          <Component {...this.props} mouse= {this.state}  handleMouseMove={handleMouseMove}/>
        </div>
      );
    }
    
  }
}

const App = (props) => {
  const { x, y } = props.mouse
  const { handleMouseMove } = props;
  handleMouseMove();
  return (
    <div style={{height: '100vh'}}>
      <h1>the mouse position is {x} - {y}  </h1>
    </div>
  );
}

const AppWithMouse = withMouse(App)// 高阶组件替组件干活

export default AppWithMouse