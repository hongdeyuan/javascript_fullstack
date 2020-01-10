<template>
  <div class="left clearfix">
    <ul class="articles-list" id="list">
      <transition-group name="el-fade-in">
        <li class="item" v-for="(item, index) in articlesList" :key="index">
          <a href="#" target="_blank">
            <img src="../assets/bg.jpg" 
                alt="" 
                class="wrap-img img-blur-done"
                :data-src="item.img_url"
                data-has-lazy-src="false"
            >
            <div class="content">
              <h4 class="title">{{item.title}}</h4>
              <div class="abstract">{{item.desc}}</div>
              <div class="meta">
                <span>查看{{item.meta.views}}</span>
                <span>评论{{item.meta.comments}}</span>
                <span>赞{{item.meta.likes}}</span>
                <span>{{item.create_time}}</span>
              </div>
            </div>
          </a>
        </li>
      </transition-group>
    </ul>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// 懒加载
const viewHeight = window.innerHeight || document.documentElement.clientHeight
const lazyload = () => {
  const imgs = document.querySelectorAll('#list .item img')
  let num = 0
  for (let i = num; i < imgs.length; i++) {
    let distance = viewHeight - imgs[i].getBoundingClientRect().top
    let imgItem: any = imgs[i]
    if (distance >= 100) {
      let hasLaysrc = imgItem.getAttribute('data-has-lazy-src')
      if (hasLaysrc == 'false') {
        imgItem.src = imgItem.getAttribute('data-src')
        imgItem.setAttribute('data-has-lazy-src', 'true')
      }
    }
    num = i + 1
  }
}

@Component
export default class Articles extends Vue {
  private articlesList: object[] = []

  mounted(): void {
    this.handleSearch()
    document.addEventListener('scroll', lazyload)
  }

  private async handleSearch(): Promise<void> {
    const data = await this.$https.get('http://yapi.demo.qunar.com/mock/51474/vue-ts-blog/articles')
    console.log(data)
    if (data.list.length) {
      this.articlesList = [...this.articlesList, ...data.list]
    }

    this.$nextTick(() => {
      lazyload()
    })
  }
}
</script>

<style lang="less" scoped>
.left {
  .articles-list {
    margin: 0;
    padding: 0;
    list-style: none;
    .title {
      color: #333;
      margin: 7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
    }
    .item > div {
      padding-right: 140px;
    }
    .item .wrap-img {
      position: absolute;
      top: 50%;
      margin-top: -50px;
      right: 0;
      width: 125px;
      height: 100px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 4px;
        border: 1px solid #f0f0f0;
      }
    }
    li {
      line-height: 20px;
      position: relative;
      // width: 100%;
      padding: 15px 0px;
      padding-right: 150px;
      border-bottom: 1px solid #f0f0f0;
      word-wrap: break-word;
      a {
        text-decoration: none;
      }
      cursor: pointer;
      &:hover {
        .title {
          color: #000;
        }
      }
      .abstract {
        min-height: 30px;
        margin: 0 0 8px;
        font-size: 13px;
        line-height: 24px;
        color: #555;
      }
      .meta {
        padding-right: 0 !important;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
        a {
          margin-right: 10px;
          color: #b4b4b4;
          text-decoration: none;
          &::hover {
            transition: 0.1s ease-in;
            -webkit-transition: 0.1s ease-in;
            -moz-transition: 0.1s ease-in;
            -o-transition: 0.1s ease-in;
            -ms-transition: 0.1s ease-in;
          }
        }
        span {
          margin-right: 10px;
          color: #666;
        }
      }
    }
  }
}
</style>
