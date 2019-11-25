<template>
  <div class="tab">
    <router-link to="/recommend" tag="div" class="tab-item">
      <div class="icon">&#xe606;</div>
      <div class="tab-link">推荐</div>
    </router-link>
    <router-link to="/img" tag="div" class="tab-item">
      <div class="icon">&#xe602;</div>
      <div class="tab-link">趣图</div>
    </router-link>
    <router-link to="/mine" tag="div" class="tab-item">
      <div class="icon">&#xe6c5;</div>
      <div class="tab-link">我的</div>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../assets/css/function.styl'
.tab
  display flex
  position absolute
  z-index 150
  bottom 0
  left 0
  width 100%
  background-color #fff
  border-1px(#F5F5F5)
  font-size 12px
  height px2rem(140px)
  &-item
    flex 1
    text-align center
    .icon
      margin-top px2rem(15px)
    .tab-link
      padding-bottom 5px
      color #000
    &.router-link-active
      .tab-link
        color #1E90FF
      .icon
        color #1E90FF
</style>
