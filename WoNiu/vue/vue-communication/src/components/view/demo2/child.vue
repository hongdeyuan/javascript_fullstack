<template>
  <div class="child">
    <p>string:{{msg}}-{{num}}</p>
    <div>
      <ul class="red">
        <li v-for="(human, index) of obj" :key="index">{{human.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      required: true
    },
    num: {
      type: Number,
      required: true
    },
    obj: {
      // 声明验证类型
      validator(val) {
         console.log(val);
        if (
          Object.prototype.toString.call(val) === "[object Array]" ||
          Object.prototype.toString.call(val) === "[object object]"
        ) {
         
          return true;
        }
      }
    }
  }
};
</script>

<style>
</style>
