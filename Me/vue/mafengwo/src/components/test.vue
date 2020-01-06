<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="home_hot_search_cities.length > 0">
      <swiper-slide v-for="item of home_hot_search_cities" :key="item.id"><span>{{item.name}}</span></swiper-slide>
      <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    </swiper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      home_hot_search_cities: [],
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
  mounted() {
    // post 加密请求
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
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 1rem
  overflow hidden
</style>