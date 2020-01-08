<template>
  <div id="app">
    <h1>Jayson's Blog</h1>
    <button @click="showHide">show/hide highlighted post</button>
    <BlogPost v-for="(post, index) in visibleBlogPost" :post="post" :key="index" />
    <!-- <router-view/> -->
  </div>
</template>
<script lang="ts">
  import BlogPost, {Post} from './components/BlogPost.vue';
  import { Component, Vue } from 'vue-property-decorator';
  // 组件声明
  @Component({
    components: {
      BlogPost,
    },
  })


  export default class App extends Vue {

    public showHighLighted: boolean = true
    get visibleBlogPost() {
      return this.blogpost.filter((post: Post) => post.highlighted === undefined || this.showHighLighted)
    }

    public showHide () {
      this.showHighLighted = !this.showHighLighted
    }

    private blogpost: Post[] = [
      {
        title: 'my first blogpost ever',
        body: 'welcome to my blog',
        author: 'dhyuan',
        datePosted: new Date(2020, 0, 7),
        highlighted: true
      },
      {
        title: 'my second blogpost ever',
        body: 'welcome to my blog',
        author: 'dhyuan',
        datePosted: new Date(2020, 1, 8)
      }
      ,{
        title: 'my third blogpost ever',
        body: 'welcome to my blog',
        author: 'dhyuan',
        datePosted: new Date(2020, 2, 9)
      }
    ]
  }
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
