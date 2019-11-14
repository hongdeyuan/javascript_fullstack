<template>
  <div class="ratings" ref="ratScroll">
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
              <span class="star-item on" v-for="(item,index) in serviceStar" :key="index"></span>
              <span class="star-item off" v-for="(item,index) in (5-serviceStar)" :key="index+2"></span>
            </div>
            <span class="score">{{seller.serviceScore}}</span>
          </div>
          <div class="score-wrapper">
            <span class="title">商品评分</span>
            <div class="star star-36">
              <span class="star-item on" v-for="(item,index) in foodStar" :key="index"></span>
              <span class="star-item off" v-for="(item,index) in (5-foodStar)" :key="index+4"></span>
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
          <span class="block positive" :class="{'active' : allSelected === true}" @click="all">
            全部
            <span class="count">{{AllCount}}</span>
          </span>
          <span class="block positive" :class="{'active' : goodSelected === true}" @click="good">
            满意
            <span class="count">{{goodCount}}</span>
          </span>
          <span class="block negative" :class="{'active' : badSelected === true}" @click="bad">
            不满意
            <span class="count">{{badCount}}</span>
          </span>
        </div>
        <div class="switch">
          <span class="icon-check_circle" @click="select" :class="{'on' : selected === true}"></span>
          <span class="text">只看有内容的评价</span>
        </div>
      </div>
      <div class="rating-wrapper">
        <ul>
          <li class="rating-item" v-for="(rating, index) of currentRatings"
                :key="index">
            <div class="avatar">
              <img width="28" height="28" :src="rating.avatar" alt="">
            </div>
            <div class="content">
              <h1 class="name">{{rating.username}}</h1>
              <div class="star-wrapper">
                <div class="star star-24">
                  <span class="star-item on" v-for="(item, index) of rating.score" :key="index"></span>
                  <span class="star-item off" v-for="(item, index) of (5 - rating.score)" :key="index+8"></span>
                </div>
                <span class="delivery">30</span>
              </div>
              <p class="text">{{rating.text}}</p>
              <div class="recommend">
                <span class="icon-thumb_up"></span>
                <span class="item"  v-for="(recommend, index) of rating.recommend"
                :key="index+12">{{recommend}}</span>
              </div>
              <div class="time">{{rating.rateTime}}</div>
            </div>
          </li>
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
      ratings: [],
      currentRatings: [],
      selected: false,
      allSelected: true,
      goodSelected: false,
      badSelected: false,
      AllCount: 0,
      goodCount: 0,
      badCount: 0
    }
  },
  created () {
    let self = this
    this.$http.get('http://localhost:8080/static/ratings.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          this.ratings = res.data.data
          this.ratings.map(rating => {
            rating.rateTime = self._date(rating.rateTime)
            this.currentRatings.push(rating)
            this.AllCount++
            if (rating.rateType === 0) {
              this.goodCount++
            } else if (rating.rateType === 1) {
              this.badCount++
            }
          })
          this.$nextTick(() => {
            this._initScroll()
          })
        }
      })
  },
  methods: {
    _initScroll () {
      this.ratScroll = new BScroll(this.$refs.ratScroll, {
        click: true
      })
    },
    _date (time) {
      // 根据时间戳生成的时间对象
      var d = new Date(time)
      var date = (d.getFullYear()) + '-' +
                (d.getMonth() + 1) + '-' +
                (d.getDate()) + ' ' +
                (d.getHours()) + ':' +
                (d.getMinutes()) + ':' +
                (d.getSeconds())
      return date
    },
    select () {
      this.selected = !this.selected
      if (this.selected) {
        let nowRatings = this.currentRatings
        this.currentRatings = []
        nowRatings.map(rating => {
          if (rating.text) {
            this.currentRatings.push(rating)
          }
        })
      }
    },
    all () {
      this.currentRatings = []
      this.selected = false
      this.ratings.map(rating => {
        this.currentRatings.push(rating)
      })
      this.badSelected = false
      this.goodSelected = false
      this.allSelected = true
    },
    good () {
      this.currentRatings = []
      this.selected = false
      this.ratings.map(rating => {
        if (rating.rateType === 0) {
          this.currentRatings.push(rating)
        }
      })
      this.allSelected = false
      this.badSelected = false
      this.goodSelected = true
    },
    bad () {
      this.currentRatings = []
      this.selected = false
      this.ratings.map(rating => {
        if (rating.rateType === 1) {
          this.currentRatings.push(rating)
        }
      })
      // console.log(this.currentRatings)
      this.allSelected = false
      this.goodSelected = false
      this.badSelected = true
    }
  },
  computed: {
    serviceStar () {
      return Math.floor(this.seller.serviceScore)
    },
    foodStar () {
      return Math.floor(this.seller.foodScore)
    },
    currentRating (data) {
      let self = this
      self.currentRatings = data
      return self.currentRatings
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
          &.active
            background #00a0dc
            color #fff
        .negative
          background rgba(77,85,93,.2)
          &.active
            background #4d555d
            color #fff
      .switch
        padding 12px 18px
        line-height 24px
        border-bottom 1px solid rgba(7,17,27,.1)
        color #93999f
        font-size 0
        .icon-check_circle
          display inline-block
          vertical-align top
          margin-right 4px
          font-size 24px
          &.on
            color #00c850
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
