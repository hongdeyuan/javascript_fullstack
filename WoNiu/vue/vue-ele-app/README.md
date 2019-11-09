# vue-ele-app

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


# 组件不需要配置路由

# @ 代表 ：src

# stylus loader  一起 安装
  - npm i stylus stylus-loader --save-dev
# 装axios ： npm i axios

# 父级与 自己通信（传参）： 具体见APP.vue  与 header.vue

# vue 动态修改 标签的 类名 ：见 header.vue
  - <span class="icon" :class="classMap[seller.supports[0].type]"></span>
  - 特别注意： 因为数组 当还未请求到时 数据为空  则会检测到 数据seller.supports[0]  的 0 为 undefined  
    此时，需要你做一个数据判断 具体见 ：header.vue  ->  <div class="support" v-if="seller.supports">  来判断数据是否加载完成
#  ref 获取 DOM 结构
  - 见 goods.vue
# 保证HTML 渲染后执行
  - this.$nextTick(() => {
      this._initScroll()
    })

# vue 中 选中 DOM 结构
  - 在div 中 加入 ref=" this.$refs.foodList"
    <div class="foots-list" ref=" this.$refs.foodList">
  - 在 js 中 去 拿到  DOM 结构
    let footList = this.$refs.foodList

# BScroll 实现 点击 滑动到 指定的 DOM 结构
  - 拿到 BScroll 渲染的 DOM 
    this.footsScroll = new BScroll(this.$refs.footsWrapper, {
        click: true,
        probeType: 3
      })
  - 实现 点击 滑动 调用 scrollToElement  两个参数 第一个参数： 指定的DOM 元素 ； 第二个参数 ： 指等待多少时间去执行滑动
    this.footsScroll.scrollToElement(el, 300)
    
# BScroll  执行页面滚动
  - 先使用 on()  监听 'scroll' 滑动事件
  - scroll

# vue 给没有设置的数据 增加 一个字段
  - this.$set(this.food, 'count', 1)  : 给 food 添加 count  默认值 为 1

# 阻止冒泡 和捕获事件 
 -  @click.stop.prevent="addCart"

# vue  中向父 组件 发散 数据   父组件并接收 : 见goods.vue  & cartcontrol.vue
  - this.$emit('add', event.target)
  - @add="addFood"
