<template>
  <div>
    <span  @mousedown="start" style="position: absolute;left: 0;top: 0">这是你需要读取的信息</span>
     <el-button type="primary" @click="open">Open</el-button>
     <el-dialog title="tips" :visible="visible">
       <span @click="close">这是你需要读取的信息</span>
     </el-dialog>
  </div>
</template>

<script>
// import
import mixin from './visible'
import drag from './drag'
export default {
  name: 'Dialog',
  data () {
    return {
    }
  },
  components: {},
  mixins: [mixin, drag]
}
</script>

<style>

</style>