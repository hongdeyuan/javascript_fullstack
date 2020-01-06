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
      <div class="home_applications">
        <div class="icon" v-for="item of home_application_list" :key="item.id">
          <div class="icon-img">
            <img
              :src="item.icon"
              class="icon-img-content"
              />
          </div>
          <p class="icon-desc">{{item.name}}</p>
        </div>
      </div>
      <div class="home_content"></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home_hot_search_cities: [],
      home_application_list: [],
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
</style>