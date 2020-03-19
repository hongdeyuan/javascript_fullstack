import styled from 'styled-components'
import logoPic from '../../static/logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 4.17%;
  border-bottom: 1px solid #f0f0f0;
`

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  display:block;
  height: 56px;
  width: 100px;
  margin-left: 7%;
  top: 0;
  left: 0;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 800px;
  margin: 0 auto;
  height: 58px;
  background: #fff;
  padding-right: 68px;
  box-sizing: border-box;
`

export const NavItem = styled.div`
  line-height: 56px;
  padding: 0 15px;
  font-size: 16px;
  color: #333333;
  a {
    text-decoration: none;
    color: #ea6f5a;
    color: #333333;
    &.active {
      color: #ea6f5a;
    }
  }
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  .iconfont {
    font-size: 18px;
  }
`
export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 200px;
  height: 38px;
  border: none;
  border-radius: 19px;
  background: #eeeeee;
  margin-top: 9px;
  padding: 0 35px 0 20px;
  box-sizing: border-box;
  font-size: 14px;
  outline: none;
  &::placeholder{
    color: #999;
  }
  &.focused{
    width: 280px;
    /* animation: ; */
  }
`
export const Addition = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height:56px;
  margin-right: 10%;
`

export const Button = styled.div`
  float: right;
  line-height: 38px;
  padding: 0 20px;
  border-radius: 19px;
  margin-right: 20px;
  font-size: 14px;
  margin-top: 9px;
  border: 1px solid rgba(236,97,73,.7);
  &.reg{
    color: #ea6f5a;
    background-color: transparent;
  }
  &.writting{
    color: #fff;
    background-color: #ea6f5a;
  }
  .iconfont{
    font-size: 16px;
  }
`

export const SearchWrapper = styled.div`
  float: left;
  position: relative;
  .slide-enter{
    width: 200px;
    transition: all 0.2s ease-in
  }
  .slide-enter-active{
    width: 280px;
  }
  .slide-exit{
    width: 280px;
    transition: all 0.2s ease-out
  }
  .slide-exit-active{
    width: 200px;
  }
  .iconfont{
    position:absolute;
    right: 5px;
    bottom: 5px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    line-height: 30px;
    text-align: center;
    &.focused {
      background: #777;
      color: #fff;
    }
  }
`