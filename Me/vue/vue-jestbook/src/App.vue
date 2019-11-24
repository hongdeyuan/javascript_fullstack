<template>
  <div id="app">
    <!-- tabBar -->
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

</style>
