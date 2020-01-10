<template>
  <div class="right slider">
    <img src="../assets/tian.jpg" alt="" class="right-logo">
    <div class="title">等你下课</div>
    <div class="tags">
      <div class="title">标签云</div>
      <rout-link v-for="item in tagList" class="item"
        :key="item._id"
        :to="`/articles?tag_id=${item._id}&tag_name=${item.name}`">
          <span :key="item._id">{{item.name}}</span>
        </rout-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Slider extends Vue {
  private tagList: object[] = []
  mounted(): void {
    this.handleSearch()
  }
  private async handleSearch(): Promise<void> {
    const data = await this.$https.get('http://yapi.demo.qunar.com/mock/51474/vue-ts-blog/tagList')
    console.log(data)
    if (data.list.length) {
      this.tagList = [...this.tagList, ...data.list]
    }
  } 
}
</script>

<style scoped lang="less">
.slider {
  padding-top: 50px;
}
.right {
  text-align: center;
  .right-logo {
    width: 130px;
    border-radius: 50%;
    animation: mylogo 3s;
    -moz-animation: mylogo 3s; /* Firefox */
    -webkit-animation: mylogo 3s; /* Safari and Chrome */
    -o-animation: mylogo 3s; /* Opera */
    animation-iteration-count: infinite;
  }
  .title {
    font-size: 25px;
    font-weight: bold;
  }
  .right-content {
    padding: 10px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .item {
      display: inline-block;
      padding: 0 10px;
      color: #969696;
      border-right: 1px solid #eee;
      &:last-child {
        border-right: none;
      }
      .num {
        color: #333;
      }
    }
  }
  .introduce {
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .content {
      color: #333;
      line-height: 26px;
      text-align: left;
      padding: 20px 0;
    }
    .footer {
      padding-bottom: 10px;
    }
  }
  .tags {
    min-height: 200px;
    padding: 5px 0 20px 0;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .item {
      display: inline-block;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 5px;
      background-color: #eee;
      color: #333;
      margin: 10px 10px 0 0;
      text-decoration: none;
      &:hover {
        color: #409eff;
      }
    }
  }
  .classification {
    padding: 5px 0 20px 0;
    .title {
      font-size: 14px;
      color: #969696;
    }
    .item {
      text-align: center;
      padding: 10px;
      border-bottom: 1px solid #eee;
      color: #666;
      margin: 10px 10px 0 0;
    }
  }
}
@keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-moz-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-webkit-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}

@-o-keyframes mylogo {
  0% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
  25% {
    transform: rotate(0deg) scale(1, 1);
    opacity: 0.8;
  }
  100% {
    transform: rotate(0deg) scale(0.8, 0.8);
    opacity: 1;
  }
}
</style>
