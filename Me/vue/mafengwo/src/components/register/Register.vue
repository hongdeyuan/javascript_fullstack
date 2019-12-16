<template>
  <div class="register" ref="register">
    <div class="back" @click="go_mine">
      <div class="icon">&#xe610;</div>
    </div>
    <div class="register_top">
      <h2 class="title">登录后更精彩</h2>
      <p class="desc">全世界的旅行故事都在期待与你的相遇</p>
    </div>
    <div class="register_middle">
      <div class="register_acount_pwd">
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
        <div class="pwd_input">
          <input class="pwd_input_password" @input="inputPwd1" @focus="focusPwd1" @blur="blurPwd1" v-model="confirmPwd" type="password"  placeholder="请再次输入密码" v-if="!ifDisplay1">
          <input class="pwd_input_password" @input="inputPwd1" @focus="focusPwd1" @blur="blurPwd1" v-model="confirmPwd" type="text"  placeholder="请再次输入密码" v-if="ifDisplay1">
          <i class="icon" v-show="shareClear2" @click="clearPwd1">&#xe625;</i>
          <i class="icon visible" v-show="!ifDisplay1" @click="ifDisplay1=!ifDisplay1">&#xe637;</i>
          <i class="icon visible" v-show="ifDisplay1" @click="ifDisplay1=!ifDisplay1">&#xe675;</i> 
        </div>
        <div class="phone_email_go__register" @click="register">注册</div>
      </div>
      <div class="login-middle-bottom">
        <div class="content">
          <div class="left">
            <div class="go_login" @click="go_login">去登录</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      account: '',
      pwd: '',
      confirmPwd: '',
      shareClear: false,
      shareClear1: false,
      shareClear2: false,
      ifDisplay: false,
      ifDisplay1: false
    }
  },
  methods: {
    register () {
      var regEmail = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
      var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/
      //var url="/nptOfficialWebsite/apply/sendSms?mobile="+this.ruleForm.phone;
      if(this.account==''){
        this.$toast('请输入手机号码/邮箱')
      } else if(this.pwd == '' || this.confirmPwd == '') {
        this.$toast('请输入密码')
      } else if ( this.pwd !== this.confirmPwd) {
        this.$toast('两次密码不一致!')
      } else if ( (reg.test(this.account) && this.pwd === this.confirmPwd) || (regEmail.test(this.account) && this.pwd === this.confirmPwd) ){
        console.log('go to register')
        /*this.$http.post(url).then(
          res=>{
            this.phonedata=res.data;
        })*/
      } else {
        this.$toast('手机号码/邮箱格式不正确')
      }
    },
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
    clearPwd1 () {
      this.confirmPwd = ''
      this.shareClear2 = false
    },
    inputPwd (e) {
      // console.log(e)
      if (this.pwd.length > 0) {
        this.shareClear1 = true
      } else {
        this.shareClear1 = false
      }
    },
    inputPwd1 (e) {
      // console.log(e)
      if (this.confirmPwd.length > 0) {
        this.shareClear2 = true
      } else {
        this.shareClear2 = false
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
    },
    focusPwd1 (e) {
      if (this.confirmPwd.length > 0) {
        this.shareClear2 = true
      } else {
        this.shareClear2 = false
      }
    },
    blurAcount (e) {
      this.shareClear = false
    },
    blurPwd (e) {
      // console.log(e)
      this.shareClear1 = false
    },
    blurPwd1 (e) {
      // console.log(e)
      this.shareClear2 = false
    },
    go_mine () {
      this.$router.push({ path: '/Mine'})
    },
    go_login () {
      this.$router.push({ path: '/Login'})
    }
  },
  mounted () {
    let loginNode = this.$refs.login
    // console.log(loginNode)
  }
}
</script>

<style lang="stylus" scoped>
.register
  background url('../../assets/imgs/login_bg2.gif')
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
  .register_top
    padding 0.96rem 0.5rem
    color #fff
    .title
      font-weight 500
      font-size 0.96rem
    .desc
      font-size 0.48rem
      padding-top 0.5rem
  .register_middle
    position relative
    margin-top 1.2rem
    .register_acount_pwd
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
      .phone_email_go__register
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
        margin-top 1.2rem
        display flex
        justify-content center
        align-items center
        box-sizing border-box
        color #fff
        .left
          display inline-block
          .go_login
            display inline-block
            color #0000FF
</style>