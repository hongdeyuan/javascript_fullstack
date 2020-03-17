import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

import { actionCreators } from './store'

import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'

import { connect } from 'react-redux'
class Home extends Component {

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvents()
  }

  handleScrollTop = () => {
    window.scrollTo(0, 0)
  }

  bindEvents = () =>{
    window.addEventListener('scroll', this.props.changeScrollTopShow())
  }

  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img
              className="banner-img"
              src="https://upload-images.jianshu.io/upload_images/11864358-622c38825ebb854e.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/500/format/webp"
              alt="banner"/>
            <Topic />
            <List />

          </HomeLeft>
          <HomeRight>
            <Recommend />
            <Writer />
          </HomeRight>
          {
            this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>回到顶部</BackTop> : null
          }
        </HomeWrapper>
      </div>
    );
  }
}

// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      const action = actionCreators.getHomeInfo()
      action(dispatch)
    },
    changeScrollTopShow(e) {
      // console.log(e)
    }
  }
}

const mapState = (state) => ({
  showScroll: state.home.get('showScroll')
})
export default connect(mapState, mapDispatchToProps)(Home)