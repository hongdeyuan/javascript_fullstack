<template>
  <div>
    <el-button type="primary" @click="open">打开</el-button>
    <el-button type="danger" @click="close">关闭</el-button>

    <el-table v-loading="visible" :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>

  </div>
</template>

<script>
import mixin from './visible'
export default {
  name: 'Loading',
  data () {
    return {
      tableData: []
    }
  },
  components: {},
  mixins: [mixin]
}
</script>

<style>

</style>