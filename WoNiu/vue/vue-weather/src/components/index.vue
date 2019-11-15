<template>
  <div class="contaner">
    <div class="bg"></div>
    <div class="address">
      <span class="change-city">切换城市</span>
      <p style="height: 21px">{{localTime}}</p>
      <div class="city-info">
        <dl>
          <dt class="font18">南昌市</dt>
        </dl>
        <dl>
          <dt>晴</dt>
        </dl>
        <dl class="font45">
          <dt>0℃</dt>
        </dl>
        <dl>
          <dt>风力：3</dt>
        </dl>
      </div>
    </div>
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
  </div>
</template>

<script>
export default {
  data () {
    return {
      loader: false,
      localTime: ''
    }
  },
  methods: {
    getLocalTime () {
      return new Date().toLocaleTimeString()
    }
  },
  created() {
    setInterval(() => {
      this.localTime = this.getLocalTime()
    },1000)
  }
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
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
  overflow: hidden;
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
