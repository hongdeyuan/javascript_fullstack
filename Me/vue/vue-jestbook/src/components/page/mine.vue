<template>
  <div class="mine">
    <!-- 头部 -->
    <v-header>
      <router-link to="/message" slot="left-icon">
        <i class="icon left">&#xe61b;</i>
      </router-link>
      <span slot="content"></span>
      <router-link to="/seting" slot="right-icon" class="right">
        <i class="icon">&#xe645;</i>
      </router-link>
    </v-header>
    <!-- body部分 -->
    <div class="content-wrapper">
      <v-scroll class="content-scroll" ref="contentScroll">
        <div class="content">
          <div class="login-register">
            <div class="login-left">
              <img class="avatar" src="../../assets/imgs/avatar.jpg" alt="">
            </div>
            <div class="login-right">
              <div class="title">登录/注册</div>
              <div class="text">欢迎来到爆笑世界</div>
            </div>
          </div>
          <div class="earnings">
            <div class="earnings-left">
              <div class="name">金币</div>
              <div class="number">0</div>
              <div class="b-icon"></div>
            </div>
            <div class="earnings-rigth right">
              <div class="name">金额</div>
              <div class="number">0.00</div>
              <div class="e-icon"></div>
            </div>
          </div>
          <div class="applications">
            <h5 class="applications-title">我的应用</h5>
            <div class="applications-list">
              <div class="top">
                <div class="item">
                  <div class="icon qianbao"></div>
                  <div class="title">我的钱包</div>
                </div>
                <div class="item">
                  <div class="icon tixian"></div>
                  <div class="title">立即提现</div>
                </div>
                <div class="item">
                  <div class="icon footmark"></div>
                  <div class="title">提现记录</div>
                </div>
                <div class="item">
                  <div class="icon friend"></div>
                  <div class="title">邀请好友</div>
                </div>
              </div>
              <div class="bottom">
                <div class="item">
                  <div class="icon invitation"></div>
                  <div class="title">帖子</div>
                </div>
                <div class="item">
                  <div class="icon discuss"></div>
                  <div class="title">评论</div>
                </div>
                <div class="item">
                  <div class="icon like"></div>
                  <div class="title">我的赞</div>
                </div>
                <div class="item">
                  <div class="icon enshrine"></div>
                  <div class="title">我的收藏</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-scroll>
    </div>
    <!-- loading -->
    <v-loading v-show="show"></v-loading>
  </div>
</template>

<script>
import mHeader from '@/components/mHeader'
import scroll from  '@/components/scroll'
import loading from  '@/components/loading'
import api from '@/api'
export default {
  name: 'Mine',
  components: {
    'v-scroll': scroll,
    'v-header': mHeader,
    'v-loading': loading
  },
  data () {
    return {
      result: [],
      page: 1,
      show: true
    }
  },
  methods: {
    _getNewJoke () {
      const params = {
        key: '991792145f62460bac35b1c92ee50cdb',
        page: this.page,
        rows: 20
      }
      api.NewJoke(params)
      .then((res) => {
        console.log(res)
        if (res.error_code === 0) {
          this.result = res
        }
      })
    }
  },
  mounted () {
    // this._getNewJoke()
    setTimeout(() => {
      this.show = false
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.content-wrapper
  position fixed
  top 37.54px
  bottom 0
  width 100%
  .content-scroll
    height 100%
    overflow hidden
    .content
      position relative
      height 640px
      .login-register
        position relative
        box-sizing border-box
        padding px2rem(15px) px2rem(30px) px2rem(15px) px2rem(30px)
        .login-left
          display inline-block
          vertical-align middle
          .avatar
            border-radius 50%
            width px2rem(128px)
            height px2rem(128px)
        .login-right
          display inline-block
          margin-left px2rem(30px)
          vertical-align middle
          .title
            font-weight 900
          .text
            font-size px2rem(24px)
            margin-top px2rem(40px)
            color #696969
      .earnings
        position relative
        box-sizing border-box
        margin-top px2rem(30px)
        padding px2rem(30px) px2rem(20px) px2rem(20px) px2rem(40px)
        .earnings-left,.earnings-rigth
          width 42%
          height px2rem(164px)
          position relative
          display inline-block
          border-radius px2rem(10px)
          box-shadow 0 0 px2rem(15px) #B5B5B5
          margin-left px2rem(35px)
          .name
            color #696969
            margin-top px2rem(20px)
            margin-left px2rem(15px)
            font-size px2rem(28px)
          .number
            font-size px2rem(48px)
            margin-top px2rem(20px)
            margin-left px2rem(15px)
            font-weight 900
          .b-icon
            position absolute
            height px2rem(70px)
            width px2rem(70px)
            background url('../../assets/imgs/jinbi.png')
            background-size cover
            right px2rem(20px)
            bottom px2rem(20px)
          .e-icon
            position absolute
            height px2rem(80px)
            width px2rem(80px)
            background url('../../assets/imgs/jine.png')
            background-size cover
            right px2rem(20px)
            bottom px2rem(20px)
      .applications
        position relative
        box-sizing border-box
        border-1px(#F5F5F5)
        margin-top px2rem(60px)
        padding px2rem(15px) px2rem(30px) px2rem(15px) px2rem(30px)
        .applications-title
          font-size px2rem(32px)
          margin-left px2rem(15px)
          margin-top px2rem(15px)
          color #696969
        .applications-list
          position relative
          box-sizing border-box
          margin-top px2rem(60px)
          .top,.bottom
            display flex
            margin-top px2rem(20px)
            width 100%
            font-size 12px
            height px2rem(150px)
            .item
              flex 1
              text-align center
              .icon
                margin 0 auto
              .title
                padding-top px2rem(15px)
                padding-bottom px2rem(10px)
                color #363636
            .qianbao
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/qianbao.png')
              background-size cover
            .tixian
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/tixian.png')
              background-size cover
            .footmark
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/footmark.png')
              background-size cover
            .friend
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/friend.png')
              background-size cover
            .invitation
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/invitation.png')
              background-size cover
            .discuss
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/discuss.png')
              background-size cover
            .like
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/like.png')
              background-size cover
            .enshrine
              height px2rem(80px)
              width px2rem(80px)
              background url('../../assets/imgs/enshrine.png')
              background-size cover
</style>