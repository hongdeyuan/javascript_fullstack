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
    <div class="content-wrapper" ref="contentScroll">
      <div class="content">
        <div class="top">
          <div class="ball0"></div>
          <div class="ball1"></div>
          <div class="ball2"></div>
          <div class="unLogin-wrapper" v-if="show">
            <div class="title">Hi~欢迎来到马蜂窝</div>
            <div class="text">愿每一旅行愿望得以达成</div>
            <van-button round class="login-btn" @click="go_login_register">登录/注册</van-button>
          </div>
          <div class="login-wrapper" v-if="!show">
            <div class="top">
              <div class="left">
                <div class="img">
                  <img src="../../assets/imgs/QQ.png" alt="QQ">
                </div>
                <div class="right">
                  <div class="top">
                    <div class="h2">JAVA</div>
                    <i class="icon">&#xe613;</i>
                  </div>
                  <div class="bottom">
                    <div class="level">LV.1</div>
                    <div class="open_vip"><i class="icon">&#xe61f;</i>开通会员</div>
                  </div>
                </div>
              </div>
              <div class="right">
                <div class="person_page" @click="personPage">个人主页<i class="icon">&#xe64a;</i></div>
              </div>
            </div>
            <div class="bottom">
              <div class="left"></div>
              <div class="right"></div>
            </div>
          </div>
        </div>
        <div class="bottom">
          <div class="my-application">
            <div class="item">
              <img src="../../assets/imgs/like.png" alt="">
              <div class="title">我的收藏</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/orders.png" alt="">
              <div class="title">我的订单</div>
            </div>
            <div class="item">
              <img src="../../assets/imgs/history.png" alt="">
              <div class="title">我的历史</div>
            </div>
          </div>
          <div class="fengmi">
            <div class="left">
              <img src="../../assets/imgs/fengmi.jpg" alt="">
            </div>
            <div class="middle">
              <div class="middle-title">
                <p class="xianshi">限时</p>
                <p class="title">免费领取蜂蜜</p>
              </div>
              <div class="middle-desc">
                领取蜂蜜可用于消费抵现
              </div>
            </div>
            <div class="right">
              <van-button round class="login-btn" @click="go_get">去领取</van-button>
            </div>
          </div>
          <div class="track">
            <van-button round class="track-btn" @click="go_track">
              <img src="../../assets/imgs/earth.png" alt="">
              点亮我的足迹
            </van-button>
          </div>
          <div class="travel">
            <div class="travel-title">
              <div class="name">我的旅行</div>
              <div class="medal" v-if="false">旅行勋章<span class="medal-count">0枚</span><i class="icon">&#xe64a;</i></div>
            </div>
            <div class="travel-share">
              <van-button round class="share-btn" @click="go_share"><i class="icon">&#xe629;</i>分享你的旅行图片</van-button>
              <p class="share-desc">用照片记录旅行的小技巧</p>
            </div>
            <div class="travel-application" v-if="false">
              <div class="note">笔记</div>|
              <div class="travel-notes">游记</div>|
              <div class="video">视频</div>|
              <div class="questions_and_answers">问答</div>|
              <div class="comment">点评</div>
            </div>
          </div>
          <div class="more-service">
            <div class="service-title">
              <div class="name">更多服务</div>
            </div>
            <div class="icons">
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe618;</i>
                </div>
                <p class="icon-desc">我的钱包</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe63e;</i>
                </div>
                <p class="icon-desc">卡卷红包</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe646;</i>
                </div>
                <p class="icon-desc">我的活动</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe674;</i>
                </div>
                <p class="icon-desc">我的圈子</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe65f;</i>
                </div>
                <p class="icon-desc">我的会员</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe602;</i>
                </div>
                <p class="icon-desc">我的蜂蜜</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe70d;</i>
                </div>
                <p class="icon-desc">旅行装备</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe607;</i>
                </div>
                <p class="icon-desc">新人有礼</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe628;</i>
                </div>
                <p class="icon-desc">出境安全</p>
              </div>
              <div class="icon">
                <div class="icon-img">
                  <i class="icon-img-content icon" >&#xe645;</i>
                </div>
                <p class="icon-desc">证照信息</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mHeader from '@/components/mHeader'
import BScroll from 'better-scroll'
export default {
  name: 'Mine',
  components: {
    'v-header': mHeader
  },
  data () {
    return {
      result: [],
      show: false
    }
  },
  methods: {
    go_login_register () {
      this.$toast('去登录/注册')
      this.$router.push({ path: '/Login'})
    },
    go_get () {
      this.$toast('去领取')
    },
    go_track () {
      this.$toast('去点亮足迹')
    },
    go_share () {
      this.$toast('去分享你的旅行照片')
    },
    personPage () {
      this.$toast('去个人信息')
    },
    _initScroll () {
      this.contentScroll = new BScroll(this.$refs.contentScroll, {
        click: true,
        probeType: 3
      })
    }
  },
  mounted () {
    this.$nextTick(() => {
      this._initScroll()
    })
  }
}
</script>

<style lang="stylus" scoped>
.ball0
  position absolute
  background-image linear-gradient(0deg, #f4ea2a, #f2f291)
  width 1.2rem
  height 1.2rem
  border-radius 50%
  border none
  top 15%
  left 68%
  transform translate(-50%, -50%)
.ball1
  position absolute
  background-image linear-gradient(0deg, #f4ea2a, #f2f291)
  width 3.2rem
  height 3.2rem
  border-radius 0.96rem
  border none
  top 55%
  left 88%
  transform translate(-50%, -50%) rotateZ(45deg)
.ball2
  position absolute
  background-image linear-gradient(0deg, #f4ea22, #f4ea2a)
  width 3.2rem
  height 3.2rem
  border-radius 0.96rem
  border none
  top 78%
  left 88%
  transform translate(-50%, -50%) rotateZ(45deg)
.mine
  // background-color #f4ea2a
  width 100%
  height 100%
  position absolute
  box-sizing border-box
  background-color: rgba(200, 200, 200, 0.2)
  &::before
    content ''
    display block
    background-color #f4ea2a
    border-radius 0 0 0.36rem 0.36rem
    width 100%
    height 35%
  &::after
    content ''
    display block
    background-color: rgba(200, 200, 200, 0.2)
    width 100%
    height 50%
  .content-wrapper
    overflow hidden
    position absolute
    top 1.1729rem
    left 0
    right 0
    bottom 1.868rem
    z-index 2
    opacity 0.9
    .content
      position relative
      .top
        background-color #f4ea2a
        width 100%
        overflow hidden
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
        .login-wrapper
          width 100%
          height 4rem
          .top
            background-color: rgba(200, 200, 200, 0)
            width 90%
            height 50%
            margin-left 0.5rem
            box-sizing border-box
            .left
              position relative
              height 100%
              width 65%
              display inline-block
              .img
                position absolute
                left 0
                top 0.1536rem
                border-radius 50%
                width 1.64rem
                background-color rgba(200, 200, 200, 0.7)
                height 1.64rem
                img
                  width 100%
                  height 100%
              .right
                position absolute
                left 1.2rem
                width 3.5rem
                height 100%
                .top
                  position relative
                  margin-top 0.32rem
                  height 0.74rem
                  .h2
                    display inline-block
                    font-size 0.72rem
                    font-weight 600
                  .icon
                    font-size 0.72rem
                .bottom
                  position relative
                  height 0.74rem
                  .level
                    display inline-block
                    font-size 0.36rem
                    background-color #fbf68e
                    border-radius 0.16rem
                    border 0.08rem solid #fbf68e
                  .open_vip
                    display inline-block
                    background-color rgba(100, 100, 100, 0.6)
                    font-size 0.36rem
                    border-radius 0.16rem
                    border 0.08rem solid rgba(100, 100, 100, 0.1)
                    .icon
                      font-size 0.36rem
            .right
              height 100%
              width 30%
              display inline-block
              .person_page
                position absolute
                top 0.85rem
                right 0
                font-size 0.42rem
                .icon
                  padding-left 0.16rem
                  font-size 0.42rem
                  font-weight 500
          .bottom
            background-color: rgba(200, 200, 200, 0)
            width 90%
            margin-left 0.5rem
            height 50%
            box-sizing border-box
      .bottom
        width 100%
        height 100%
        position relative
        background-color: rgba(200, 200, 200, 0.2)
        .my-application
          display flex
          width 90%
          margin-left 0.5rem
          margin-top -0.72rem
          border-radius 0.24rem
          border none
          background-color #fff
          box-sizing border-box
          padding 0.16rem 0.36rem 0.32rem 0.24rem
          .item
            display inline-block
            flex 1
            font-size 0.40rem
            img 
              width 1.2rem
              height 1.2rem
            .title
              margin-top 0.16rem
        .fengmi
          width 90%
          height 1.8rem
          margin-left 0.5rem
          margin-top 0.25rem
          border-radius 0.24rem
          font-size 0.32rem
          display flex
          justify-content center
          align-items center
          border none
          background-color #fff
          box-sizing border-box
          margin-bottom 0.24rem
          .left
            width 1.2rem
            margin-right 0.5rem
            height 1.2rem
            display inline-block
            box-sizing border-box
            img 
              width 1.2rem
              height 1.2rem
          .middle
            display inline-block
            vertical-align middle
            margin-left -0.25rem
            .middle-title
              box-sizing border-box
              .xianshi
                background-color red
                color #fff
                display inline-block
                width 0.96rem
                border-radius 0.08rem
                height 0.32rem
              .title
                display inline-block
                font-size 0.36rem
                font-weight 600
            .middle-desc
              font-size 0.32rem
              margin-top 0.36rem
          .right
            margin-left 0.96rem
            width 2.4rem
            height 0.9rem
            display inline-block
            vertical-align middle
            .login-btn
              width 2.4rem
              height 0.9rem
              text-align center
              line-height 0.9rem
              background-color #f4ea2a
        .track
          width 90%
          height 1.8rem
          margin-left 0.5rem
          margin-top 0.25rem
          border-radius 0.24rem
          font-size 0.32rem
          display flex
          justify-content center
          align-items center
          border none
          background-color #fff
          box-sizing border-box
          margin-bottom 0.24rem
        .track-btn
          width 55%
          height 55%
          line-height 0.9rem
          text-align center
          background-size cover
          background url('../../assets/imgs/track.jpg')
          border none
          img
            line-height 0.9rem
            width 0.48rem
            height 0.48rem
            margin-bottom -0.08rem
          .van-button__text
            font-weight 600
            color #fff
        .travel
          width 90%
          margin-left 0.5rem
          margin-top 0.25rem
          border-radius 0.24rem
          font-size 0.32rem
          position relative
          border none
          background-color #fff
          box-sizing border-box
          margin-bottom 0.24rem
          .travel-title
            position relative
            padding-top 0.42rem
            padding-left 0.24rem
            padding-right 0.24rem
            line-height 0.42rem
            .name
              display inline-block
              position absolute
              left 0.36rem
              font-size 0.42rem
              font-weight 600
            .medal
              display inline-block
              position absolute
              right 0.36rem
              font-size 0.38rem
              font-weight 900
              .medal-count
                margin-left 0.12rem
              .icon
                font-size 0.38rem
          .travel-share
            position relative
            height 3rem
            margin-top 0.56rem
            .share-btn
              margin-top 0.32rem
              width 65%
              background-color #f4ea2a
              border none
              .icon
                font-size 0.48rem
                color #000
              .van-button__text
                font-weight 600
            .share-desc
              margin-top 0.42rem
              color #0000FF
          .travel-application
            padding-bottom 0.36rem
            display flex
            justify-content center
            align-items center
            border none
            .note
              flex 1
            .travel-notes
              flex 1
            .video
              flex 1
            .questions_and_answers
              flex 1
            .comment
              flex 1
        .more-service
          width 90%
          height 100%
          margin-left 0.5rem
          margin-top 0.25rem
          border-radius 0.24rem
          font-size 0.32rem
          position relative
          border none
          background-color #fff
          box-sizing border-box
          margin-bottom 0.24rem
          .service-title
            position relative
            padding-top 0.42rem
            padding-left 0.24rem
            padding-right 0.24rem
            line-height 0.42rem
            .name
              display inline-block
              position absolute
              left 0.36rem
              font-size 0.42rem
              font-weight 600
          .icons
            margin-top 0.72rem
            overflow hidden
            margin-bottom 0.36rem
            .icon
              float left
              width 25%
              .icon-img
                width 100%
                padding-top 0.36rem
                height 1.2rem
                position relative
                .icon-img-content
                  position absolute
                  left 0.7rem
                  color #FFA500
                  font-size 0.96rem
              .icon-desc
                font-size 0.36rem
                font-family 'Microsoft YaHei','微软雅黑','MicrosoftJhengHei','华文细黑','STHeiti','MingLiu'
                color #000
</style>