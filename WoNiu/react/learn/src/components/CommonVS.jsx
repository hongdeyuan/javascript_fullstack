import React, { Component } from 'react'

export default class CommonJs extends Component {
  constructor(props){
    super(props)
    this.state = {
      comment: []
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        comment: [
          {
            body: 'react is very good', author: 'face book'
          },
          {
            body: 'vue is very good', author:'尤雨溪'
          }
        ]
      })
    }, 1000)
  }

  render() {
    return (
      <div>
        {this.state.comment.map((c, i) => (
          <Commont key={i} data={c}/>
        ))}
      </div>
    )
  }
}

// 展示组件
function Commont({data}) {
  return <div>
    <div>{data.body}-----{data.author}</div>
  </div>
}