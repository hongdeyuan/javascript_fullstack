<template>
  <div class="ratings">
    <div class="ratings-content">
      <div class="overview">
        <div class="overview-left">
          <h1 class="score">{{seller.score}}</h1>
          <div class="title">综合评分</div>
          <div class="rank">高于周边商家{{seller.rankRate}}%</div>
        </div>
        <div class="overview-right">
          <div class="score-wrapper">
            <span class="title">服务态度</span>
            <div class="star star-36">
              <span class="star-item on" v-for="(item, index) of serviceStar" :key="index"></span>
              <span class="star-item off" v-for="(item, index) of (5-serviceStar)" :key="index"></span>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star star-36">
              <span class="star-item on" v-for="(item, index) of foodStar" :key="index"></span>
              <span class="star-item off"></span>
            </div>
            <span class="score">{{seller.foodScore}}</span>
          </div>
          <div class="delivery-wrapper">
            <span class="title">送达时间</span>
            <span class="delivery">{{seller.deliveryTime}}分钟</span>
          </div>
        </div>
      </div>
      <div class="split"></div>
      <div class="ratingselect">
        <div class="rating-type border-1px">
          <span class="block positive active">
            全部
            <span class="count">24</span>
          </span>
          <span class="block positive">
            满意
            <span class="count">18</span>
          </span>
          <span class="block negative">
            不满意
            <span class="count">6</span>
          </span>
        </div>
        <div class="switch">
          <span class="icon-check_circle"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item">
            <div class="avatar">
              <img width="28" height="28" src="http://static.galileo.xiaojukeji.com/static/tms/default_header.png" alt="">
            </div>
            <div class="content">
              <h1 class="name">3******c</h1>
              <div class="star-wrapper">
                <div class="star star-24">
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                  <span class="star-item on"></span>
                </div>
                <span class="delivery">30</span>
              </div>
              <p class="text">不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span class="item">南瓜粥</span>
                <span class="item">皮蛋瘦肉粥</span>
                <span class="item">扁豆焖面</span>
                <span class="item">娃娃菜炖豆腐</span>
                <span class="item">牛肉馅饼</span>
              </div>
              <div class="time">2016-07-23 21:52</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    seller: {
      type: Object
    }
  },
  computed: {
    serviceStar () {
      return Math.floor(this.seller.serviceScore)
    },
    foodStar () {
      return Math.floor(this.seller.foodScore)
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../common/stylus/mixin.styl'
.ratings
  position absolute
  top 174px
  bottom 0
  left 0
  width 100%
  overflow hidden
  .ratings-content
    transition-timing-function cubic-bezier(0.165, 0.84, 0.44, 1)
    transition-duration 0ms
    transform translate(0px, 0px) translateZ(0px)
    .overview
      display -webkit-box
      display -ms-flexbox
      display flex
      padding 18px 0
      .overview-left
        -webkit-box-flex 0
        -ms-flex 0 0 137px
        flex 0 0 137px
        padding 6px 0
        width 137px
        border-right 1px solid rgba(7,17,27,.1)
        text-align center
        .score
          margin-bottom 6px
          line-height 28px
          font-size 24px
          color #f90
        .title
          margin-bottom 8px
          line-height 12px
          font-size 12px
          color #07111b
        .rank
          line-height 10px
          font-size 10px
          color #93999f
      .overview-right
        -webkit-box-flex 1
        -ms-flex 1
        flex 1
        padding 6px 0 6px 24px
        .score-wrapper
          margin-bottom 8px
          font-size 0
          .title
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #07111b
          .star
            display inline-block
            margin 0 12px
            vertical-align top
            .star-item
              display inline-block
              background-repeat no-repeat
              width 15px
              height 15px
              margin-right 6px
              background-size 15px 15px
            .on
              background-image: url('star_on.png')
            .off
              background-image: url('star_off.png')
          .score
            display inline-block
            line-height 18px
            vertical-align top
            font-size 12px
            color #f90
        .delivery-wrapper
          font-size 0
          .title
            line-height 18px
            font-size 12px
            color #07111b
          .delivery
            margin-left 12px
            font-size 12px
            color #93999f
    .split
      width 100%
      height 16px
      border-top 1px solid rgba(7,17,27,.1)
      border-bottom 1px solid rgba(7,17,27,.1)
      background #f3f5f7
    .ratingselect
      .rating-type
        padding 18px 0
        margin 0 18px
        position relative
        font-size 0
        border-1px(rgba(7, 17, 27, 0.1))
        .block
          display inline-block
          padding 8px 12px
          margin-right 8px
          line-height 16px
          border-radius 1px
          font-size 12px
          color #4d555d
        .positive
          background rgba(0,160,220,.2)
        .active
          background #00a0dc
        .negative
          background rgba(77,85,93,.2)
      .switch
        padding 12px 18px
        line-height 24px
        border-bottom 1px solid rgba(7,17,27,.1)
        color #93999f
        font-size: 0
        .icon-check_circle
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
        .text
          display inline-block
          vertical-align top
          font-size 12px
    .rating-wrapper
      padding 0 18px
      li
        list-style none
      .rating-item
        display flex
        padding 18px 0
        position relative
        .avatar
          -webkit-box-flex 0
          -ms-flex 0 0 28px
          flex 0 0 28px
          width 28px
          margin-right 12px
          img
            border-radius 50%
        .content
          position relative
          -webkit-box-flex 1
          -ms-flex 1
          flex 1
          .name
            margin-bottom 4px
            line-height 12px
            font-size 10px
            color #07111b
          .star-wrapper
            margin-bottom 6px
            font-size 0
            .star
              display inline-block
              vertical-align top
              margin-right 6px
              .star-item
                display inline-block
                background-repeat no-repeat
                width 10px
                height 10px
                margin-right 3px
                background-size 10px 10px
                &:last-child
                  margin-right 0
              .on
                background-image url('star_on.png')
              .off
                background-image url('star_off.png')
            .delivery
              display inline-block
              vertical-align top
              line-height 12px
              font-size 10px
              color #93999f
          .text
            font-size 12px
            margin-bottom 8px
            line-height 18px
            color #07111b
          .recommend
            line-height 16px
            font-size 0
            .icon-thumb_up
              color #00a0dc
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
            .item
              display inline-block
              margin 0 8px 4px 0
              font-size 9px
              padding 0 6px
              border 1px solid rgba(7,17,27,.1)
              border-radius 1px
              color #93999f
              background #fff
          .time
            position absolute
            top 0
            right 0
            line-height 12px
            font-size 10px
            color #93999f
</style>
