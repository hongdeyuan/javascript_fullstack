<template>
  <div class="zoom">
    <div class="small-box" @mouseover="handOver" @mousemove="handMove" @mouseout="handOut">
      <img :src="src" alt="">
      <div class="mask"></div>
    </div>
    <div class="layer">
      <div class="big-box">
        <img :src="bigSrc" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bigSrc: {
      type: String
    },
    src: {
      type: String
    }
  },
  methods: {
    handOver () {

    },
    handMove (e) {
      let objX = e.clientX
      let objY = e.clientY
      let imgClientObj = this.$el
      .querySelector('.small-box')
      .getBoundingClientRect()
      let maskX = objX - imgClientObj.x - 210 / 2
      let maskY = objY - imgClientObj.y - 210 / 2
      // this ： 这个组件的实例 
      maskX = maskX < 0 ? 0 : maskX
      maskY = maskY < 0 ? 0 : maskY
      if (maskX + 210 >= 430) {
        maskX = 430 - 210
      }
      if (maskY + 210 >= 430) {
        maskY = 430 - 210
      }
      let maskNode = this.$el.querySelector('.mask')
      let bigNode = this.$el.querySelector('.big-box')
      let percent = (800 - 430) / (430 - 210)
      maskNode.style.transform = `translate(${maskX}px, ${maskY}px)`
      bigNode.style.transform = `translate(${-maskX*percent}px, ${-maskY*percent}px)`
    },
    handOut () {

    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.zoom{
  position: relative;
  width: 100%;
  height: 100%;
}
.small-box{
  position: relative;
  width: 430px;
  height: 430px;
  display: inline-block;
}
.small-box .mask{
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(125, 125, 125, .6);
  width: 210px;
  height: 210px;
}
.small-box .mask:hover{
  cursor: move;
}
.layer{
  position: absolute;
  display: inline-block;
  border: 1px solid #000;
  margin-left: 10px;
  width: 420px;
  height: 420px;
  overflow: hidden;
}

</style>

