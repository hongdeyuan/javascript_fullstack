import React, { Component } from 'react'
import {
  WriterWrapper,
  WriterDownloadApp,
  WriterDownloadInfo,
  WriterAuthors,
  AuthorsTitle,
  AuthorsList,
  AuthorsItem,
  WriterDownloadTips
} from '../style'
import { types } from '../store'
import { connect } from 'react-redux'
class Writer extends Component {

  handleMouseQrCode = (e) => {
    const action = {
      type: types.CHANGE_HOME_QRCODE
    }
    this.props.changeHomeQrCode(action)
  }

  handleMouseOut = (e) => {
    const action = {
      type: types.CHANGE_HOME_QRCODE_NONE
    }
    this.props.changeHomeQrCodeNone(action)
  }

  render() {

    const { list, display } = this.props
    return (
      <WriterWrapper>
        <WriterDownloadApp onMouseEnter={this.handleMouseQrCode} onMouseLeave={this.handleMouseOut} >
          <img className="qrcode" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
            alt="" />
          <WriterDownloadInfo>
            <div className="title">
              下载简书手机App
              <span className="iconfont">&#xe630;</span>
            </div>
            <div className="description">
              随时随地发现和创作内容
            </div>
          </WriterDownloadInfo>
        </WriterDownloadApp>
        {/* 此处做二维码隐藏 */}
        <WriterDownloadTips display={display ? 'none' : 'block'}>
          <div className="arrow"></div>
          <h3 className="popover-title"></h3>
          <div className="popover-content">
            <img 
              src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"
              alt="Download index side qrcode" />
          </div>
        </WriterDownloadTips>
        <WriterAuthors>
          <AuthorsTitle>
            <span>推荐作者</span>
            <a className="page-change" target="">
              <span className="iconfont">&#xe704;</span>
              换一批
            </a>
          </AuthorsTitle>
          <AuthorsList>
            {
              list.map((item) => (
                <AuthorsItem key={item.get('id')}>
                  <a className="avatar" target="">
                    <img
                      src={item.get('avatar_source')}
                      alt="" />
                  </a>
                  <a className="follow" target="">
                    <span className="iconfont">&#xe602;</span>
                    关注
                  </a>
                  <a className="name" target="">{item.get('nickname')}</a>
                  <p>写了331.3k字·166k喜欢</p>
                </AuthorsItem>
              ))
            }
          </AuthorsList>
          <a
            href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users"
            className="find-more"
            target="_blank">
            查看全部
          </a>
        </WriterAuthors>
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.home.get('users'),
  display: state.home.get('display')
})

const mapDispatch = (dispatch) => ({
  changeHomeQrCode(action) {
    dispatch(action)
  },
  changeHomeQrCodeNone(action) {
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Writer)