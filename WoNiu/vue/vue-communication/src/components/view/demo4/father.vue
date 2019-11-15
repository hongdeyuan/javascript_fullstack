<template>
  <div class="container">
    <h1>父组件</h1>
    <child :title="title"></child>
    <child2 @test="getTitle"></child2>
  </div>
</template>

<script>
import child from './child'
import child2 from './child2'
export default {
  data () {
    return {
      title: ''
    }
  },
  components: {
    child,
    child2
  },
  methods: {
    getTitle (e) {
      console.log(e)
      this.title = e
    }
  }
}
</script>

<style>

</style>
