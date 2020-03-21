import React from 'react'
//  react-transition-group 为react样式库
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from './store'
import { actionCreators as LoginActionCreators } from '../../pages/login/store'

import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper } from './style'

// 无状态组件的性能比有状态组件高
const Header = (props) => {
  const { login, logout } = props
  return (
    <HeaderWrapper>
      <Logo />
      <Nav>
        <NavItem className="left active">
          <span className="iconfont">&#xe600;</span>
          <a href="/" className="active">首页</a>
        </NavItem>
        <NavItem className="left">
          <span className="iconfont">&#xe611;</span>下载App
        </NavItem>
        {
          login ? <NavItem onClick={logout} className="right">退出</NavItem> :
            <Link to="/login"><NavItem className="right">登录</NavItem></Link>
        }

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
        <Link to="/write">
          <Button className="writting">
            <span className="iconfont">&#xe62e;</span>写文章
          </Button>
        </Link>
        
        <Button className="reg">注册</Button>
      </Addition>
    </HeaderWrapper>
  )
}


const mapStateToProps = (state) => {
  return {
    focused: state.header.get('focused'),
    login: state.login.get('login')
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
    },
    logout() {
      const action = LoginActionCreators.logout()
      action(dispatch)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)