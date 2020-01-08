<template>
  <div class="home">
    <div class="home_waper">
      <div class="home_search">
        <van-button round class="search">
          <swiper :options="swiperOption" v-if="home_hot_search_cities.length > 0">
            <swiper-slide v-for="item of home_hot_search_cities" :key="item.id">
              <i class="icon isearch">&#xe64d;</i>
              <span style="display: inline-block; width: 6.5rem" @click="go_search">{{item.name}}</span>
            </swiper-slide>
            <!-- <div class="swiper-pagination" slot="pagination"></div> -->
          </swiper>
        </van-button>
        <i class="icon imessage">&#xe615;</i>
      </div>
      <div class="home_applications" ref="wraper">
        <ul class="applicationScroll" ref="applicationScroll">
          <li class="icon" v-for="item of home_application_list" :key="item.id">
            <div class="icon-img">
              <img
                :src="item.icon"
                class="icon-img-content"
                />
            </div>
            <p class="icon-desc">{{item.name}}</p>
          </li>
        </ul>
      </div>
      <div class="home_content"></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      home_hot_search_cities: [],
      home_application_list: [],
      home_menus_list: [],
      swiperOption: {
        direction: 'vertical',
        loop: true,
        height: 25,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  methods: {
    go_search (e) {
      console.log(e)
      this.$toast('去搜索')
    },
    _initScroll () {
      let self = this
      let width = this.home_application_list.length * 2// 动态计算出滚动区域的大小，前面已经说过了，产生滚动的原因是滚动区域宽度大于父盒子宽度
      this.$refs.applicationScroll.style.width = width + 'rem'  // 修改滚动区域的宽度
      self.wraper = new BScroll(self.$refs.wraper, {
        click: true,
        probeType: 3,
        scrollX: true,
        scrollY: false
      })
    }
  },
  mounted() {
    // 获取热门搜索列表
    this.$http({
      method: 'post',
      url: 'http://localhost:3000/home/homeHotCities',
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        // 本地存储数据
        this.home_hot_search_cities = res.data.data
        sessionStorage.setItem('home_hot_search_cities', JSON.stringify(res.data.data))
      }
    }).catch((err) =>{
      console.log(err)
    })
    // 获取应用列表
    this.$http({
      method: 'post',
      url: 'http://localhost:3000/home/applications',
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        // 本地存储数据
        this.home_application_list = res.data.data
        sessionStorage.setItem('home_application_list', JSON.stringify(res.data.data))
        this.$nextTick(() => { // 使用 this.$nextTick 为了确保组件已经渲染完毕
          this._initScroll()
        })
      }
    }).catch((err) =>{
      console.log(err)
    })

    // 获取菜单列表
    this.$http({
      method: 'post',
      url: 'http://localhost:3000/home/menus',
    }).then((res) => {
      console.log(res)
      if (res.data.code === 200) {
        // 本地存储数据
        this.home_menus_list = res.data.data
        sessionStorage.setItem('home_menus_list', JSON.stringify(res.data.data))
      }
    }).catch((err) =>{
      console.log(err)
    })
  }
}
</script>

<style lang="stylus" scoped>
.home
  position relative
  width 100%
  height 100%
  background-color #fff
  .home_waper
    margin auto
    width 95%
    height 100%
    .home_search
      position relative
      width 100%
      height 1rem
      margin-top 0.08rem
      .search
        width 88%
        height 0.96rem
        line-height 0.96rem
        position absolute
        top 0.08rem
        left 0
        border none
        background-color rgba(200, 200, 200, .3)
        .isearch
          vertical-align middle
        .van-button__text
          text-align left
          width 100%
          font-size 0.38rem
          display inline-block
          left 0
          color gray
          overflow hidden
          height 0.84rem
          vertical-align middle
      .imessage
        display inline-block
        position absolute
        color black
        right 0
        top 0.24rem
    .home_applications
      position relative
      box-sizing border-box
      overflow hidden
      padding-bottom 0.4rem
      width 100%
      .applicationScroll
        list-style none
        overflow hidden
        white-space nowrap
        .icon
          width 2rem
          height 2rem
          padding-top 0.4rem
          position relative
          display inline-block
          box-sizing border-box
          .icon-img
            width 2rem
            height 1.4rem
            .icon-img-content
              margin auto
              width 1.2rem
              height 1.4rem
          .icon-desc
            width 2rem
            height 0.6rem
            padding-top 0.2rem
            font-size 0.36rem
</style>