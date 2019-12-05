<template>
  <div class="note-class-wrapper">
    <div class="note-class">
      <header>
        <div>
          <van-icon name="wap-nav" size="20px" @click="menu"></van-icon>
        </div>
        <div>
          <van-icon name="star" size="20px"></van-icon>
          <van-icon name="search" size="20px"></van-icon>
        </div>
      </header>
      <section>
        <div
          class="note-item"
          v-for="(item, index) in noteClassList"
          :key="index"
          :style="`background-image: url(${item.img})`"
          @click="noteList(item.title)"
        >
          <div class="mask"></div>
          <div class="title">{{item.title}}</div>
        </div>
      </section>
    </div>
    <div class="person-info" :class="{'isClickMenu-info':isClickMenu_info}">
      <div class="person-info-content">
        <div class="info-arrow-left" @click="arrow">
          <van-icon name="arrow-left" size="20px" />
        </div>
        <section class="header">
          <div class="avatar" :style="`background-image:url(${avatar})`"></div>
          <p class="username">{{username}}</p>
        </section>
        <hr />
        <div class="setting">
          <div class="set-item">
            <van-icon name="contact" color="#aaa" size=".4rem" />
            <span>个人主页</span>
          </div>
          <div class="set-item">
            <van-icon name="points-mall" color="#aaa" size=".4rem" />
            <span>通知</span>
          </div>
          <div class="set-item">
            <van-icon name="chat" color="#aaa" size=".4rem" />
            <span>信息</span>
          </div>
          <div class="set-item">
            <van-icon name="setting" color="#aaa" size=".4rem" />
            <span>设置</span>
          </div>
        </div>
        <div class="logout">
          <hr />
          <div class="set-item">
            <van-icon name="delete" color="#aaa" size=".4rem" />
            <span>退出登录</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      noteClassList: [
        {
          img: require("./../../assets/img/raw_1512446214.jpeg"),
          title: "美食"
        },
        {
          img: require("./../../assets/img/raw_1512446225.jpeg"),
          title: "旅行"
        },
        {
          img: require("./../../assets/img/raw_1512446234.jpeg"),
          title: "汽车"
        },
        {
          img: require("./../../assets/img/raw_1512446243.jpeg"),
          title: "时尚"
        },
        {
          img: require("./../../assets/img/raw_1512446251.jpeg"),
          title: "科技"
        }
      ],
      isClickMenu_info: false,
      avatar: require('./../../assets/img/raw_1512446140.jpeg'),
      username: 'ljc'
    };
  },
  methods: {
    arrow () {
      this.isClickMenu_info = false
    },
    menu () {
      this.isClickMenu_info = true
    },
    noteList(title){
      this.$router.push({path: '/noteList', query:{'title': title}})
    }
  }
};
</script>

<style lang="less" scoped>
.note-class-wrapper {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
  .note-class {
    width: 100vw;
    height: 100%;
    position: absolute;
    transform: translateX(0%);
    padding: 0 0.586667rem;
    transition: 0.2s;
    overflow-y: scroll;
    box-sizing: border-box;
    header {
      display: flex;
      height: 1.2rem;
      line-height: 1.2rem;
      justify-content: space-between;
      margin: 10px 0;
      .van-icon-like {
        margin-right: 10px;
      }
    }
    section {
      width: 100%;
      .note-item {
        position: relative;
        height: 3.2rem;
        border-radius: 0.266667rem;
        margin-bottom: 0.64rem;
        background-position: center;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        box-shadow: 0px 0px 10px 2px #ccc;
        .mask {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          border-radius: 0.266667rem;
          background-color: rgba(63, 81, 181, 0.23);
          z-index: -1;
        }
        .title {
          display: inline-block;
          margin: 0.533333rem auto auto 0.533333rem;
          color: rgba(255, 255, 255, 1);
          font-size: 0.533333rem;
          text-align: center;
          font-family: Arial;
        }
      }
    }
  }
  .person-info {
    width: 100%;
    height: 100vh;
    position: absolute;
    transform: translateX(-100%);
    background: #fff;
    padding-right: 50px;
    transition: 0.2s;
    .person-info-content {
      height: 100vh;
      background: #e8e6e8;
      padding: 1.4rem 1.066667rem;
      position: relative;
      border-right: 1px solid #ccc;
      .info-arrow-left {
        position: absolute;
        top: 10px;
        left: 15px;
        width: 1.066667rem;
        height: 1.066667rem;
      }
      .header {
        display: flex;
        flex-direction: column;
        align-items: center;
        .avatar {
          width: 2.026667rem;
          height: 2.026667rem;
          border-radius: 50%;
          background-position: center;
          background-repeat: no-repeat;
          background-size: 100% 100%;
          margin-bottom: 10px;
        }
        .username {
          color: #101010;
          font-size: 0.373333rem;
        }
      }
      .setting {
        margin-top: 1.066667rem;
        .set-item {
          height: 1.173333rem;
          line-height: 1.173333rem;
          span {
            font-size: 0.4rem;
            color: #101010;
            opacity: 0.5;
            vertical-align: middle;
            margin-left: 32%;
          }
        }
      }
      .logout {
        width: 100%;
        position: absolute;
        left: 0;
        padding: 0 1.066667rem;
        bottom: 0.533333rem;
        .set-item {
          height: 0.8rem;
          line-height: 0.8rem;
          span {
            font-size: 0.48rem;
            color: #101010;
            opacity: 0.5;
            vertical-align: middle;
            margin-left: 32%;
          }
        }
      }
    }
  }
  .isClickMenu-note {
    transform: translateX(100%);
  }
  .isClickMenu-info {
    transform: translateX(0%);
  }
}
</style>