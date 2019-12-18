<template>
  <div class="login" ref="login">
    <div class="back" @click="go_mine">
      <div class="icon">&#xe610;</div>
    </div>
    <div class="login_top">
      <h2 class="title">登录后更精彩</h2>
      <p class="desc">全世界的旅行故事都在期待与你的相遇</p>
    </div>
    <div class="login_middle">
      <div class="login_acount_pwd">
        <div class="phone_email_input">
          <input class="phone_email_input_account" @input="inputAcount" @focus="focusAcount" @blur="blurAcount" v-model="account" type="text"  placeholder="请输入手机号/邮箱">
          <i class="icon" v-show="shareClear" @click="clearAcount">&#xe625;</i>
        </div>
        <div class="pwd_input">
          <input class="pwd_input_password" @input="inputPwd" @focus="focusPwd" @blur="blurPwd" v-model="pwd" type="password"  placeholder="请输入密码" v-if="!ifDisplay">
          <input class="pwd_input_password" @input="inputPwd" @focus="focusPwd" @blur="blurPwd" v-model="pwd" type="text"  placeholder="请输入密码" v-if="ifDisplay">
          <i class="icon" v-show="shareClear1" @click="clearPwd">&#xe625;</i>
          <i class="icon visible" v-show="!ifDisplay" @click="ifDisplay=!ifDisplay">&#xe637;</i>
          <i class="icon visible" v-show="ifDisplay" @click="ifDisplay=!ifDisplay">&#xe675;</i> 
        </div>
        <div class="phone_email_go_login" @click="go_login">登录</div>
      </div>
      <div class="login-middle-bottom">
        <div class="content">
          <div class="left">
            <div class="go_register" @click="go_register">去注册</div>|
            <div class="overseas_phone">海外手机账号</div>
          </div>
          <div class="right">忘记密码</div>
        </div>
      </div>
    </div>
    <div class="quick-login">
      <div class="line1"></div>
      <div class="line2"></div>
      <h4 class="txt-otherLogin">其他登录方式</h4>
      <div class="quick-type">
        <div class="quick-qq">
          <img src="../../assets/imgs/QQ.png" alt="qq">
          <div class="txt-qq">QQ</div>
        </div>
        <div class="quick-wx">
          <img src="../../assets/imgs/weixin.png" alt="wx">
          <div class="txt-wx">微信</div>
        </div>
        <div class="quick-wb">
          <img src="../../assets/imgs/weibo.png" alt="wb">
          <div class="txt-wb">微博</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      account: '',
      pwd: '',
      type: 1,
      shareClear: false,
      shareClear1: false,
      ifDisplay: false
    }
  },
  methods: {
    inputAcount (e) {
      // console.log(e)
      if(this.account.length > 0){
        this.shareClear = true
      } else {
        this.shareClear = false
      }
    },
    clearAcount () {
      this.account = ''
      this.shareClear = false
    },
    clearPwd () {
      this.pwd = ''
      this.shareClear1 = false
    },
    inputPwd (e) {
      // console.log(e)
      if (this.pwd.length > 0) {
        this.shareClear1 = true
      } else {
        this.shareClear1 = false
      }
    },
    focusAcount (e) {
      // console.log(e)
      if(this.account.length > 0){
        this.shareClear = true
      } else {
        this.shareClear = false
      }
    },
    focusPwd (e) {
      if (this.pwd.length > 0) {
        this.shareClear1 = true
      } else {
        this.shareClear1 = false
      }
    }
    ,
    blurAcount (e) {
      this.shareClear = false
    }
    ,
    blurPwd (e) {
      // console.log(e)
      this.shareClear1 = false
    },
    go_login () {

      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/

      if(this.account==''){
        this.$toast('请输入手机号码/邮箱')
        return
      }
      if(this.pwd == '') {
        this.$toast('请输入密码')
        return
      }
      if ( reg.test(this.account) || regEmail.test(this.account) ){
        this.type = reg.test(this.account) ? 2 : 1
        console.log(this.type)
        // post 加密请求
        this.$http({
          method: 'post',
          url: 'http://localhost:3000/users/userLogin',
          data: {
            username: this.account.trim(),
            userpwd: this.pwd.trim(),
            type: this.type
          }
        }).then((res) => {
          console.log(res)
          if (res.data.code === 200) {
            // 本地存储数据
            this.$toast(res.data.message)
            // sessionStorage.setItem('userInfo', JSON.stringify(res.data.data))
            this.$router.push({ path: '/Mine' })
          } else {
            this.$toast(res.data.message)
          }
        }).catch((err) =>{
          console.log(err)
        })
        
      } else {
        this.$toast('手机号码/邮箱格式不正确')
        return
      }
    },
    go_mine () {
      this.$router.push({ path: '/Mine'})
    },
    go_register () {
      this.$router.push({ path: '/Register'})
    }
  },
  mounted () {
    let loginNode = this.$refs.login
    // console.log(loginNode)
  }
}
</script>

<style lang="stylus" scoped>
.login
  background url('../../assets/imgs/login_bg1.gif')
  width 100%
  height 100vh
  background-size cover
  position relative
  text-align left 
  box-sizing border-box
  z-index 151
  .back
    width 10%
    padding-top 0.3rem
    padding-left 0.25rem
    .icon
      font-weight 600
  .login_top
    padding 0.96rem 0.5rem
    color #fff
    .title
      font-weight 500
      font-size 0.96rem
    .desc
      font-size 0.48rem
      padding-top 0.5rem
  .login_middle
    position relative
    margin-top 1.2rem
    .login_acount_pwd
      position relative
      .phone_email_input
        width 85%
        margin-left 0.75rem
        height 1.5rem
        background-color rgba(255, 255, 255, 0.5)
        border-radius 26.64rem
        display flex
        justify-content center
        align-items center
        .phone_email_input_account
          width 75%
          display inline-block
          height 0.64rem
          font-size 0.56rem
          font-weight normal
          background-color rgba(255, 255, 255, 0)
          vertical-align middle
          caret-color black /* 光标颜色 */
          color #fff
          &::-webkit-input-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
          &::-moz-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
          &::-ms-input-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
        .icon
          display inline-block
          vertical-align middle
          font-size 0.56rem
          margin-left 0.64rem
      .pwd_input
        margin-top 0.36rem
        width 85%
        margin-left 0.75rem
        height 1.5rem
        background-color rgba(255, 255, 255, 0.5)
        border-radius 26.64rem
        display flex
        justify-content center
        align-items center
        .pwd_input_password
          width 65%
          display inline-block
          height 0.64rem
          font-size 0.56rem
          font-weight normal
          background-color rgba(255, 255, 255, 0)
          vertical-align middle
          caret-color black /* 光标颜色 */
          color #fff
          &::-webkit-input-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
          &::-moz-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
          &::-ms-input-placeholder /* WebKit browsers */
            color #fff
            font-size 0.56rem
        .icon
          display inline-block
          vertical-align middle
          font-size 0.56rem
          margin-left 0.08rem
        .visible
          margin-left 0.56rem
          font-size 0.64rem
          color #fff
      .phone_email_go_login
        margin-top 0.72rem
        width 85%
        margin-left 0.75rem
        height 1.5rem
        font-size 0.56rem
        color #8B8989
        background-color rgba(255, 255, 255, 0.8)
        border-radius 26.64rem
        display flex
        justify-content center
        align-items center
    .login-middle-bottom
      margin-top 0.72rem
      position relative
      display flex
      justify-content center
      align-items center
      box-sizing border-box
      .content
        width 85%
        font-size 0.42rem
        line-height 0.42rem
        color #fff
        .left
          display inline-block
          .go_register
            display inline-block
            margin-right 0.24rem
          .overseas_phone
            display inline-block
            margin-left 0.24rem
        .right
          display inline-block
          float right
  .quick-login
    position relative
    margin 1.5rem auto 0
    width 85%
    .line1
      position absolute
      width 30%
      left 0
      top 0.16rem
      height 0.05rem
      background-color rgba(255, 255, 255, 0.6)
    .line2
      width 30%
      height 0.05rem
      top 0.16rem
      right 0
      background-color rgba(255, 255, 255, 0.6)
      position absolute
    .txt-otherLogin
      color rgba(255, 255, 255, 0.5)
      width 3.73rem
      font-size 0.427rem
      font-weight 600
      margin -0.24rem auto 0
      text-align center
    .quick-type
      text-align: center
      margin: 0.64rem 0 0.12rem
      color rgba(255, 255, 255, 0.6)
      .quick-qq
        position relative
        width 25%
        display inline-block
        img 
          width 50%
          height 0.72rem
        .txt-qq
          font-size 0.42rem
      .quick-wx
        position relative
        width 25%
        display inline-block
        img
          width 50%
          height 0.72rem
        .txt-wx
          font-size 0.42rem
      .quick-wb
        position relative
        width 25%
        display inline-block
        img
          width 50%
          height 0.72rem
        .txt-wb
          font-size 0.42rem
</style>