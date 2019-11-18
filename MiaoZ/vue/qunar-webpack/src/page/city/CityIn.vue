<template>
  <div class="CityIn">
    <div class="list" ref="cityScoll">
      <div class="area">
        <div class="currentCitiy">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
            <div class="button-wrapper">
              <div class="button">{{currentCity}}</div>
            </div>
          </div>
        </div>
        <div class="hotCities">
          <div class="title border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-wrapper" v-for="(city, index) of hotCities" :key="index" @click="toHome(city.name)">
              <div class="button">{{city.name}}</div>
            </div>
          </div>
        </div>
        <div class="cities">
          <div class="city-character-list" v-for="(val, key) of cities" :key="key">
            <div class="title" :ref="key">{{ key }}</div>
            <div class="area-city">
              <div class="city-item border-bottom" v-for="item of val" :key="item.id" @click="toHome(item.name)">
                {{ item.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ul class="characters">
      <li class="item" v-for="item of characters" :key="item" @click="handleCharacterClick">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Bus from '@/assets/bus'
export default {
  props: {
  },
  data () {
    return {
      cities: [],
      hotCities: [],
      currentCity: '北京'
    }
  },
  methods: {
    _initScroll () {
      // 也可以使用 document.querySelector('.list') 等效于 this.$refs.cityScoll
      // 但是不推荐 document.querySelector('.list')
      this.cityScoll = new BScroll(this.$refs.cityScoll, {
        click: true
      })
    },
    handleCharacterClick (e) {
      const char = e.target.innerText
      // console.log(char, this.$refs[char])
      this.cityScoll.scrollToElement(this.$refs[char][0])
    },
    toHome (cityName) {
      // console.log(cityName)
      // Bus.$emit('getCityName', cityName)
      // this.currentCity = cityName
      this.$router.push({path: '/#', query: {cityName: cityName}})
    }
  },
  mounted () {
    Bus.$on('getCityName', (data) => {
      console.log(data)
      if (data) {
        this.currentCity = data
        console.log('getCityName', this.currentCity)
      } else {
        this.currentCity = '北京'
      }
    })

    // 代理: /api/city.json
    // 反向代理 代理的是 客户端
    this.$http.get('/api/city.json').then(res => {
      if (res.data) {
        // console.log(res.data.data.cities)
        this.cities = res.data.data.cities
        this.hotCities = res.data.data.hotCities
        this.$nextTick(() => {
          this._initScroll()
        })
      }
    })
  },
  computed: {
    characters () {
      return Object.keys(this.cities)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/stylus/cariable.scss';
.characters {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 2rem;
  bottom: 0;
  right: 0;
  width: .4rem;
  font-size: .25rem;
  font-weight: bold;
  .item {
    color: $bgColor;
    line-height: .4rem;
  }
}
.list {
  overflow: hidden;
  position: absolute;
  top: 2.22rem;
  left: 0;
  right: 0;
  bottom: 0;
  .area {
    font-family: Arial,Microsoft Yahei,Helvetica Neue,Helvetica,sans-serif;
    .title {
      height:.24rem;
      line-height: .24rem;
      font-size: .26rem;
      padding: .24rem .3rem;
      background: $homeBgColor;
    }
    .border-topbottom{
      position: relative;
      border-top: 1px solid #eaeaea;
      transform-origin: 0 0;
      border-bottom: 1px solid #eaeaea;
    }
    .button-list{
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .button-wrapper{
        float: left;
        width: 33.33%;
        .button{
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }
    .area-city {
      padding: .1rem .5rem .1rem .24rem;
      overflow: hidden;
      .location-city {
        background: $bgColor;
        color: #fff;
      }
      .city-button {
        float: left;
        height: .4rem;
        line-height: .4rem;
        font-size: .26rem;
        width:29%;
        text-align: center;
        margin: .1rem;
        border: .02rem solid #ccc;
        border-radius: .06rem;
      }
    }
    .cities {
      .city-character-list {
        .area-city {
          padding: 0;
          .city-item {
            height: .5rem;
            line-height: .5rem;
            font-size: .26rem;
            padding: .1rem .5rem .1rem .34rem;
          }
        }
      }
    }
  }
}
</style>
