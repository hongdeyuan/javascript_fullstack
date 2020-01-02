<template>
  <div class="home">
    <div class="home_waper">
      <div class="home_search">
        <van-button round class="search" @click="go_search">
          <i class="icon isearch">&#xe64d;</i>
          南昌
        </van-button>
        <i class="icon imessage">&#xe615;</i>
      </div>
      <div class="home_applications"></div>
      <div class="home_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go_search () {
      this.$toast('去搜索')
    }
  }
}
</script>

<style lang="stylus" scoped>
.home
  position relative
  background-color #fff
  .home_waper
    margin auto
    width 95%
    height 100%
    .home_search
      position relative
      width 100%
      height 1rem
      margin-top 0.08rem
      .search
        width 88%
        height 0.96rem
        line-height 0.96rem
        position absolute
        top 0.08rem
        left 0
        border none
        background-color rgba(200, 200, 200, .3)
        .isearch
          vertical-align middle
        .van-button__text
          margin-right 5.8rem
          font-size 0.38rem
          left 0
          color gray
          vertical-align middle
      .imessage
        display inline-block
        position absolute
        color black
        right 0
        top 0.24rem
</style>