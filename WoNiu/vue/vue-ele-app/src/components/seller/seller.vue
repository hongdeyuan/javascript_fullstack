<template>
  <div class="seller">
    <div class="seller-content">
      <div class="overview">
        <h1 class="title">粥品香坊（回龙观）</h1>
        <div class="desc border-1px">
          <div class="star star-36">
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item on"></span>
            <span class="star-item off"></span>
          </div>
          <span class="text">(24)</span>
          <span class="text">月售90单</span>
        </div>
        <ul class="remark">
          <li class="block">
            <h2>起送价</h2>
            <div class="content">
              <span class="stress">20</span>元
            </div>
          </li>
          <li class="block">
            <h2>商家配送</h2>
            <div class="content">
              <span class="stress">4</span>元
            </div>
          </li>
          <li class="block">
            <h2>平均配送时间</h2>
            <div class="content">
              <span class="stress">38</span>分钟
            </div>
          </li>
        </ul>
        <div class="favorite">
          <span class="icon-favorite active"></span>
          <span class="text">收藏</span>
        </div>
      </div>
      <div class="split"></div>
      <div class="bulletin">
        <h1 class="title">公告与活动</h1>
        <div class="content-wrapper border-1px">
          <p
            class="content"
          >粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
        </div>
        <ul class="supports">
          <li class="support-item border-1px">
            <span class="icon decrease"></span>
            <span class="text">在线支付满28减5</span>
          </li>
          <li class="support-item border-1px">
            <span class="icon discount"></span>
            <span class="text">VC无限橙果汁全场8折</span>
          </li>
          <li class="support-item border-1px">
            <span class="icon special"></span>
            <span class="text">单人精彩套餐</span>
          </li>
          <li class="support-item border-1px">
            <span class="icon invoice"></span>
            <span class="text">该商家支持发票,请下单写好发票抬头</span>
          </li>
          <li class="support-item border-1px">
            <span class="icon guarantee"></span>
            <span class="text">已加入“外卖保”计划,食品安全保障</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {

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
    transition-timing-function cubic-bezier(0.165, 0.84, 0.44, 1)
    transition-duration 0ms
    transform translate(0px, 0px) translateZ(0px)
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
          .text
            line-height 16px
            font-size 12px
            color #07111b
</style>
