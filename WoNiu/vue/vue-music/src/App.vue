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
    <!-- tab -->
    <v-tab />
    <v-siderbar />
    <router-view/>
  </div>
</template>

<script>
import header from '@/components/header'
import siderbar from '@/components/sidebar'
import tab from '@/components/tab'
export default {
  name: 'App',
  components: {
    'v-header': header,
    'v-siderbar': siderbar,
    'v-tab': tab
  }
}
</script>

<style>

</style>
