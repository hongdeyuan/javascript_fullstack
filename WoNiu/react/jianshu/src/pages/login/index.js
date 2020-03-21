import React, { Component } from 'react'
import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginButton
} from './style'

import { Redirect } from 'react-router-dom'
import { actionCreators } from './store'
import { connect } from 'react-redux'
class Login extends Component {

  componentDidMount() {
  }

  render() {
    const { loginValue } = this.props
    console.log(loginValue)
    if (!loginValue) {
      return (
        <LoginWrapper>
          <LoginBox>
            <LoginInput placeholder="账号" ref={(input) => {this.account = input}} />
            <LoginInput placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
            <LoginButton onClick={() => this.props.login(this.account, this.password)}>登录</LoginButton>
          </LoginBox>
        </LoginWrapper>
      );
    } else {
      return <Redirect to="/" />
    }
    
  }
}

// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
  return {
    login (account, password) {
      const action =actionCreators.login(account.value, password.value)
      action(dispatch)
    }
  }
}

const mapState = (state) => ({
  loginValue: state.login.get('login')
})
export default connect(mapState, mapDispatchToProps)(Login)