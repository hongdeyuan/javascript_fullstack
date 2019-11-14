<template>
  <div id="app">
    <h3 class="mb30">vue 组件通信的各种方式</h3>
    <p>导航：
      <router-link to="/d1">1. 父子组件通信</router-link>
       <router-link to="/d2">2. 父子组件通信more</router-link>
       <router-link to="/d3">3. 子组件向父组件通信</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.mb30{
  margin-bottom: 30px;
}
</style>
