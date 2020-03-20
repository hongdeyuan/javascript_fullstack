import React, { Component } from 'react'
import {
  LoginWrapper,
  LoginBox,
  LoginInput,
  LoginButton
} from './style'



import { connect } from 'react-redux'
class Login extends Component {

  componentDidMount() {
  }

  render() {
    return (
      <LoginWrapper>
        <LoginBox>
          <LoginInput placeholder="账号" />
          <LoginInput placeholder="密码" />
          <LoginButton>login</LoginButton>
        </LoginBox>
      </LoginWrapper>
    );
  }
}

// store.dispatch => props
const mapDispatchToProps = (dispatch) => {
  return {
  }
}

const mapState = (state) => ({
})
export default connect(mapState, mapDispatchToProps)(Login)