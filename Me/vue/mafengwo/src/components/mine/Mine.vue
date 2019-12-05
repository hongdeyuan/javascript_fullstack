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
    <div class="content-wrapper"></div>
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
  }
}
</script>

<style lang="stylus" scoped>
@import "../../assets/css/function"
.mine
  background-color #f4ea2a
  width 100%
  height 100vh
  .ball0
    position absolute
    background-image linear-gradient(0deg, #FFFF00, #f8fadb)
    width px2rem(320px)
    height px2rem(320px)
    border-radius 50%
    opacity .8
    border none
    top 43%
    left 42%
    transform translate(-50%, -50%)
  .ball1
    position absolute
    background-image linear-gradient(-45deg, #f6f9d2, #f2f7a1)
    width px2rem(200px)
    height px2rem(200px)
    border-radius 50%
    opacity .6
    border none
    top 55%
    left 48%
    transform translate(-50%, -50%)
  .ball2
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f2f7a1)
    width px2rem(240px)
    height px2rem(240px)
    border-radius 50%
    opacity .8
    border none
    top 48%
    left 68%
    transform translate(-50%, -50%)
  .tangle0
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    top 12%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle1
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f4ea2a)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    top 17%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle2
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    top 22%
    left 65%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle3
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    bottom  15%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle4
    position absolute
    background-image linear-gradient(45deg, #f6f9d2, #f4ea2a)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    bottom 20%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
  .tangle5
    position absolute
    background-image linear-gradient(45deg, #f4ea2a, #f6f9d2)
    width px2rem(420px)
    border-radius px2rem(40px) px2rem(40px) px2rem(40px) px2rem(40px)
    height px2rem(40px)
    opacity .6
    border none
    bottom 25%
    left 25%
    transform translate(-50%, -50%) rotate(-16deg)
</style>