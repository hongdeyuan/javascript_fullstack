<template>
  <div class="mappage">
    <div class="section">
      <input type="text" placeholder="搜索" @input="bindInput" v-model="keywords" focus="true"/>
    </div>
    <scroll-view :scroll-y="true" class="addcont" style="height: 500rpx;">
      <div class="result" @touchstart="bindSearch(item.name)" v-for="(item, index) in tips" :key="index">
        {{item.name}}
      </div>
    </scroll-view>

    <div class="map-container">
      <div class="title">显示当前位置</div>
      <map 
        class="map"
        id="map"
        scale="16"
        :longitude="longitude"
        :latitude="latitude"
        :markers="markers"></map>
    </div>
  </div>
</template>

<script>
import amapFile from '../../utils/amap-wx.js'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      tips: [],
      longitude: 0,
      latitude: 0,
      markers: [],
      keywords: ''
    }
  },
  mounted () {
    this.getMapAddress()
  },
  
  methods: {
    ...mapMutations(['update']),
    getMapAddress() {
      let _this = this
      var myAmapFun = new amapFile.AMapWX({
        key: '7da43728fd98a67b8e08a8e4f35dacb4'
      })
      myAmapFun.getRegeo({
        iconPath: "/static/images/marker.png",
        iconWidth: 22,
        iconHeight: 32,
        success: function (data){
          let marker = [
            {
              id: data[0].id,
              longitude: data[0].longitude,
              latitude: data[0].latitude,
              name: data[0].name,
              width: data[0].width,
              height: data[0].height
            }
          ]
          _this.markers = marker
          _this.longitude = data[0].longitude
          _this.latitude = data[0].latitude
          // console.log(data)
        },
        fail: function (info) {
          // 失败回调
          console.log(info)
        }
      })
    },
    bindInput (e) {
      let _this = this
      let keywords = _this.keywords
      var myAmapFun = new amapFile.AMapWX({
        key: '7da43728fd98a67b8e08a8e4f35dacb4'
      })
      myAmapFun.getInputtips({
        keywords: keywords,
        location: '',
        success: function(data) {
          // console.log(data)
          if (data && data.tips) {
            _this.tips = data.tips
          }
        }
      })
    },
    bindSearch (cityName) {
      console.log(cityName)
      this.update({cityName: cityName})
      wx.navigateBack({
        delta: 1
      });
    }
  }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>