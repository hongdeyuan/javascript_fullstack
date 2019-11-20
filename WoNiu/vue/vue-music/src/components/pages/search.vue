<template>
  <div class="search">
    <!-- 搜索框 -->
    <div class="search-box-wrapper">
      <v-search-box @query="onQueryChange"/>
    </div>
  </div>
</template>

<script>
import searchBox from '@/components/searchBox'
export default {
  components: {
    'v-search-box': searchBox
  },
  methods: {
    onQueryChange () {}
  }
}
</script>

<style lang="stylus" scoped>
@import '../../assets/css/function.styl'
.search
  overflow hidden
  &-box-wrapper
    margin px2rem(40px)
</style>
