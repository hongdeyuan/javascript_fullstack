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
  .mHeader
    height 1.173rem
    line-height 1.173rem
    background-color  #f4ea2a
    top 0
    position fixed
    width 100%
    display flex
    z-index 4
    align-items center
    justify-content space-between
    color #746ca8
    font-size 0.4rem
    &-icon
      flex 0 0 1.173rem
      margin-top 0.08rem
      cursor pointer
      .icon
        font-size 0.853rem
        color #1C1C1C
      .left
        margin-left 0.213rem
</style>
