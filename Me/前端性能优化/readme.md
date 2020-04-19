# 前端性能优化

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
    2. 少执行代码

## 浏览器缓存机制
广义上说，缓存可以分为4个：
1. Http Cache
2. Service Worker Cache
3. Memory Cache
4. Push Cache