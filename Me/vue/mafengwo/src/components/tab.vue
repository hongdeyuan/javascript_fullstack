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
.tab
  display flex
  // position absolute
  position fixed
  z-index 150
  bottom 0
  left 0
  width 100%
  background-color #fff
  border-top 1px solid #fff
  font-size 0.37rem
  height 1.87rem
  &-item
    flex 1
    text-align center
    .icon
      font-size 0.667rem
      margin-top 0.213rem
    .tab-link
      margin-top 0.213rem
      padding-bottom 0.133rem
      color #bfbfbf
      font-family 'Microsoft YaHei','微软雅黑','MicrosoftJhengHei','华文细黑','STHeiti','MingLiu'
    &.router-link-active
      &::after
        content ''
        position absolute
        font-size 1.28rem
        margin-top -1.28rem
        margin-left -0.133rem
        background-color #f0fa66
        z-index -1
        box-shadow 0 0 0.267rem #f0fa66
        width 0.4rem
        height 0.4rem
        border-radius 50%
      .tab-link
        color #1C1C1C
      .icon
        color #1C1C1C
  .issue
    font-size 1.28rem
    text-align center
    margin 0 auto
    display flex
    justify-content center
    align-items center
    margin-top -0.667rem
    width 1.6rem
    height 1.6rem
    border-radius 50%
    background #fff
    border-top 1px solid #fff
    &::before
      content ''
      position absolute
      width 1.067rem
      height 1.067rem
      border-radius 2.667rem 0
      border-left transparent
      border-bottom transparent
      transform translateX(-0.64rem)
      z-index -1
      background #fff
    &::after
      content ''
      position absolute
      width 1.067rem
      height 1.067rem
      border-radius 2.667rem 0
      border-left transparent
      border-bottom transparent
      transform translateX(0.64rem) rotate(90deg)
      z-index -1
      background #fff
    .issue-img
      width 1.12rem
      height 1.12rem
</style>
