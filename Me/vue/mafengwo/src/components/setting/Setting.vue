<template>
  <div class="setting">
    <div class="header">
      <i class="icon" @click="go_mine">&#xe610;</i>
      <h2 class="title">设置</h2>
    </div>
    <div class="content-wrapper" ref="contentScroll">
      <div class="content">
        <div class="top" v-show="currentUser.id"> 
          <div class="personInfo">编辑个人信息<i class="icon">&#xe64a;</i></div>
          <div class="address">常住址<span class="name">江西</span><i class="icon">&#xe64a;</i></div>
          <div class="infoSetting">常用信息设置<span class="text">袁德红，江西-宜春</span><i class="icon">&#xe64a;</i></div>
        </div>
        <div class="middle">
          <div class="accountSetting">账号绑定与设置<i class="icon">&#xe64a;</i></div>
          <div class="messageSetting">消息设置<i class="icon">&#xe64a;</i></div>
          <div class="privateSetting">隐私设置<i class="icon">&#xe64a;</i></div>
          <div class="clearHistory">清楚缓存<i class="icon">&#xe64a;</i></div>
        </div>
        <div class="bottom">
          <div class="questionBack">常见问题反馈<i class="icon">&#xe64a;</i></div>
          <div class="recommendFriends">推荐给好友<i class="icon">&#xe64a;</i></div>
          <div class="aboutMaFengWo">关于马蜂窝旅游<i class="icon">&#xe64a;</i></div>
        </div>
        <div class="loginOut" v-show="currentUser.id" @click="loginOut">退出当前账号</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Setting',
  data () {
    return {
      isLogin: false
    }
  },
  components: {
  },
  methods: {
    go_mine () {
      this.$router.push({ path: '/Mine'})
    },
    loginOut () {
      console.log('退出')
      this.deleteUserInfo()
      this.$toast('退出成功')
      this.$router.push({ path: '/Mine'})
    },
    ...mapActions([
      'deleteUserInfo'
    ])
  },
  computed: {
    ...mapGetters([
      'currentUser',
    ])
  },
  mounted () {
    // console.log(this.currentUser.id)
  }
}
</script>

<style lang="stylus" scoped>
.setting
  position relative
  width 100%
  height 100vh
  z-index 151
  background-color #fff
  box-sizing border-box
  .header
    position relative
    width 100%
    background-color #fff
    height 1.2rem
    border-bottom 0.0133rem solid gray
    .icon
      position absolute
      left 0.25rem
      top 0.25rem
      font-size 0.64rem
      font-weight 500
      color black
      display inline-block
    .title
      position absolute
      top 0.3rem
      font-size 0.54rem
      font-weight 100
      display inline-block
  .content-wrapper
    overflow hidden
    position absolute
    top 1.1729rem
    left 0
    right 0
    bottom 0
    z-index 2
    opacity 0.9
    .content
      position relative
      background-color rgba(7,17,27,.1)
      .top
        position relative
        text-align left
        margin-bottom 0.24rem
        background-color #fff
        .personInfo
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .address
          position relative
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .name
            font-size .36rem
            line-height 1.2rem
            right 1.5rem
            position absolute
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.72rem
            position absolute
        .infoSetting
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .text
            font-size .36rem
            line-height 1.2rem
            right 1.2rem
            position absolute
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
      .middle
        position relative
        text-align left
        margin-bottom 0.24rem
        background-color #fff
        .accountSetting
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .messageSetting
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .privateSetting
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .clearHistory
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
      .bottom
        position relative
        margin-bottom 0.24rem
        text-align left
        background-color #fff
        .questionBack
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .recommendFriends
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
        .aboutMaFengWo
          font-size 0.48rem
          margin-left 0.36rem
          border-bottom 0.0133rem solid #d5d6d7
          line-height 1.2rem
          width 100%
          height 1.2rem
          .icon
            font-size 0.48rem
            line-height 1.2rem
            right 0.36rem
            position absolute
      .loginOut
        width 100%
        height 1.5rem
        line-height 1.5rem
        font-size 0.48rem
        background-color #fff
        color blue
        margin-bottom 0.24rem
        &::after
          content ''
          display block
          width 100%
          height 0.24rem
          background-color #d5d6d7
</style>
