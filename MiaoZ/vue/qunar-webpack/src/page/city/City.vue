<template>
  <div class="city">
    <div class="header">城市选择<a href="#/" class="router-link-active">
        <div class="iconfont header-back">&#xe600;</div>
      </a>
    </div>
    <div class="searchContainer">
      <div class="search">
        <!-- 实时 获取 input的值 @keyup.enter="search" @input="search($event)" -->
        <input type="text" placeholder="输入城市名或拼音" class="search-input" @keyup.enter="search" @input="search($event)">
      </div>
      <div class="search-content" v-show="showSearch" ref="searchScroll">
        <ul>
          <li class="search-item border-bottom" v-for="(item, index) of searchList" :key="index" @click="toHome(item.name)">{{item.name}}</li>
          <li class="search-item border-bottom" v-show="showNone">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
    <div class="g-choose">
      <div class="g-all">
        <router-link class="g-in" to="/city/in">境内</router-link>
        <router-link class="g-out" to="/city/out">境外-港澳台</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import Bus from '@/assets/bus'
export default {
  data () {
    return {
      showSearch: false,
      showNone: true,
      cities: [],
      searchList: []
    }
  },
  methods: {
    search (e) {
      // console.log(e.data)
      let _self = this
      // keyward 为查询的关键字
      let keyWard = e.data
      let cities = this.cities
      // 对数据进行模糊查询特殊处理
      _self.searchList = []
      for (let items in cities) {
        // console.log(cities[items], keyWard) ; for (let item of cities[items])
        cities[items].map(item => {
          // console.log(item.spell.indexOf('a'), keyWard)
          if (item.spell.indexOf(keyWard) !== -1 || item.name.indexOf(keyWard) !== -1) {
            _self.searchList.push(item)
          }
        })
      }
      // 判断searchList 是否插入了 数据
      if (_self.searchList.length > 0) {
        _self.showSearch = true
        _self.showNone = false
      } else {
        _self.showSearch = false
        _self.showNone = true
      }
    },
    _initScroll () {
      // 也可以使用 document.querySelector('.list') 等效于 this.$refs.searchScroll
      // 但是不推荐 document.querySelector('.list')
      this.searchScroll = new BScroll(this.$refs.searchScroll, {
        click: true
      })
    },
    toHome (cityName) {
      // console.log(cityName)
      // Bus.$emit('getCityName', cityName)
      this.$router.push({path: '/#', query: {cityName: cityName}})
    }
  },
  mounted () {
    this.$http.get('static/mock/city.json').then(res => {
      if (res.data) {
        this.cities = res.data.data.cities
        // console.log(this.cities)
        let self = this
        // 在数据渲染后 再启动滑动的特效
        this.$nextTick(() => {
          self._initScroll()
        })
      }
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylus/cariable.scss';
.header{
  position: relative;
  overflow: hidden;
  height: .86rem;
  line-height: .86rem;
  text-align: center;
  color: #fff;
  background: #00bcd4;
  font-size: .32rem;
  .router-link-active{
    outline: 0 none;
    border: none;
    color: #25a4bb;
    text-decoration: none;
    .header-back{
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }
}
.searchContainer{
  display: block;
  .search{
    height: .72rem;
    background: #00bcd4;
    padding: 0 .1rem;
    .search-input{
      outline: 0 none;
      border: none;
      width: 100%;
      box-sizing: border-box;
      height: .62rem;
      line-height: .62rem;
      padding: 0 .1rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }
  .search-content{
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background: #eee;
    ul{
      list-style: none;
      .search-item{
        line-height: .62rem;
        padding-left: .2rem;
        background: #fff;
        position: relative;
        color: #666;
        border-bottom: 1px solid #eaeaea;
        transform-origin: 0 100%;
      }
    }
  }
}
.g-choose {
  height: .8rem;
  line-height: .8rem;
  padding: 0 .1rem;
  background: $bgColor;
  color: #fff;
  margin: 0 auto;
  display: flex;
  align-items: center;
  .g-all {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    width: 100%;
    height: .36rem;
    line-height: .36rem;
    font-size: .26rem;
    text-align: center;
    border: 1px solid #fff;
    border-radius: .1rem;
    .g-in {
      width: 50%;
      background: #fff;
      color: $bgColor;
    }
    .g-out {
      width: 50%;
      color: #fff;
    }
  }
}
</style>
