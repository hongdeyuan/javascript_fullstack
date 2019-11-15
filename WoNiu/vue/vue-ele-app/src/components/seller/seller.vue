<template>
  <div class="seller" ref="sellerScoll">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">{{seller.name}}</h1>
        <div class="desc border-1px">
          <div class="star star-36">
            <span class="star-item on" v-for="(item,index) in stars" :key="index"></span>
            <span class="star-item off" v-for="(item,index) in (5 - stars)" :key="index+4"></span>
          </div>
          <span class="text">{{seller.ratingCount}}</span>
          <span class="text">月售{{seller.sellCount}}单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">{{seller.minPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryPrice}}</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">{{seller.deliveryTime}}</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite" @click="like">
          <span class="icon-favorite" :class="{'active': pick=== true}"></span>
          <span class="text">{{pick === true ? '已收藏': '收藏'}}</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p
            class="content"
          >{{seller.bulletin}}</p>
        </div>
        <ul class="supports">
          <li class="support-item" v-for="(item, index) in seller.supports" :key="index+8">
            <span class="icon" :class="classMap[item.type]"></span>
            <span class="text">{{item.description}}</span>
          </li>
        </ul>
      </div>
      <div class="split"></div>
      <div class="pics">
        <h1 class="title">商家实景</h1>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="picScoll">
            <li class="pic-item" v-for="(pic, index) in seller.pics" :key="index+16">
              <img :src="pic" width="120" height="90"/>
            </li>
          </ul>
        </div>
      </div>
      <div class="split"></div>
      <div class="info">
        <h1 class="title border-1px">商家信息</h1>
        <ul>
          <li class="info-item" v-for="(info, index) in seller.infos" :key="index+32">{{info}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data () {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      data: [],
      pick: false
    }
  },
  created () {
    let self = this
    this.$http.get('http://localhost:8080/static/seller.json').then((res) => {
      if (res.data.errno === 0) {
        self.data = res.data.data
        self.$nextTick(() => {
          self._initScroll()
        })
      }
    })
  },
  methods: {
    _initScroll () {
      let self = this
      self.sellerScoll = new BScroll(self.$refs.sellerScoll, {
        click: true,
        probeType: 3
      })
      self.picScoll = new BScroll(self.$refs.picScoll, {
        click: true,
        scrollX: true,
        scrollY: false,
        probeType: 3
      })
    },
    like () {
      this.pick = !this.pick
    }
  },
  computed: {
    stars () {
      return Math.floor(this.seller.score)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.seller
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .seller-content
    .overview
      position relative
      padding 18px
      .title
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
      .desc
        padding-bottom 18px
        position relative
        border-1px(rgba(7, 17, 27, 0.1))
        font-size 0
        .star
          display inline-block
          margin-right 8px
          vertical-align top
          .star-item
            width 15px
            height 15px
            margin-right 6px
            background-size 15px 15px
            display: inline-block;
            background-repeat: no-repeat;
          .on
            background-image: url('star_on.png')
          .off
            background-image: url('star_off.png')
        .text
          display inline-block
          margin-right 12px
          line-height 18px
          vertical-align top
          font-size 10px
          color #4d555d
      .remark
        display flex
        padding-top 18px
        .block
          flex 1
          text-align center
          border-right 1px solid rgba(7,17,27,.1)
          h2
            margin-bottom 4px
            line-height 10px
            font-size 10px
            color #93999f
          .content
            line-height 24px
            font-size 10px
            color #07111b
            .stress
              font-size 24px
      .favorite
        position absolute
        width 50px
        right 11px
        top 18px
        text-align center
        .icon-favorite
          display block
          margin-bottom 4px
          line-height 24px
          font-size 24px
          color #d4d6d9
          &.active
            color: #f01414
        .text
          line-height 10px
          font-size 10px
          color #4d555d
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .bulletin
      padding 18px 18px 0
      .title
        margin-bottom 8px
        line-height 14px
        color #07111b
        font-size 14px
      .content-wrapper
        padding 0 12px 16px
        position relative
        border-1px(rgba(7, 17, 27, 0.1))
        .content
          line-height 24px
          font-size 12px
          color #f01414
      .supports
        li
          list-style none
          border-1px(rgba(7, 17, 27, 0.1))
          &.support-item
            padding 16px 12px
            position relative
            font-size 0
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
            color #07111b
    .pics
      padding 18px
      .title
        margin-bottom 12px
        line-height 14px
        color #07111b
        font-size 14px
      .pic-wrapper
        width 100%
        overflow hidden
        white-space nowrap
        .pic-list
          width 498px
          font-size 0
          .pic-item
            display inline-block
            margin-right 6px
            width 120px
            height 90px
    .info
      padding 18px 18px 0
      color #07111b
      .title
        padding-bottom 12px
        line-height 14px
        position relative
        font-size 14px
        border-1px(rgba(7, 17, 27, 0.1))
      ul
        .info-item
          padding 16px 12px
          line-height 16px
          position relative
          font-size 12px
</style>
