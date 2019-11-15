<template>
  <div class="child">
    <h3>兄弟组件1(接收兄弟组件2的消息)</h3>
    <p>child2中通过父组件间接的发过来的消息1: {{title}}</p>
    <p>child2中通过Bus发过来的消息2: {{msg}}</p>
  </div>
</template>

<script>
import Bus from '@/assets/bus'
export default {
  props: {
    title: String
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {},
  mounted () {
    Bus.$on('test', (data) => {
      this.msg = data
    })
  }
}
</script>

<style>

</style>
