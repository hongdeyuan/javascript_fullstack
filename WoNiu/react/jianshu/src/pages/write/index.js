import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
class Write extends Component {

  render() {
    const { loginState } = this.props
    if (loginState) {
      return (
        <div>
          write
        </div>
      );
    } else {
      return <Redirect to="/login" />
    }
    
  }
}

// store.dispatch => props

const mapState = (state) => ({
  loginState: state.login.get('login')
})
export default connect(mapState, null)(Write)