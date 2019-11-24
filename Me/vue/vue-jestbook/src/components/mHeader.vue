<template>
  <div class="mHeader">
    <div class="mHeader-icon" @click="leftEvent">
      <slot name="left-icon"></slot>
    </div>
    <div class="mHeader-cont">
      <slot name="content"></slot>
    </div>
    <div class="mHeader-icon">
      <slot name="right-icon"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hd',
  data () {
    return {

    }
  },
  methods: {
    leftEvent () {
      this.$store.dispatch('setShowSidebar', true)
    }
  }
}
</script>

<style lang="stylus">
@import "../assets/css/function"
  .mHeader
    height px2rem(88px)
    line-height px2rem(88px)
    display flex
    align-items center
    justify-content space-between
    color #746ca8
    font-size px2rem(30px)
    &-icon
      flex 0 0 px2rem(88px)
      margin-top px2rem(6px)
      cursor pointer
      .icon
        font-size px2rem(48px)
      .left
        margin-left px2rem(20px)
</style>
