<template>
  <div class="footer" @click="cancle">尾部</div>
</template>

<script>
import { open, close } from './notification'
export default {
  mounted () {
    setTimeout(() => {
      open({
        title: '我的通知',
        content: '你马上就要放假了'
      })
      open({
        title: '你的通知',
        content: '我马上就要放假了'
      })
    }, 2000)
  },
  methods: {
    cancle () {
      close()
    }
  }
}
</script>

<style>
.footer{
  position: fixed;
  bottom: 0;
}
</style>
