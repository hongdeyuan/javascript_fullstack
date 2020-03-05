import React from 'react'

class AddClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  render() {
    return (
      <div>
        <div>你点了{this.state.count}次</div>
      <button onClick={() => {
        let count = this.state.count + 1
        this.setState({
          count: count
        })
      }}>点击</button>
      </div>
    );
  }
  
}

export default AddClick