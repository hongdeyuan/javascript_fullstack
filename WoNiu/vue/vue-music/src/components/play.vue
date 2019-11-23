<template>
  <div class="player" v-show="playList.length > 0">
    <transition name="normal">
      <div class="normal-player">
        <div class="background">
          <img width="100%" height="100%" :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)" alt="">
        </div>
        <div class="top">
          <div class="back">
            <i class="icon">&#xe8e2;</i>
          </div>
          <h1 class="title" v-html="currentSong.name"></h1>
          <h2 class="subtitle" v-html="(currentSong.ar && currentSong.ar[0].name) || (currentSong.artists && currentSong.artists[0].name)"></h2>
        </div>
        <div class="middle">
          <div class="middle-l">
            <div class="cd-wrapper" ref="cdWrapper">
              <div class="cd" ref="imageWrapper">
                <img
                  ref="image"
                  :class="cdCls"
                  class="image"
                  :src="(currentSong.al && currentSong.al.picUrl) || (currentSong.artists && currentSong.artists[0].img1v1Url)"
                >
              </div>
            </div>
              <div class="playing-lyric-wrapper">
                <div class="playing-lyric">我i地点</div>
              </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- 播放器 -->
    <audio 
      ref="audio"
      @playing="ready"
      @error="error"
      @timeupdate="updateTime"
      @ended="end"
      @pause="paused"
      ></audio>
  </div>
</template>

<script>
import { playerMixin } from '@/common/mixin'
import api from '@/api'
export default {
  data () {
    return {
      playing: false
    }
  },
  mixins: [playerMixin],
  computed: {
    cdCls () {
      return this.playing ? 'play' : ''
    }
  },
  methods: {
    ready () {},
    error () {},
    updateTime () {},
    end () {},
    paused () {}
  },
  watch: {
    // async: 解决异步问题
    async currentSong (newSong, oldSong) {
      if (!newSong.id || newSong.id === oldSong.id) {
        return
      }
      if (!newSong.url) {
        // alert('请求音乐出错！')
        const {data, code} = await api.MusicUrl(newSong.id)
        console.log(data)
        if (data && data[0].code === 200) {
          newSong = {...newSong, url: data[0].url}
        } else {
          alert('音乐请求出错！')
        }
      }
      this.$refs.audio.src = newSong.url
      this.$refs.audio.play()
      this.playing = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import "../assets/css/function"
.player
  z-index 150
  .normal-player
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    z-index 150
    background rgb(8, 5, 58)
    .background
      position absolute
      left 0
      top 0
      width 100%
      height 100%
      z-index -1
      opacity 0.6
      filter blur(20px)

    .top
      position relative
      margin-bottom 25px
      .back
        position absolute
        top 0
        left px2rem(12px)
        z-index 50
        .icon
          display block
          height px2rem(100px)
          line-height px2rem(100px)
          padding 0 px2rem(30px)
          font-size 22px


      .title
        width 70%
        margin 0 auto
        line-height px2rem(100px)
        text-align center
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 18px
        color #fff

      .subtitle
        line-height px2rem(40px)
        text-align center
        font-size 14px
        color #fff


    .middle
      position fixed
      width 100%
      top px2rem(180px)
      bottom px2rem(340px)
      white-space nowrap
      font-size 0
      .middle-l
        display inline-block
        vertical-align top
        position relative
        width 100%
        height 0
        padding-top 80%
        .cd-wrapper
          position absolute
          left 10%
          top 0
          width 80%
          box-sizing border-box
          height 100%
          .cd
            width 100%
            height 100%
            border-radius 50%
            .image
              position absolute
              left 0
              top 0
              width 100%
              height 100%
              box-sizing border-box
              border-radius 50%
              border 10px solid rgba(255, 255, 255, 0.1)
            .play
              animation rotate 20s linear infinite
        .playing-lyric-wrapper
          width 80%
          margin 30px auto 0 auto
          overflow hidden
          text-align center
          .playing-lyric
            height px2rem(40px)
            line-height px2rem(40px)
            font-size 14px
            color hsla(0, 0%, 100%, 0.5)
      .middle-r
        display inline-block
        vertical-align top
        width 100%
        height 100%
        overflow hidden
        .lyric-wrapper
          width 80%
          margin 0 auto
          overflow hidden
          text-align center
          .text
            line-height px2rem(64px)
            color hsla(0, 0%, 100%, 0.5)
            font-size 14px
            &.current
              color #fff
          .pure-music
            padding-top 50%
            line-height px2rem(64px)
            color hsla(0, 0%, 100%, 0.5)
            font-size 14px
    .bottom
      position absolute
      bottom px2rem(200px)
      width 100%
      .dot-wrapper
        text-align center
        font-size 0
        .dot
          display inline-block
          vertical-align middle
          margin 0 px2rem(8px)
          width px2rem(16px)
          height px2rem(16px)
          border-radius 50%
          background hsla(0, 0%, 100%, 0.5)
          &.active
            width px2rem(40px)
            border-radius px2rem(10px)
            background hsla(0, 0%, 100%, 0.8)
      .progress-wrapper
        display flex
        justify-content space-between
        align-items center
        width 80%
        margin 0px auto
        padding 10px 0
        .time
          color #fff
          font-size 12px
          flex 0 0 30px
          line-height px2rem(60px)
          width px2rem(60px)
          &.time-l
            text-align left

          &.time-r
            text-align right
        .progress-bar-wrapper
          // width
          position absolute
          left 0
          right 0
          top 0
      .operators-box
        width px2rem(1200px)
        height px2rem(1200px)
        position absolute
        top px2rem(80px)
        left 50%
        transform translate3d(-50%, 0, 0)
        overflow hidden
        z-index -1
        &after
          content ''
          width 100%
          height 100%
          background #ea2448
          position absolute
          clip rect(0 px2rem(600px) px2rem(1200px) 0)
          transform rotate(90deg)
          border-radius 50%
      .operators
        position absolute
        top px2rem(70px)
        display flex
        width px2rem(660px)
        height px2rem(132px)
        margin-left 50%
        transform translate3d(-50%, 0, 0)
        align-items center
        z-index 100
        .icon-box
          flex 1
          height 100%
          display flex
          justify-content center
          align-items center
          &.disable
            color #222
          i
            font-size 26px
        .i-left
          text-align right
        .i-center
          margin 0 px2rem(20px)
          > div
            width px2rem(120px)
            height px2rem(120px)
            display flex
            align-items center
            justify-content center
            border-radius 50%
            background #fff
            .icon
              margin-top px2rem(4px)
              font-size 30px
              display inline-block
              color #4436b1
              &.icon-pause
                margin px2rem(10px) 0 0 px2rem(10px)
        .i-right
          text-align left
    &.normal-enter-active,
    &.normal-leave-active
      transition all 0.4s
      .top,
      .bottom
        transition all 0.4s cubic-bezier(0.86, 0.18, 0.82, 1.32)
    &.normal-enter,
    &.normal-leave-to
      opacity 0
      .top
        transform translate3d(0, -100px, 0)
      .bottom
        transform translate3d(0, 100px, 0)
  .mini-player
    display flex
    align-items center
    position fixed
    left 0
    bottom px2rem(5px)
    z-index 180
    width 100%
    height px2rem(105px)
    background #ea2448
    &.mini-enter-active,
    &.mini-leave-active
      transition all 0.4s
    &.mini-enter,
    &.mini-leave-to
      opacity 0
    .picture
      flex 0 0 px2rem(80px)
      width px2rem(80px)
      height px2rem(80px)
      padding 0 px2rem(20px) 0 px2rem(40px)
      .imgWrapper
        height 100%
        width 100%
        img
          border-radius 50%
          &.play
            animation rotate 10s linear infinite

          &.pause
            animation-play-state paused
    .text
      display flex
      flex-direction column
      justify-content center
      flex 1
      line-height px2rem(40px)
      overflow hidden
      .name
        margin-bottom 2px
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 14px
        color #fff
      .desc
        text-overflow ellipsis
        overflow hidden
        white-space nowrap
        font-size 12px
        color hsla(0, 0%, 100%, 0.3)
    .control
      flex 0 0 px2rem(60px)
      width px2rem(60px)
      text-align center
      padding 0 px2rem(20px)
      .icon
        font-size 30px
        color #fff
    .bottom-progress-bar
      position fixed
      left 0
      right 0
      bottom 0
      height px2rem(6px)
      background #fe7498
      .bottom-progress
        height 100%
        background linear-gradient(#902541, #902444)
@keyframes rotate
  0%
    transform rotate(0)

  100%
    transform rotate(360deg)
</style>
