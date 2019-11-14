<template>
  <div class="home-page">
    <v-header></v-header>
    <v-swiper :list="swiperList"></v-swiper>
  </div>
</template>

<script>
import Header from './Header'
import Swiper from './Swiper'
export default {
  data () {
    return {
      swiperList: []
    }
  },
  components: {
    'v-header': Header,
    'v-swiper': Swiper
  },
  mounted () {
    this.$http.get('static/mock/index.json').then(res => {
      if (res.data) {
        this.swiperList = res.data.data.swiperList
        // console.log(this.swiperList)
      }
    })
  }
}
</script>

<style lang="scss">
@import '../../assets/stylus/cariable.scss';
.home-page {
  background: $homeBgColor
}
</style>
