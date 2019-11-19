<template>
  <div id="app">
    <!-- 头部 -->
    <v-header>
      <i class="icon" slot="left-icon">&#xe692;</i>
      <span slot="content">我的音乐</span>
      <router-link to="/user" slot="right-icon">
        <i class="icon">&#xe63c;</i>
      </router-link>
    </v-header>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import header from '@/components/header'
export default {
  name: 'App',
  components: {
    'v-header': header
  }
}
</script>

<style>

</style>
