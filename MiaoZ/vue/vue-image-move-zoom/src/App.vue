<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <ImageZoom 
      src="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg_430x430q90.jpg"
      bigSrc="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg"
      />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import ImageZoom from './components/ImageZoom'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ImageZoom
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
</style>
