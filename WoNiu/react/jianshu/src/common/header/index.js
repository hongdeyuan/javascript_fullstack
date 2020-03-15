import React from 'react'
//  react-transition-group 为react样式库
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

import { actionCreators } from './store'

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

// 无状态组件的性能比有状态组件高
const Header = (props) => {
  return (
    <HeaderWrapper>
      <Logo />
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
            in={props.focused}
            classNames="slide"
          >
            {/* slide-enter slide-enter-active slide-exit slide-exit-active */}
            <NavSearch
              onFocus={props.handleFocus}
              className={props.focused ? 'focused' : ''}
              onBlur={props.handleBlur}
            ></NavSearch>
          </CSSTransition>
          <span className={props.focused ? 'iconfont focused' : 'iconfont'}>&#xe617;</span>
        </SearchWrapper>
      </Nav>
      <Addition>
        <Button className="writting">
          <span className="iconfont">&#xe62e;</span>写文章
          </Button>
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}


const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused')
  }
}
// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      const action = actionCreators.searchFocus()
      dispatch(action)
    },
    handleBlur() {
      const action = actionCreators.searchBlur()
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)