<template>
  <div class="contaner">
    <div class="bg"></div>
    <div class="address">
      <span class="change-city" @click="changeCity">切换城市</span>
      <p style="height: 21px">{{localTime}}</p>
      <div class="city-info">
        <dl>
          <dt class="font18">{{cityData.city}}</dt>
        </dl>
        <dl>
          <dt>{{cityData.weather}}</dt>
        </dl>
        <dl>
          <dt class="font45">{{cityData.temperature}}℃</dt>
        </dl>
        <dl>
          <dt>风力：{{cityData.windPower}} | 风向：{{cityData.windDirection}} | 空气湿度：{{cityData.humidity}}%</dt>
        </dl>
      </div>
    </div>
    <div class="feature">
      <div class="group" v-if="futureTem && futureTem[1]">
        明日：
        <span
          class="tm"
        >白天:{{futureTem[1].dayTemp}} {{futureTem[1].dayWeather}} {{futureTem[1].dayWindDir}} {{futureTem[1].dayWindPower}}</span>
        <span
          class="tm"
        >夜间:{{futureTem[1].nightTemp}} {{futureTem[1].nightWeather}} {{futureTem[1].nightWindDir}} {{futureTem[1].nightWindPower}}</span>
      </div>
      <div class="group" v-if="futureTem && futureTem[2]">
        后天：
        <span
          class="tm"
        >白天:{{futureTem[2].dayTemp}} {{futureTem[2].dayWeather}} {{futureTem[2].dayWindDir}} {{futureTem[2].dayWindPower}}</span>
        <span
          class="tm"
        >夜间:{{futureTem[2].nightTemp}} {{futureTem[2].nightWeather}} {{futureTem[2].nightWindDir}} {{futureTem[2].nightWindPower}}</span>
      </div>
    </div>

    <div class="echart-contaier" ref="echartContaier"></div>

    <div class="map-container" ref="mapContainer"></div>

    <div class="loading" v-show="loader">
      <div class="loader">
        <div class="face">
          <div class="circle"></div>
        </div>
        <div class="face">
          <div class="circle"></div>
        </div>
      </div>
    </div>

    <div class="select-city-box" v-show="cityBox">
      <van-area :area-list="areaList" :columns-num="2" title="选择城市" @cancel="cancel" @confirm="confirm"/>
    </div>
  </div>
</template>

<script>
import AreaList from './area'
export default {
  data() {
    return {
      loader: false,
      localTime: "",
      cityData: {},
      futureTem: [],
      seriesData: [],
      areaList: AreaList,
      cityBox: false
    };
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime();
    }, 1000);
  },
  mounted() {
    this.initMap();
  },
  methods: {
    getLocalTime() {
      return new Date().toLocaleTimeString();
    },
    initMap() {
      let _self = this;
      var map = new AMap.Map(this.$refs.mapContainer, {
        resizeEnable: true
      });
      AMap.plugin("AMap.CitySearch", function() {
        var citySearch = new AMap.CitySearch();
        citySearch.getLocalCity(function(status, result) {
          if (status === "complete" && result.info === "OK") {
            // 查询成功，result即为当前所在城市信息
            // console.log(result);
            _self.getCurrentCityData(result.city);
          }
        });
      });
    },
    getCurrentCityData(cityName) {
      let _self = this;
      //加载天气查询插件
      AMap.plugin("AMap.Weather", function() {
        //创建天气查询实例
        var weather = new AMap.Weather();

        //执行实时天气信息查询
        weather.getLive(cityName, function(err, data) {
          // console.log(err, data);
          _self.cityData = data;
        });
        //执行实时天气信息查询
        weather.getForecast(cityName, function(err, data) {
          // console.log(err, data);
          _self.futureTem = data.forecasts;
          _self.futureTem.map((item, index) => {
            _self.seriesData.push(item.dayTemp)
          })
          _self.loader = false;
          _self.initEchart()
        });
      });
    },
    initEchart() {
      let dom = this.$refs.echartContaier;
      let myChart = echarts.init(dom);
      let app = {}, option = null;
      option = {
        xAxis: {
          show: true,
          splitLine: {show: false},
          type: "category",
          data: ["今天", "明天", "后天", "三天后"],
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {
            show: false
          }
        },
        yAxis: {
          show: false,
          axisLine: {
            show: false,
            lineStyle: {
              color: '#fff'
            }
          },
          axisTick: {show: true},
          splitLine: {show: false}
        },
        tooltip: {
          trigger: 'axis',
          formatter: function(params) {
            var relVal = params[0].name
            for (let i = 0, l = params.length; i < l; i++) {
              relVal += params[i].value + '℃'
            }
            return relVal
          }
        },
        legend: {
          data: ['气温']
        },
        series: [
          {
            name: '气温',
            data: this.seriesData,
            type: "line",
            label: {// 在点上展示数据
              normal: {
                show: true,
                position: 'top'
              }
            }
          }
        ]
      };
      myChart.setOption(option, true)
    },
    changeCity () {
      this.cityBox = true
    },
    cancel () {
      this.cityBox = false
    },
    confirm (e) {
      // console.log(e)
      this.seriesData = []
      this.getCurrentCityData(e[1].name)
      this.cancel()
    }
  }
};
</script>

<style>
.loading {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 20em;
  height: 20em;
  font-size: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loader .face {
  position: absolute;
  border-radius: 50%;
  border-style: solid;
  animation: animate 3s linear infinite;
}
.loader .face:nth-child(1) {
  width: 100%;
  height: 100%;
  color: gold;
  border-width: 0.2em 0.2em 0em 0em;
  border-color: currentColor transparent transparent currentColor;
  --deg: -45deg;
  animation-direction: normal;
}
.loader .face:nth-child(2) {
  width: 70%;
  height: 70%;
  color: lime;
  border-width: 0.2em 0em 0em 0.2em;
  border-color: currentColor currentColor transparent transparent;
  --deg: -135deg;
  animation-direction: reverse;
}

.loader .face .circle {
  position: absolute;
  width: 50%;
  height: 0.1em;
  top: 50%;
  left: 50%;
  background-color: transparent;
  transform: rotate(var(--deg));
  transform-origin: left;
}
.loader .face .circle::before {
  position: absolute;
  content: "";
  top: -0.5em;
  right: -0.5em;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  border-radius: 50%;
  box-shadow: 0 0 2em, 0 0 4em, 0 0 6em, 0 0 8em, 0 0 10em,
    0 0 0 0.5em rgba(255, 255, 0, 0.1);
}

@keyframes animate {
  to {
    transform: rotate(1turn);
  }
}
/* loader end */

.font18 {
  font-size: 18px;
}
.font45 {
  font-size: 45px;
}
.contaner {
  width: 100vw;
  height: 100vh;
  position: relative;
  padding: 10px;
  overflow: hidden;
  box-sizing: border-box;
}
.contaner .bg {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  filter: blur(2px);
  z-index: -1;
}
.contaner .address {
  color: #fff;
}
.contaner .address .change-city {
  position: absolute;
  right: 10px;
  top: 10px;
  color: #fff;
}
.contaner .address .city-info {
  text-align: center;
  line-height: 1.4;
}
.contaner .feature {
  margin-top: 30px;
}
.contaner .feature .group {
  height: 44px;
  line-height: 44px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.26);
  color: rgba(16, 16, 16, 1);
  font-size: 16px;
  margin-bottom: 10px;
  padding: 0 10px;
}
.contaner .feature .group .tm {
  margin-left: 10px;
  color: #fff;
  font-size: 12px;
}
.echart-contaier {
  width: 100%;
  height: 50vh;
}
.select-city-box {
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>