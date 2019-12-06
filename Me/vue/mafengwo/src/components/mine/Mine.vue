<template>
  <div class="mine">
    <!-- 头部 -->
    <v-header>
      <router-link to="/message" slot="left-icon">
        <i class="icon left">&#xe608;</i>
      </router-link>
      <router-link to="/scan" slot="left-icon">
        <i class="icon left">&#xe60f;</i>
      </router-link>
      <span slot="content"></span>
      <router-link to="/seting" slot="right-icon" class="right">
        <i class="icon">&#xe61a;</i>
      </router-link>
    </v-header>
    <div class="ball0"></div>
    <div class="ball1"></div>
    <div class="ball2"></div>
    <div class="tangle0"></div>
    <div class="tangle1"></div>
    <div class="tangle2"></div>
    <div class="tangle3"></div>
    <div class="tangle4"></div>
    <div class="tangle5"></div>
    <div class="content-wrapper">
      <v-scroll class="content-scroll" ref="contentScroll">
      <div class="content">
        <div class="top">
          <div class="unLogin-wrapper" v-if="show">
            <div class="title">Hi~欢迎来到马蜂窝</div>
            <div class="text">愿每一旅行愿望得以达成</div>
            <van-button round class="login-btn" @click="go_login_register">登录/注册</van-button>
          </div>
        </div>
        <div class="bottom">
        </div>
      </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/mHeader'
import scroll from  '@/components/scroll'
export default {
  name: 'Mine',
  components: {
    'v-scroll': scroll,
    'v-header': mHeader
  },
  data () {
    return {
      result: [],
      show: true
    }
  },
  methods: {
    go_login_register () {
      this.$toast('去登录/注册')
    }
  }
}
</script>

<style lang="stylus" scoped>
.mine
  // background-color #f4ea2a
  width 100%
  height 100%
  box-sizing border-box
  .ball0
    position absolute
    background-image linear-gradient(0deg, #FFFF00, #f8fadb)
    width 4.267rem
    height 4.267rem
    border-radius 50%
    opacity .8
    border none
    top 43%
    left 42%
    transform translate(-50%, -50%)
  .ball1
    position absolute
    background-image linear-gradient(-45deg, #f6f9d2, #f2f7a1)
    width 2.667rem
    height 2.667rem
    border-radius 50%
    opacity .6
    border none
    top 55%
    left 48%
    transform translate(-50%, -50%)
  .ball2
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f2f7a1)
    width 3.2rem
    height 3.2rem
    border-radius 50%
    opacity .8
    border none
    top 48%
    left 68%
    transform translate(-50%, -50%)
  .tangle0
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    z-index 2
    border none
    top 12%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle1
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f4ea2a)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    border none
    z-index 2
    top 17%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle2
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    z-index 2
    border none
    top 22%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle3
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    z-index 2
    border none
    bottom  15%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle4
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f4ea2a)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    border none
    z-index 2
    bottom 20%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle5
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width 5.6rem
    border-radius 0.533rem
    height 0.533rem
    opacity .6
    z-index 2
    border none
    bottom 25%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
  .content-wrapper
    width 100%
    height 100%
    padding-top 1.1729rem
    padding-bottom 1.868rem
    .content-scroll
      overflow hidden
      position absolute
      top 1.1729rem
      left 0
      right 0
      bottom 1.868rem
      .content
        position relative
        .top
          background-color #f4ea2a
          width 100%
          height 4.8rem
          border-radius 0 0 0.36rem 0.36rem
          position relative
          .unLogin-wrapper
            z-index 3
            position absolute
            top 0.133rem
            text-align left
            left 0.533rem
            .title
              font-size 0.64rem
              font-weight 600
            .text
              margin-top 0.267rem
              font-size 0.42rem
            .login-btn
              color #f4ea2a
              background-color #1C1C1C
              border none
              height 1.173rem
              font-size 0.426rem
              margin-top 0.533rem
              width 3.6rem
        .bottom
          width 100%
          height 13rem
          background-color: rgba(235, 236, 236, 0.658);
</style>