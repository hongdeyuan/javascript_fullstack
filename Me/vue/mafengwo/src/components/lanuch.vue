<template>
  <div class="lanuch">
    <div class="logo-wrapper">
      <img class="logo" :src="logo" alt="">
      <div class="title">马蜂窝 自由行</div>
    </div>
    <div class="foot">马蜂窝 版权所有 @2019</div>
  </div>
</template>

<script>
export default {
  name: 'Lanuch',
  data () {
    return {
      logo: require('./../assets/imgs/logo.png')
    }
  },
  mounted() {
    // 2秒后跳到首页
    let timer = setTimeout(() => {
      clearTimeout(timer)
      this.$router.push({ path: '/home'})
    }, 5000)
  }
}
</script>

<style lang="stylus" scoped>
.lanuch
  width 100%
  position absolute
  height 100vh
  z-index 160
  background #fff
  box-sizing border-box
  .logo-wrapper
    position absolute
    top 40%
    left 50%
    transform translate(-50%, -50%)
    .logo
      width 3.413rem
      height 3.413rem
    .title
      font-weight 600
      font-size 0.56rem
      font-family 'STXingkai','微软雅黑','MicrosoftJhengHei','华文细黑','STHeiti','MingLiu'
  .foot
    position absolute
    bottom 0.533rem
    left 50%
    transform translateX(-50%)
    color #8B8989
    font-size 0.32rem
</style>