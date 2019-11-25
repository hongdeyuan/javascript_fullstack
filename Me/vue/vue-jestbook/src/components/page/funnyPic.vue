<template>
  <div class="imgPic">
    <div class="content-wrapper">
      <v-scroll
        class="content-scroll"
        ref="contentScroll"
        :listenScroll="listenScroll"
        :data="result"
        :beforeScroll="beforeScroll"
        @scrol="searchMore">
        <ul class="content-article-list">
          <!-- loading -->
          <v-load class="loading-wrapper" v-show="display"></v-load>
          <li class="article-summary" v-for="(article, index) in result" :key="index">
            <h3 class="article-title">{{article.content}}</h3>
            <div class="article-author">来源：{{article.hashId}}</div>
            <img :src="article.url" alt="" class="pic">
            <!-- 尾部组件：用于点赞、分享、踩 -->
          </li>
        </ul>
      </v-scroll>
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
const limit = 20
export default {
  name: 'FunnyPic',
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
    _getNewImg () {
      const params = {
        key: '991792145f62460bac35b1c92ee50cdb',
        page: this.page,
        rows: 20
      }
      api.NewImg(params)
      .then((res) => {
        // console.log(res)
        if (res.error_code === 0) {
          this.result = [...res.result, ...this.result]
          this.display = false
          // this._checkMore(res.result)
          console.log(this.result)
        }
      })
    },
    _checkMore (data) {
      if (data.length < 10) {
        this.display = false
      }
    },
    searchMore () {
      this.display = true
      this.page++
      this._getNewImg()
    }
  },
  mounted () {
    this._getNewImg()
    setTimeout(() => {
      this.show = false
    }, 1500)
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function'
.content-wrapper
  position fixed
  top 0
  bottom 60px
  width 100%
  .content-scroll
    height 100%
    overflow hidden
    .content-article-list
      position relative
      box-sizing border-box
      padding px2rem(10px) px2rem(20px) px2rem(30px) px2rem(20px)
      .article-summary
        position: relative
        zoom: 1
        padding: px2rem(30px) px2rem(40px) px2rem(40px) px2rem(30px)
        margin: px2rem(40px) 0 0
        box-shadow 0 0 px2rem(20px) #000
        .article-title
          font-size px2rem(36px)
          font-weight 800
        .article-author
          font-size px2rem(24px)
          margin-top px2rem(30px)
          color #696969
        .pic
          margin-top px2rem(30px)
          width 100%
</style>
