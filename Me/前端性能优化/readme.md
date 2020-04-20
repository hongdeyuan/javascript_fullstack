# 前端性能优化

1. 文件获取优化
    - 加载文件 css js
    - http协议的细节
    - 从输入url 到页面渲染完成发生了什么
    - 大厂怎么上线前端代码

2. 代码执行优化
    - 节流 防抖
    - 回流 重绘
    - vue react(ssr-服务器端渲染)常见优化- 代码执行的更少，dom操作的更少
    - 浏览器是如何渲染页面的 


## 从输入url 到页面渲染完成发生了什么
  1. 用户输入 www.baidu.com
  2. 浏览器通过DNS解析，把url解析为IP
  3. 和IP地址建立TCP连接 发送HTTP请求
  4. 服务器接收请求，查库，读文件、拼接好返回HTTP响应
  5. 浏览器收到首屏的html
  6. 解析html为dom
  7. 解析Css为css-tree
  8. dom + css 生成render-tree 绘图
  9. 加载script的js文件
  10. 执行js

  所谓的性能优化 就是以上的步骤加载一起，时间要尽可能的短，所以要关注两大方向：
    1. 少加载文件
    2. 少执行代码(vue路由按需加载，react组件按需加载)

## 浏览器缓存机制
  广义上说，缓存可以分为4个：
  1. Http Cache
  2. Service Worker Cache
    独立于主线程之外的js线程，脱离于浏览器窗体，算是幕后工作者，可以实现离线缓存等功能
  3. Memory Cache
    内存缓存，短命，比如我们把数据存在js里，浏览器也有自己的策略，base64图片，体积小的静态资源
  4. Push Cache
    HTTP2的缓存


## 文件打包
  分析文件大小；比如删除冗余的代码的tree-shaking,和无效代码【webpack系列】

## 图片优化
  图片是非常占流量的，pc端平均加载的图片大小600kb，简直比js包还大，所以针对图片优化，收益巨大
  - jpg
    1. 有损压缩
    2. 不支持透明
    3. 用于背景图，轮播图
  - png
    1. 无损压缩，质量高，支持透明
    2. 色彩线条更丰富，通常用于一些小图，比如:logo， 商品icon
  - svg
    1. 文本，体积小矢量图
    2. 渲染成本高，学习成本高
  - 图片打包雪碧图，减少http的请求次数
  - gzip(线上一定要打开)  accept-


## 本地存储
  cookie localStorage sessionStorage indexDBs
  1. cookie
    - 最早，体积限定，性能浪费，一般来说所有的请求都会带上当前的域名cookie
  2. Web Storage
    - localStorage(持久化存储) 与 sessionStorage(会话级存储)
    - 存储量大，不自动发给服务器
  3. indexDB
    - 运行在浏览器上的一个非关系数据库
  4. PWA
    - 基于缓存技术的应用模型

## 服务器端渲染(ssr)
  ssr.js


-------------------------------------

# [雅虎军规35条](https://www.jianshu.com/p/4cbcd202a591)
  1. 尽量减少HTTP请求数
  2. 减少DNS查找
  3. 避免重定向
  4. 让Ajax可缓存
  5. 延迟加载组件
  6. 预加载组件
  7. 减少DOM元素的数量
  8. 跨域分离组件
  9. 尽量少用iframe
  10. 杜绝404
  ...

# 性能监控
  performance.getEntriesByType('navigation')


# 回流 与 重绘

# lazy_load

# Vue 
  1. v-if  和 v-show 
  初始化性能  VS 频繁切换性能
  2. 和渲染无关的数据，不要放到data上，data不要嵌套太多层
  3. nextTick
    修改数据的当下，视图不会立刻更新，而是等同一循环中的所有数据变化完成之后  ，再统一进行视图更新
  4. Object.freeze()
    冻结数据，取消setters

# react
  1. 只传递需要的props
    不要随便<Component {...props}>

  2. key 和无状态组件
  3. pureComponent  shouldComponentUpdate
  4. 少在Render中绑定事件
  5. 长列表优化