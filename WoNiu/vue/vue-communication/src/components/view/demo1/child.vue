<template>
  <div class="child">
    <h2>子组件</h2>
    <p>The msg from father is: </p>
    <strong>{{send}}</strong>

    <p class="hr"></p>

    <p>The changeMsg from child is:</p>
    <strong>{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  props: ['send'],
  computed: {
    changeMsg () {
      return this.send.toUpperCase()
    }
  }
}
</script>

<style>
.hr{
  margin: 50px 0;
}
</style>
