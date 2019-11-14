<template>
  <div class="container">
    <h1>父组件</h1>
    <p>从子组件获取的消息:
      <span>{{Msg}}</span>
    </p>

    <child v-on:msgChild="getMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      Msg: ''
    }
  },
  components: {
    child
  },
  methods: {
    getMsg (e) {
      this.Msg = e
    }
  }
}
</script>

<style>

</style>
