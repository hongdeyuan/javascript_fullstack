<template>
  <div class="mine">this is my page!
    <!-- <router-link to="/detail"><button >查看详情</button></router-link> -->
    <!-- <router-link :to="{name:'Detail',params:{id:1}}" ><button >查看详情</button></router-link> -->
    <button @click="seeDetail">查看详情</button>
    <router-view/>
  </div>
  
</template>

<script>
export default {
  methods:{
    seeDetail () {
      this.$router.push({name:'Detail',params:{id: 12}})
    }
  }
}
</script>

<style>

</style>