<template>
  <div class="header">头部
    <Notification :visiable="visiable" title="通知" content="放假"/>
  </div>
</template>

<script>
import Notification from './Notfication'
export default {
  components: {
    Notification
  },
  data () {
    return {
      visiable: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.visiable = !this.visiable
    }, 2000)
  }
}
</script>

<style>
.header{
  position: fixed;
  top: 0;
}
</style>
