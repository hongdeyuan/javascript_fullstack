<template>
  <div class="child">
    <h2>子组件</h2>
    <p>子组件要发送的消息: </p>
    <strong>{{msg}}</strong>
    <button @click="send">send</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '我是子组件中的数据'
    }
  },
  methods: {
    send () {
      this.$emit('msgChild', this.msg)
    }
  }
}
</script>

<style>

</style>
