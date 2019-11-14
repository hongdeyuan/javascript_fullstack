<template>
  <div class="container">
    <child :send="myMsg"></child>
  </div>
</template>

<script>
import child from './child'
export default {
  data () {
    return {
      myMsg: 'This is father msg'
    }
  },
  components: {
    child
  }
}
</script>

<style>

</style>
