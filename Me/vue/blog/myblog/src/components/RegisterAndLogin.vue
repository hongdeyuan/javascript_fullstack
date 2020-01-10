<template>
  <el-dialog :title='title' :visible="dialogVisible" @close="cancle">
  <el-form label-width="80px" >
    <el-form-item label="邮箱">
      <el-input v-model="params.email"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="params.password"></el-input>
    </el-form-item>
    <el-formItem v-if="handleFlag === 'register'" label="昵称">
      <el-input v-model="params.name" placeholder="用户名或昵称" autocomplete="off"></el-input>
    </el-formItem>
    <el-formItem v-if="handleFlag === 'register'" label="手机">
      <el-input v-model="params.phone" placeholder="手机号" autocomplete="off"></el-input>
    </el-formItem>
    <el-formItem v-if="handleFlag === 'register'" label="简介">
      <el-input v-model="params.desc" placeholder="个人简介" autocomplete="off"></el-input>
    </el-formItem>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="handleAutor">Github 授权登录</el-button>
    <el-button type="primary" @click="handleOk">{{title}}</el-button>
  </div>
</el-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator'

@Component
export default class RegisterAndLogin extends Vue {
  @Prop({default:true}) private visible!: boolean
  @Prop() private handleFlags: string
  private params: any = {
    email: '',
    password: ''
  }
  get title (): string {
    return this.handleFlags === 'login' ? '登录' : '注册'
  }
  get dialogVisible(): boolean {
    return this.visible
  }

  @Emit()
  private cancle ():boolean {
    return false
  }

  get handleFlag(): string {
    return this.handleFlags
  }

  private handleOk():void {
    const reg = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$')
    if (!reg.test(this.params.email)) {
      this.$message.error('请入正确的邮箱格式')
    } else {
      if (!this.params.password) {
        this.$message.error('密码不能为空')
      }
    }
    // 登录操作
    this.submit()
  }
  // 登录接口请求
  private async submit(): Promise<void> {

  }

  // github授权登录
  private handleAutor(): void {
    // 保存授权之前的页面链接
    let preventHistory: object = {
      name: this.$route.name,
      querry: this.$route.query
    }
    window.sessionStorage.preventHistory = JSON.stringify(preventHistory)
    window.location.href = `https://github.com/login/oauth/authorize?client_id=058c1e279a0962bb027d`
  }
}
</script>

<style>

</style>