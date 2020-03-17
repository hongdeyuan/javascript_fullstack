import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from '../style'
// import axios from 'axios'
import { connect } from 'react-redux'
class Recommend extends Component {

  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => (
            <RecommendItem 
              imgUrl={item.get('imgUrl')} key={item.get('id')}>
            </RecommendItem>
          ))
        }
      </RecommendWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.home.get('recommendList')
})

export default connect(mapState, null)(Recommend)