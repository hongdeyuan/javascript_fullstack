import React, { useState, useEffect } from 'react'

class  Mycount  extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }
  

  componentDidMount(){
    this.interval =  setInterval(() => {
      this.setState({
        count: this.state.count+1
      })
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval)
    }
  }

  render() {
    return (
      <div>
        { this.state.count }
      </div>
    );
  }
}

function MyCountFunc() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval =  setInterval(() => {
      setCount(c => c + 1)
    }, 1000);
    // 组件卸载时，return 才会执行
    return () => { clearInterval(interval) }
  }, [])// 仅在count更改时更新

  return <span>{count}</span>
}
export default MyCountFunc