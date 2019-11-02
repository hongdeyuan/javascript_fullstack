<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img :src="seller.avatar" alt="" width="64" height="64">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>
        <div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
        <div class="support" v-if="seller.supports">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <div class="support-count" @click="Detailshare" v-if="seller.supports">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="bulletion-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletion-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <div class="backgroud" >
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <transition name="fade">
      <div class="detial" v-show="shareDetail">
        <div class="detail-wrapper">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <div class="star-wrapper">
              <!-- 星星 -->
            </div>
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <ul class="supports" v-if="seller.supports">
              <li class="support-item" v-for="(item,index) in seller.supports" :key="index">
                <span class="icon" :class="classMap[item.type]"></span>
                <span class="text">{{item.description}}</span>
              </li>
            </ul>
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <div class="buttetin">
              <div class="content">
                {{seller.bulletin}}
              </div>
            </div>
          </div>
        </div>
        <div class="detail-close" @click="hideDetail">
          <i class="icon-close"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'guarantee', 'invoice', 'special'],
      shareDetail: false
    }
  },
  methods: {
    Detailshare () {
      this.shareDetail = true
    },
    hideDetail () {
      this.showDetail = false
      console.log(this.showDetail)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '../../common/stylus/mixin'
.header
  position relative
  color #ffffff
  background rgba(7, 17, 27, 0.5)
  .content-wrapper
    position relative
    padding 24px 12px 18px 24px
    font-size 0
    .avatar
      display inline-block
      vertical-align top
      img
        border-radius 2px

    .content
      display inline-block
      font-size 14px
      margin-left 16px
      .title
        margin 2px 0 8px 0
        .brand
          width 30px
          height 18px
          display inline-block
          bg-image('brand')
          background-size 30px 18px
          background-repeat no-repeat
          vertical-align middle

        .name
          vertical-align middle
          margin-left 6px
          font-size 16px
          line-height 18px
          font-weight bold
      .description
        margin-bottom 10px
        line-height 12px
        font-size 12px
      .support
        .icon
          display inline-block
          vertical-align top
          width 12px
          height 12px
          vertical-align middle
          margin-right 4px
          background-size 12px 12px
          background-repeat no-repeat
          &.decrease
            bg-image('decrease_1')
          &.discount
            bg-image('discount_1')
          &.guarantee
            bg-image('guarantee_1')
          &.invoice
            bg-image('invoice_1')
          &.special
            bg-image('special_1')
        .text
          line-height 12px
          font-size 10px
          vertical-align middle
    .support-count
      position absolute
      right 12px
      bottom 14px
      height 24px
      line-height 24px
      padding 0 8px
      font-size 10px
      background-color rgba(0, 0, 0, .2)
      border-radius 14px
      text-align center
      .count
        vertical-align top
      .icon-keyboard_arrow_right
        margin-left 2px
        line-height 24px
  .backgroud
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    z-index -1
    filter blur(8px)
  .bulletion-wrapper
    position relative
    height 28px
    line-height 28px
    padding 0 22px 0 12px
    white-space nowrap
    overflow hidden
    text-overflow ellipsis
    background rgba(7, 17, 27,0.2)
    .bulletin-title
      display inline-block
      // margin-top 8px
      width 22px
      height 12px
      bg-image('bulletin')
      background-size 22px 12px
      background-repeat no-repeat
      vertical-align middle
    .bulletin-text
      font-size 8px
      margin 0 4px
      vertical-align middle
    .icon-keyboard_arrow_right
      position absolute
      right 1px
      top 8px
      font-size 10px
  .detial
    position fixed
    top 0
    left 0
    right 0
    bottom 0
    overflow auto
    background rgba(7, 17, 27, .8)
    backdrop-filter blur(10px)
    &.fade-enter,
    &.fade-leave-active
      opacity 0
      background rgba(7, 17, 27, 0)
    &.fade-enter-active,
    &.fade-leave-active
      transition all 0.5s
    .detail-wrapper
      overflow auto
      width 100%
      min-height 100%
      .detail-main
        margin-top 64px
        padding-bottom 64px
        .name
          line-height 16px
          font-size 16px
          text-align center
          font-weight 700
        .title
          display flex
          width 80%
          margin 28px auto 24px auto
        .line
          border-bottom 1px solid rgba(255, 255, 255, .2)
          flex 1
          position relative
          top -6px
        .text
          font-size 14px
          font-weight 700
          padding 0 12px
        .supports
          width 80%
          margin 0 auto
          .support-item
            padding 0 12px
            margin-bottom 12px
            font-size 0
            &:last-child
              margin-bottom 0
            .icon
              display inline-block
              width 16px
              height 16px
              vertical-align top
              margin-right 6px
              background-size 16px 16px
              background-repeat no-repeat
              &.decrease
                bg-image('decrease_2')
              &.discount
                bg-image('discount_2')
              &.guarantee
                bg-image('guarantee_2')
              &.invoice
                bg-image('invoice_2')
              &.special
                bg-image('special_2')
            .text
              line-height 16px
              font-size 12px
        .buttetin
          width 80%
          margin 0 auto
          .content
            padding 0 12px
            line-height 24px
            font-size 12px
    .detail-close
      position relative
      width 32px
      height 32px
      margin -64px auto 0 auto
      font-size 32px
      clear both
</style>
