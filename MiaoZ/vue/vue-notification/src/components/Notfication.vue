<template>
  <div class="main" v-show="visiable">
    <h2>{{title}}</h2>
    <p>{{content}}</p>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
    visiable: Boolean
  }
}
</script>

<style scoped>
.main{
  position: fixed;
  right: 10px;
  top: 10px;
  width: 200px;
  height: 150px;
  text-align: center;
  background-color: #fff;
  opacity: .4;
  color: rgb(24, 25, 26);
  box-shadow: 0 0 10px rgb(51, 49, 49);
}
</style>
