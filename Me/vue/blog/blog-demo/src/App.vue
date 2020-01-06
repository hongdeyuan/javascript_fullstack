<template>
  <div id="app">
    <h1>Jayson's Blog</h1>
    <BlogPost />
    <router-view/>
  </div>
</template>
<script lang="ts">
  import BlogPost from "./components/BlogPost.vue";
  import { Component, Vue } from 'vue-property-decorator';
  // 组件声明
  @Component({
    components: {
      BlogPost,
    },
  })

  export default class App extends Vue {}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
