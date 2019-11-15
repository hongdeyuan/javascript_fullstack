<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon"></div>
    </div>
    <div class="header-input">
      <input type="text" value="dhyuan"/>
    </div>
    <div class="header-right">
      {{ this.city }}
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      city: '北京'
    }
  }
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  line-height: .86rem;
  background: #00bcd4;
  color: #fff;
  .header-left {
    width: .64rem;
    float: left;
    .iconfont {
      font-size: 16px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
    }
    .back-icon {
      text-align: center;
      font-size: .4rem;
    }
  }
}
</style>
