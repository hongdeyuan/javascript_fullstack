<template>
  
  <div class="detail">
    this is a detail'page
    <p>{{ $route.params.id}}</p>
  </div>
</template>

<script>

export default {
  created() {
    console.log(this.$route)
  }
}
</script>

<style>

</style>