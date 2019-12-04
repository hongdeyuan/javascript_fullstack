<template>
  <div id="app">
    <v-tab></v-tab>
    <router-view/>
  </div>
</template>

<script>
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-tab': tab
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: rgba(235, 236, 236, 0.658);
}
</style>
