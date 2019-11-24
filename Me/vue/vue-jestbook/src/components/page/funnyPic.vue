<template>
  <div class="imgPic">
    <div class="content-wrapper">
      <v-scroll class="content-scroll" ref="contentScroll">
        <div class="content">
          趣图
        </div>
      </v-scroll>
    </div>
  </div>
</template>

<script>
import scroll from  '@/components/scroll'
import api from '@/api'
export default {
  name: 'FunnyPic',
  components: {
    'v-scroll': scroll
  },
  data () {
    return {
      result: [],
      page: 1
    }
  }
}
</script>

<style lang="stylus" scoped>
.split
  width 100%
  height 16px
  border-top 1px solid rgba(7,17,27,.1)
  border-bottom 1px solid rgba(7,17,27,.1)
  background #f3f5f7
.content-wrapper
  position fixed
  top 0
  bottom 0
  width 100%
  .content-scroll
    height 100%
    overflow hidden
    .content
      position relative
</style>
