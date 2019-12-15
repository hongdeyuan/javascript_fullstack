<template>
  <div class="login" ref="login">
    <div class="back" @click="go_mine">
      <div class="icon">&#xe610;</div>
    </div>
    <div class="login_top">
      <h2 class="title">登录后更精彩</h2>
      <p class="desc">全世界的旅行故事都在期待与你的相遇</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    go_mine () {
      this.$router.push({ path: '/Mine'})
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
</style>