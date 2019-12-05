<template>
  <div class="tab">
    <router-link to="/home" tag="div" class="tab-item">
      <div class="icon">&#xe636;</div>
      <div class="tab-link">首页</div>
    </router-link>
    <router-link to="/address" tag="div" class="tab-item">
      <div class="icon">&#xe62a;</div>
      <div class="tab-link">南昌</div>
    </router-link>
    <router-link to="/issue" tag="div" class="tab-item">
      <div class="issue">
        <img class="issue-img" src="../assets/imgs/issue-active.png" />
      </div>
      <div class="tab-link">发布</div>
    </router-link>
    <router-link to="/travel" tag="div" class="tab-item">
      <div class="icon">&#xe6d0;</div>
      <div class="tab-link">去旅行</div>
    </router-link>
    <router-link to="/mine" tag="div" class="tab-item">
      <div class="icon">&#xe64f;</div>
      <div class="tab-link">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  position absolute
  z-index 150
  bottom 0
  left 0
  width 100%
  background-color #fff
  border-1px(#fff)
  font-size 12px
  height px2rem(140px)
  &-item
    flex 1
    text-align center
    .icon
      margin-top px2rem(15px)
    .tab-link
      margin-top px2rem(15px)
      padding-bottom 5px
      color #bfbfbf
      font-family 'Microsoft YaHei','微软雅黑','MicrosoftJhengHei','华文细黑','STHeiti','MingLiu'
    &.router-link-active
      &::after
        content ''
        position absolute
        font-size px2rem(96px)
        margin-top px2rem(-96px)
        margin-left px2rem(-10px)
        background-color #f0fa66
        z-index -1
        box-shadow 0 0 10px #f0fa66
        width px2rem(30px)
        height px2rem(30px)
        border-radius 50%
      .tab-link
        color #1C1C1C
      .icon
        color #1C1C1C
  .issue
    font-size px2rem(96px)
    text-align center
    margin 0 auto
    display flex
    justify-content center
    align-items center
    margin-top px2rem(-50px)
    width px2rem(120px)
    height px2rem(120px)
    border-radius 50%
    background #fff
    border-1px(#fff)
    &::before
      content ''
      position absolute
      width px2rem(80px)
      height px2rem(80px)
      border-radius 100px 0
      border-left transparent
      border-bottom transparent
      transform translateX(px2rem(-48px))
      z-index -1
      background #fff
    &::after
      content ''
      position absolute
      width px2rem(80px)
      height px2rem(80px)
      border-radius 100px 0
      border-left transparent
      border-bottom transparent
      transform translateX(px2rem(48px)) rotate(90deg)
      z-index -1
      background #fff
    .issue-img
      width px2rem(84px)
      height px2rem(84px)
</style>
