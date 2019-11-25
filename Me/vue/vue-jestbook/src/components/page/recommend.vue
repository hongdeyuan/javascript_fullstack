<template>
  <div class="recommend">
    <!-- headerTab -->
    <div class="hotRecommend">
      <div class="title">头条推荐</div>
      <div class="content-wrapper">
        <v-scroll
          class="content-scroll"
          ref="contentScroll"
          :listenScroll="listenScroll"
          :data="result"
          :beforeScroll="beforeScroll"
          @scrol="searchMore">
            <ul>
              <!-- loading -->
              <v-load class="loading-wrapper" v-show="display"></v-load>
              <li class="item border-bottom" v-for="(headline, index) in result" :key="index">
                <img :src="headline.thumbnail_pic_s" class="item-img" alt />
                <div class="item-info">
                  <p class="item-title">{{headline.title}}</p>
                  <p class="item-desc">{{headline.author_name}}</p>
                  <button class="item-button" @click="detail(headline.url)">查看详情</button>
                  <div class="item-time">{{headline.date}}</div>
                </div>
              </li>
            </ul>
        </v-scroll>
      </div>
    </div>
    <!-- loading -->
    <v-loading v-show="show"></v-loading>
  </div>
</template>

<script>
import scroll from  '@/components/scroll'
import api from '@/api'
import load from '@/components/load'
import loading from  '@/components/loading'
export default {
  name: "Recommend",
  components: {
    'v-scroll': scroll,
    'v-load': load,
    'v-loading': loading
  },
  data () {
    return {
      result: [],
      page: 1,
      display: true,
      listenScroll: true,
      beforeScroll: true,
      show: true
    }
  },
  methods: {
    detail (url) {
      // console.log('id:', id)
      // this.$router.push({path: '/detail', query: {id: key}})
      window.location.href = url
    },
    _getHeadLine () {
      const params = {
        key: 'bd82a95dbaf0495098348409722c8573',
        type: 'top'
      }
      api.HeadLine(params)
      .then((res) => {
        console.log(res.result.data)
        if (res.error_code === 0) {
          this.result = res.result.data
          this.display = false
        }
      })
    },
    searchMore () {
      this.display = true
      this._getHeadLine()
    }
  },
  mounted () {
    this._getHeadLine()
    setTimeout(() => {
      this.show = false
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.hotRecommend
  display block
  .title
    line-height px2rem(80px)
    background #eee
    text-indent px2rem(20px)
  .content-wrapper
    position fixed
    top 34px
    bottom 60px
    width 100%
    .content-scroll
      height 100%
      overflow hidden
      ul
        list-style none
        .item
          display flex
          height px2rem(300px)
          box-sizing border-box
          padding px2rem(40px) px2rem(40px)
          overflow hidden
          position relative
          text-align -webkit-match-parent
          .item-img
            width px2rem(240px)
            height px2rem(240px)
            padding px2rem(10px)
            vertical-align middle
            border 0
          .item-info
            flex 1
            padding px2rem(10px)
            min-width 0
            p
              margin 0
              padding 0
              display block
            .item-title
              line-height px2rem(64px)
              font-size px2rem(36px)
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .item-desc
              line-height px2rem(32px)
              margin-top px2rem(40px)
              color #ccc
              font-size px2rem(32px)
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            button
              outline 0 none
              border none
            .item-button
              line-height px2rem(36px)
              margin-top px2rem(40px)
              background #ff9300
              padding 0 px2rem(10px)
              vertical-align bottom
              border-radius px2rem(20px)
              color #fff
            .item-time
              line-height px2rem(32px)
              margin-top px2rem(40px)
              display inline-block
              vertical-align bottom
              margin-left px2rem(50px)
              color #ccc
              font-size px2rem(32px)
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
</style>