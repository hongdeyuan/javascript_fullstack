<template>
  <div>
    <div class="nav">
      <div class="nav-content">
        <el-row :gutter="20">
          <el-col :span="3">
            <router-link to="/">
              <img src="../assets/logo.jpg" alt class="logo" />
            </router-link>
          </el-col>
          <el-col :span="16">
            <el-menu
              class="el-menu-demo"
              mode="horizontal"
              active-text-color="#409eff"
              :router="true"
              @select="handleSelect"
            >
              <el-menu-item 
                v-for="item in list" 
                :key="item.index"
                :index="item.index"
                :route="item.path">
                {{item.name}}
              </el-menu-item>
            </el-menu>
          </el-col>
          <el-col :span="5">
            <div class="nav-right">
              <el-button type="primary" size="small" @click="handleClick('login')">登录</el-button>
              <el-button type="danger" size="small" @click="handleClick('register')">注册</el-button>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <RegisterAndLogin :handleFlags="handleFlags" :visible="visible" @cancle="handleCancle"></RegisterAndLogin>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { NavListItem } from '../types/index'
import RegisterAndLogin from '@/components/RegisterAndLogin.vue'

@Component({
  components: {
    RegisterAndLogin
  }
})
export default class Nav extends Vue {
  private list: Array<NavListItem> = [
    {
      index: "1",
      path: "/",
      name: "首页"
    },
    {
      index: "2",
      path: "/articles",
      name: "文章"
    },
    {
      index: "3",
      path: "/archive",
      name: "归档"
    },
    {
      index: "4",
      path: "/project",
      name: "项目"
    },
    {
      index: "5",
      path: "/timeline",
      name: "历程"
    },
    {
      index: "6",
      path: "/message",
      name: "留言"
    },
    {
      index: "7",
      path: "/about",
      name: "关于"
    }
  ];
  private visible: boolean = false;
  private handleFlags: string;
  private handleClick(value: string) {
    this.handleFlags = value
    this.visible = true
  }
  private handleSelect() {}
  private handleCancle(value: boolean) {
    this.visible = value
  }
}
</script>

<style scoped lang="less">
.nav-mobile {
  display: flex;
  line-height: 60px;
  .nav-mobile-logo {
    flex: 1;
    margin-top: 5px;
    margin-left: 10px;
  }
  .title {
    flex: 3;
    font-size: 24px;
  }
  .menu {
    flex: 1;
    font-size: 34px;
    color: #409eff;
  }
}
.nav-mobile-content {
  font-size: 0.3rem;
  height: 7.3rem;
  width: 100%;
  background-color: #fff;
  .list {
    .item {
      line-height: 0.8rem;
      color: #303133;
      border-bottom: 1px solid #eee;
      a {
        display: block;
        width: 100%;
        color: #409eff;
        text-decoration-line: none;
      }
    }
  }
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  border-bottom: 1px solid #eee;
  background-color: #fff;
  .nav-content {
    width: 1200px;
    margin: 0 auto;
  }
  .logo {
    height: 50px;
    margin: 0;
    border-radius: 50%;
    margin-top: 5px;
  }
  .el-menu.el-menu--horizontal {
    border-bottom: none;
  }
  .el-menu--horizontal > .el-menu-item {
    cursor: pointer;
    color: #333;
  }
  .nav-right {
    position: relative;
    padding-top: 15px;
    text-align: right;
    .el-dropdown {
      cursor: pointer;
      padding-right: 60px;
    }
    .user-img {
      position: absolute;
      top: -15px;
      right: 0;
      width: 50px;
      border-radius: 50%;
    }
  }
}

.enter-slideUp,
.leave-slideDown {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1010;
}

.enter-slideUp {
  overflow: auto;
  visibility: visible;
  z-index: 1001;
  animation: slideUp 0.3s forwards;
}
.leave-slideDown {
  visibility: visible;
  z-index: 1001;
  animation: slideDown 0.3s forwards;
}
@keyframes slideUp {
  from {
    transform: translate3d(0, 100%, 0);
    opacity: 0.1;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes slideDown {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(0, 100%, 0);
    opacity: 0;
  }
}
.mask {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.5;
}
.mask-fade-out {
  animation: maskFadeOut 0.4s forwards;
}
@keyframes maskFadeOut {
  from {
    opacity: 0.5;
  }
  to {
    opacity: 0;
  }
}
</style>
