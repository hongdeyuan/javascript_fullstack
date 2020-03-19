import React, { Component } from 'react'
import {
  DetailWrapper,
  DetailHeader,
  DetailContent
} from './style'
import { connect } from 'react-redux'
import { actionCreators } from './store'
class Detail extends Component {


  componentDidMount(){
    this.props.getDetail()
  }

  render() {

    return (
      <DetailWrapper>
        <DetailHeader>{this.props.title}</DetailHeader>
        <DetailContent dangerouslySetInnerHTML={{ __html: this.props.content }}>
        </DetailContent>
      </DetailWrapper>
    );
  }
}


const mapState = (state) => ({
  title: state.detail.get('title'),
  content: state.detail.get('content')
})

const mapDispatch = (dispatch) => {
  return {
    getDetail() {
      const action = actionCreators.getDetail()
      action(dispatch)
    }
  } 
}
export default connect(mapState, mapDispatch)(Detail)