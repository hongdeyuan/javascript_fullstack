<template>
  <div class="detail">
    <div class="banner">
      <img
        src="http://img1.qunarzz.com/sight/p0/201404/23/04b92c99462687fa1ba45c1b5ba4ad77.jpg_600x330_bf9c4904.jpg"
        class="banner-img"
      />
      <div class="banner-info">
        <div class="banner-title">大连圣亚海洋世界(AAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe617;</span>
          2
        </div>
      </div>
    </div>
    <div class="content">
      <div class="item">
        <div class="item-title border-bottom">
          <span class="item-title-icon"></span>
            成人票
        </div>
      </div>
    </div>
    详情页{{this.$route.query.id}}
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss">
.detail{
  .banner{
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img{
      width: 100%;
      vertical-align: middle;
    }
    .banner-info{
      display: flex;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top,transparent,rgba(0,0,0,.8));
      .banner-title{
        font-size: .32rem;
        padding: 0 .2rem;
        -ms-flex: 1;
        flex: 1;
      }
      .banner-number{
        line-height: .32rem;
        height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background: rgba(0,0,0,.8);
        font-size: .24rem;
        .banner-icon{
          font-size: .24rem;
        }
      }
    }
  }
}

</style>
