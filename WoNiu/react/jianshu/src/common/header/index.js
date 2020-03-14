import React, { Component } from 'react'
//  react-transition-group 为react样式库
import { CSSTransition } from 'react-transition-group'

import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper} from './style'
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    }
  }

  handleFocus = () => {
    this.setState({
      focused: true
    })
  }

  handleBlur = () => {
    this.setState({
      focused: false
    })
  }
  
  render() {
    return (
      <HeaderWrapper>
        <Logo/>
        <Nav>
          <NavItem className="left active">
            <span className="iconfont">&#xe600;</span>首页
          </NavItem>
          <NavItem className="left">
            <span className="iconfont">&#xe611;</span>下载App
          </NavItem>
          <NavItem className="right">登录</NavItem>
          <NavItem className="right">
            <span className="iconfont">&#xe636;</span>
          </NavItem>
          <SearchWrapper>
            <CSSTransition 
              timeout={200} 
              in={this.state.focused}
              classNames="slide"
              >
                {/* slide-enter slide-enter-active slide-exit slide-exit-active */}
              <NavSearch 
                onFocus={this.handleFocus}
                className={this.state.focused ? 'focused' : ''}
                onBlur={this.handleBlur}
                ></NavSearch>
              </CSSTransition>
            <span className={this.state.focused ? 'iconfont focused' : 'iconfont'}>&#xe617;</span>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <span className="iconfont">&#xe62e;</span>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }
}

export default Header