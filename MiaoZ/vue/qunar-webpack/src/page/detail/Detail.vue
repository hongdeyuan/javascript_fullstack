<template>
  <div class="detail">
    <div>
      <div class="banner" @click="showImg">
        <img
          :src="firstImg"
          class="banner-img"
        />
        <div class="banner-info">
          <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe617;</span>
            {{gallaryImgs.length}}
          </div>
        </div>
      </div>
      <div class="container" v-show="show">
        <div class="wrapper" @click="showImg">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(gallary, index) of gallaryImgs" :key="index">
              <img :src="gallary" alt="" class="gallary-img">
            </swiper-slide>
            <div class="swiper-pagination swiper-pagination-fraction" slot="pagination">
              <span class="swiper-pagination-current">1</span>
              "/"
              <span class="swiper-pagination-total">{{gallaryImgs.length}}</span>
            </div>
          </swiper>
        </div>
      </div>
    </div>
    <div>
      <div class="header-abs router-link-active">
        <a href="#/" class="home">
          <div class="iconfont header-abs-back">&#xe600;</div>
        </a>
      </div>
    </div>
    <div class="content">
      <van-tree-select
        :items="items"
        :active-id.sync="activeIds"
        :main-active-index.sync="activeIndex"
        :height = "133"
        @click-item="clickItem"
      />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [],
      details: [],
      detail: [],
      activeIds: [1, 2],
      activeIndex: 0,
      swiperOption: {
        loop: false,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: false,
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
          clickable: true
        }
      },
      gallaryImgs: [],
      firstImg: null,
      show: false
    }
  },
  mounted () {
    this.$http.get('static/mock/detail.json').then(res => {
      if (res.data) {
        // console.log(res.data.data)
        // console.log('id : ', this.$route.query.id)
        this.details = res.data.data
        this.details.map(item => {
          if (item.id === this.$route.query.id) {
            this.detail = item
            this.gallaryImgs = item.gallaryImgs
            this.firstImg = item.gallaryImgs[0]
            this.items = item.priceType
            // console.log(this.items, this.gallaryImgs)
          }
        })
        // 在数据渲染后 再启动滑动的特效
        // this.$nextTick(() => {
        //   self._initScroll()
        // })
      }
    })
  },
  methods: {
    showImg () {
      this.show = !this.show
    },
    clickItem (e) {
      console.log(e)
    }
  }
}
</script>

<style lang="scss">
.detail{
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%;
      vertical-align: middle;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top,transparent,rgba(0,0,0,.8));
      .banner-title{
        font-size: .32rem;
        padding: 0 .2rem;
        -ms-flex: 1;
        flex: 1;
      }
      .banner-number{
        line-height: .32rem;
        height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.7);
        font-size: .24rem;
        .banner-icon{
          font-size: .24rem;
        }
      }
    }
  }
  .container{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper{
      width: 100%;
      height: 0;
      padding-bottom: 100%;
      .gallary-img{
        width: 100%;
        vertical-align: middle;
        border: 0;
      }
      .swiper-pagination{
        color: #fff;
        text-align: center;
      }
    }
  }
  .header-abs{
    position: absolute;
    left: .2rem;
    top: .2rem;
    width: .8rem;
    height: .8rem;
    border-radius: .4rem;
    background: rgba(0,0,0,.8);
    text-align: center;
    line-height: .8rem;
    .home{
      display: block;
      width: 40px;
      height: 40px;
      .header-abs-back{
        color: #fff;
        font-size: .4rem;
        &:hover{
          cursor: pointer;
        }
      }
    }
  }
  .van-tree-select{
    height: 180px;
  }
}

</style>
