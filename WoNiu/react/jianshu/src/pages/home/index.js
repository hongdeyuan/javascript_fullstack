import React, { Component } from 'react'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
} from './style'

import Topic from './components/Topic'
import Writer from './components/Writer'
import List from './components/List'
import Recommend from './components/Recommend'
class Home extends Component {

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
        </HomeWrapper>
      </div>
    );
  }
}

export default Home