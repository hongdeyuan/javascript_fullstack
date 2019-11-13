<template>
  <div class="login">
    <div class="login-wrapper">
      <h2>XXX管理系统</h2>
      <el-input v-model="user" placeholder="请输入账号" class="user int"></el-input>
      <el-input placeholder="请输入密码" v-model="pwd" show-password class="pwd int"></el-input>
      <el-button type="primary" class="int" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: '',
      pwd: ''
    }
  },
  methods: {
    login () {
      if (this.user !== '' && this.pwd !== '') {
        localStorage.setItem('name', this.user)
        this.$router.push({path: '/main'})
      } else {
        this.$message.error('账号或密码不能为空')
      }
    }
  }
}
</script>

<style>
.login{
  width: 100%;
  height: 100vh;
  display: grid;
  place-items: center;
}
.login-wrapper{
  width: 400px;
  height: 400px;
  text-align: center;
  box-shadow: 0 0 10px #eaeaea;
  border-radius: 10px;
}
.int{
  width: 80%;
  margin: 0 auto;
  display: block;
  margin-bottom: 32px;
}
</style>
