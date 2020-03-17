import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
  box-sizing: border-box;
`
export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic{
    width:32px;
    height: 32px;
    display: block;
    float: left;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  overflow: hidden;
  .pic{
    width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title{
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    font-size: 13px;
    text-indent: 15px;
    line-height: 24px;
    color: #999;
  }
`
export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 280px;
  min-height: 50px;
  margin-bottom: 6px;
  border-radius: 4px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
`

export const WriterWrapper = styled.div`
  width: 280px;
  box-sizing: border-box;
  border-radius: 3px;
  position: relative;
  height: 100%;
  margin-bottom: 20px;
  padding-top: 0;
  font-size: 13px;
`

export const WriterDownloadApp = styled.a.attrs({
  href: 'https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'
})`
  padding: 10px 22px;
  width: 280px;
  height: 82x;
  box-sizing: border-box;
  display: block;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85;
    vertical-align: middle;
  }
`

export const WriterDownloadInfo = styled.div`
  display: inline-block;
  vertical-align: middle;
  margin-left: 7px;
  width: 142px;
  height: 44px;
  .title {
    width: 142px;
    height: 20px;
    font-size: 15px;
    color: #333;
    .iconfont{
      font-family: iconfont!important;
      font-size: inherit;
      font-style: normal;
      font-weight: 400!important;
      -webkit-font-smoothing: antialiased;
    }
  }
  .description{
    width: 142px;
    height: 20px;
    margin-top: 4px;
    font-size: 12px;
    color: #999;
  }
`

export const WriterDownloadTips = styled.div`
  display: ${(props) => props.display};
  width: 184px;
  height: 184px;
  position: absolute;
  border: 1px solid #999;
  top: -200px;
  border-radius: 5px;
  left: 48px;
  .arrow {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    border-width: 11px;
    left: 50%;
    top:  100%;
    margin-left: -11px;
    border-bottom-width: 0;
    border-top-color: #999;
    border-top-color: rgba(0,0,0,.25);
    bottom: -11px;
    &::after {
      position: absolute;
      display: block;
      width: 0;
      height: 0;
      border-color: transparent;
      border-style: solid;
      border-width: 10px;
      content: "";
      bottom: 1px;
      margin-left: -10px;
      border-bottom-width: 0;
      border-top-color: #fff;
    }
  }
  .over-title {
    margin: 0;
    padding: 8px 14px;
    font-size: 14px;
    background-color: #f7f7f7;
    border-bottom: 1px solid #ebebeb;
    border-radius: 5px 5px 0 0;
    display: none;
  }
  .popover-content {
    border-radius: 5px;
    background-color: #fff!important;
    padding: 10px;
    border: none;
    box-sizing: border-box;
    img {
      width: 160px;
      border-radius: 5px;
      height: 160px;
      vertical-align: middle;
    }
  }
`

export const WriterAuthors = styled.div`
  width: 280px;
  margin-top: 10px;
  box-sizing: border-box;
  text-align: center;
  .find-more{
    display: block;
    width: 280px;
    box-sizing: border-box;
    padding: 7px 7px 7px 7px;
    font-size: 13px;
    color: #787878;
    background-color: #f7f7f7;
    border-radius: 4px;
    text-decoration: none;
  }
`

export const AuthorsTitle = styled.div`
  text-align: left;
  span{
    font-size: 12px;
    color: #969696;
  }
  .page-change{
    display: inline-block;
    font-size: 12px;
    color: #969696;
    float: right;
    .iconfont{
      font-family: iconfont!important;
      font-size: inherit;
      font-style: normal;
      font-weight: 400!important;
      -webkit-font-smoothing: antialiased;
    }
  }
`

export const AuthorsList = styled.ul`
  margin: 0 0 20px;
  text-align: left;
  list-style: none;
`

export const AuthorsItem = styled.li`
  margin-top: 15px;
  line-height: 20px;
  .avatar {
    float: left;
    width: 48px;
    height: 48px;
    margin-right: 10px;
    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .follow{
    float: right;
    margin-top: 5px;
    padding: 0;
    font-size: 12px;
    color: #42c02e;
    .iconfont{
      font-family: iconfont!important;
      font-size: inherit;
      font-style: normal;
      font-size: 12px;
      font-weight: 400!important;
      -webkit-font-smoothing: antialiased;
    }
  }
  .name{
    padding-top: 5px;
    margin-right: 60px;
    font-size: 14px;
    display: block;
  }
  p {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: #a5a5a5;
  border-radius: 5px;
  color: #ffffff;
  margin: 30px 0;
  cursor: pointer;
`

export const BackTop = styled.div`
  position:fixed;
  right: 30px;
  bottom: 30px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 1px solid #cccccc;
`