<template>
  <div id="app">
    <Nav v-show="isShowNav"></Nav>
    <!-- <div id="nav">
    </div> -->
    <div class="layout">
      <router-view />
      <Slider class="slider" />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from 'vue-property-decorator'
import Nav from '@/components/Nav.vue'
import Slider from '@/components/Slider.vue'
@Component({
  components: {
    Nav,
    Slider
  }
})
export default class App extends Vue {
  private isShowNav: boolean;
  @Watch('$route')
  routeChange(val, oldVal){
    if (val.path == '/') {
      this.isShowNav = false
    } else {
      this.isShowNav = true
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 61px;
}

.layout {
  display: flex;
  justify-content: space-around;
}
.slider {
  flex: 0 0 300px;
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
