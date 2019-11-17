<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe600;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe613;</span>
       输入城市/景点/游玩主题
    </div>
    <a href="#/city">
      <div class="header-right">
        {{ this.city }}
        <span class="iconfont">&#xe642;</span>
      </div>
    </a>
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
    .back-icon {
      text-align: center;
      font-size: .4rem;
    }
  }
  .header-input{
    flex: 1;
    height: .64rem;
    line-height: .64rem;
    margin-top: .12rem;
    margin-left: .2rem;
    padding-left: .2rem;
    background: #fff;
    border-radius: .1rem;
    color: #ccc;
  }
  .header-right{
    min-width: 1.04rem;
    padding: 0 .1rem;
    float: right;
    text-align: center;
    color: #fff;
  }
}
</style>
