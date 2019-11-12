# 最新电影小程序

- 数据API：采用豆瓣API http://api.douban.com || https://douban.uieee.com/
  - 特别注意： 
    -  http://api.douban.com 该接口 目前需要带上 apikey  如： http://api.douban.com/v2/movie/subject/${event.movieid}?     apikey=0df993c66c0c636e29ecbb5344252a4a
    - https://douban.uieee.com/ 则不需要 带上 apikey  因为 这个豆瓣提供 的代理服务网址 ，
      具体见： https://github.com/zce/douban-api-docs
- 使用了 Vant UI 框架 具体见： https://youzan.github.io/vant-weapp/#/quickstart
- 云函数：云函数使用具体见： https://mp.weixin.qq.com/



