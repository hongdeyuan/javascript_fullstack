<template>
  <div id="app">
    <!-- 头部   :seller="seller" 父组件 给子组件 传值(通信)-->
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header/header.vue'
export default {
  name: 'App',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created () {
    this.$http.get('http://localhost:8080/static/seller.json')
      .then((res) => {
        console.log(res)
        if (res.data.errno === 0) {
          // this.seller = res.data.data
          // Object.assign合并对象
          this.seller = Object.assign({}, this.seller, res.data.data)
        }
      })
  }
}
</script>

<style lang="stylus">
@import './common/stylus/mixin.styl';
.tab
  display flex
  height 40px
  line-height 40px
  width 100%
  border-1px(rgba(7, 17, 27, 0.1))
  .tab-item
    flex 1
    text-align center
    a
      text-decoration none
      display block
      font-size 14px
      color rgb(77, 85, 93)
      &.router-link-active
        color rgb(240, 20, 20)
</style>
