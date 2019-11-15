<template>
  <div class="city">
    <div class="header">&lt;</div>
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
export default {}
</script>

<style lang="scss" scoped>
@import '../../assets/stylus/cariable.scss';
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
