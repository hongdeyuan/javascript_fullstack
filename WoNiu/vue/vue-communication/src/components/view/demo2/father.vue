<template>
  <div class="container">
    <div>
      <!-- <ul class="red">
        <li v-for="(human, index) of myObj" :key="index">{{human.name}}</li>
      </ul> -->
      <child :msg="myMsg" :num="nums" :obj="myObj"></child>
    </div>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      myObj: [
        {
          name: 'dhyuan'
        },
        {
          name: 'ljc'
        },
        {
          name: 'xxm'
        },{
          name: 'zsf'
        }
      ],
      myMsg: '我是父组件信息',
      nums: 12,
      user: {
        name: 'dhyuan',
        age: 22,
        hobby: 'conding，篮球，足球，散步'
      }
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>
