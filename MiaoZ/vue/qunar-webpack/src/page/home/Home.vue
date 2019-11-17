<template>
  <div class="home-page">
    <v-header></v-header>
    <div class="scroll" ref="homeScroll">
      <div>
        <v-swiper :list="swiperList"></v-swiper>
        <div class="icons">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(lists, index) of iconsList" :key="index">
              <div class="icon" v-for="item of lists" :key="item.id">
                <div class="icon-img">
                  <img
                    :src="item.imgUrl"
                    class="icon-img-content"
                  />
                </div>
                <p class="icon-desc">{{item.title}}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
        <div class="hotSell">
          <div class="title">热销推荐</div>
          <ul>
            <li class="item border-bottom" v-for="(weekend, index) in weekendList" :key="index">
              <img :src="weekend.imgUrl" class="item-img" alt="">
              <div class="item-info">
                <p class="item-title">{{weekend.title}}</p>
                <p class="item-desc">{{weekend.desc}}</p>
                <button class="item-button" @click="detail(weekend.id)">查看详情</button>
              </div>
            </li>
          </ul>
        </div>
        <div class="weekend">
          <div class="title">周末去哪儿</div>
          <ul>
            <li class="item border-bottom" v-for="(weekend, index) in weekendList" :key="index">
              <div class="item-img-wrapper">
                <img :src="weekend.imgUrl" class="item-img" alt="">
              </div>
              <div class="item-info">
                <p class="item-title">{{weekend.title}}</p>
                <p class="item-desc">{{weekend.desc}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Swiper from './Swiper'
import BScroll from 'better-scroll'
export default {
  data () {
    return {
      swiperList: [],
      iconList: [],
      iconsList: [],
      swiperOption: {
        loop: false,
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: false
      },
      weekendList: []
    }
  },
  components: {
    'v-header': Header,
    'v-swiper': Swiper
  },
  methods: {
    _initScroll () {
      // 也可以使用 document.querySelector('.list') 等效于 this.$refs.cityScoll
      // 但是不推荐 document.querySelector('.list')
      this.homeScroll = new BScroll(this.$refs.homeScroll, {
        click: true
      })
    },
    detail (id) {
      console.log('id:', id)
      this.$router.push({path: '/detail', query: {id: id}})
    }
  },
  mounted () {
    this.$http.get('static/mock/index.json').then(res => {
      if (res.data) {
        this.swiperList = res.data.data.swiperList
        this.iconList = res.data.data.iconList
        this.weekendList = res.data.data.weekendList
        let self = this
        let n = 0

        // 对iconList 数据进行特殊处理
        while (n < self.iconList.length) {
          if (n + 8 < self.iconList.length) {
            self.iconsList.push(self.iconList.slice(n, n + 8))
            n += 8
          } else {
            self.iconsList.push(self.iconList.slice(n, self.iconList.length))
            n += 8
          }
        }

        // 在数据渲染后 再启动滑动的特效
        this.$nextTick(() => {
          self._initScroll()
        })
      }
    })
  }
}
</script>

<style lang='scss'>
@import '../../assets/stylus/cariable.scss';
.home-page {
  background: $homeBgColor;
  .scroll{
    overflow: hidden;
    position: absolute;
    top: 44px;
    left: 0;
    right: 0;
    bottom: 0;
    .icons {
      margin-top: 0.1rem;
      .icon{
        width: 25%;
        float: left;
        padding-bottom: 25%;
        position: relative;
        overflow: hidden;
        height: 0;
        .icon-img{
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: .44rem;
          box-sizing: border-box;
          padding: .1rem;
          .icon-img-content{
            display: block;
            margin: 0 auto;
            height: 100%;
          }
        }
        .icon-desc{
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: .44rem;
          line-height: .44rem;
          text-align: center;
          color: #333;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
    .hotSell{
      display: block;
      .title{
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
        margin-top: .2rem;
      }
      ul{
        list-style: none;
        .item{
          display: flex;
          height: 1.9rem;
          overflow: hidden;
          position: relative;
          text-align: -webkit-match-parent;
          .item-img{
            width: 1.7rem;
            height: 1.7rem;
            padding: .1rem;
            vertical-align: middle;
            border: 0;
          }
          .item-info{
            flex: 1;
            padding: .1rem;
            min-width: 0;
            p{
              margin: 0;
              padding: 0;
              display: block;
            }
            .item-title{
              line-height: .54rem;
              font-size: .32rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .item-desc{
              line-height: .4rem;
              color: #ccc;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            button{
              outline: 0 none;
              border: none;
            }
            .item-button{
              line-height: .44rem;
              margin-top: .16rem;
              background: #ff9300;
              padding: 0 .1rem;
              border-radius: .06rem;
              color: #fff;
            }
          }
        }
      }
    }
    .weekend{
      display: block;
      .title{
        line-height: .8rem;
        background: #eee;
        text-indent: .2rem;
      }
      ul{
        list-style: none;
        .item{
          position: relative;
          .item-img-wrapper{
            overflow: hidden;
            height: 0;
            padding-bottom: 39.09%;
            img{
              vertical-align: middle;
            }
            .item-img{
              width: 100%;
            }
          }
          .item-info{
            padding: .1rem;
            .item-title{
              line-height: .54rem;
              font-size: .32rem;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
            .item-desc{
              line-height: .4rem;
              color: #ccc;
              overflow: hidden;
              white-space: nowrap;
              text-overflow: ellipsis;
            }
          }
        }
      }
    }
  }
}
</style>
