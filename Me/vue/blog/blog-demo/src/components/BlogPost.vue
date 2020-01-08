<template>
  <div class="blogpost" :class="{highlighted: post.highlighted}">
    <h2>{{post.title}}</h2>
    <p v-if="post.highlighted">This post is highlighted!</p>
    <p>{{post.body}}</p>
    <p class="meta">Written By {{post.author}} on {{date}}</p>
    <!-- <p>{{post.datePosted}}</p> -->
  </div>
</template>

<script lang='ts' scoped>
import { Vue, Prop, Component } from 'vue-property-decorator';
export interface Post {
  title: string,
  body: string,
  author: string,
  datePosted: Date,
  highlighted?: boolean
}
@Component
export default class BlogPost extends Vue {
  /**props : {
    type: string,
    defalut: ''
  }
  */
  @Prop() private post!: Post;
  get date () {
    return `${this.post.datePosted.getDate()}/${this.post.datePosted.getMonth() + 1}/${this.post.datePosted.getFullYear()}`
  }
}
</script>

<style lang="stylus" scoped>
.blogpost
  width 400px
  margin 0 auto
  h2
    text-decoration underline
  .meta
    font-style italic
.highlighted
  border 1px solid #f4d942
  background #fff3b2
</style>