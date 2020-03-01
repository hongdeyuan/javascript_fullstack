## 深入理解node.js中的进程与线程

- 前端的角度 来看待进程与线程
- node 进程子进度 cluster 多核CPU的利用
- pm2 线上node 运行进程管理
- docker 容器
- k8s

1. 从前端角度开始
  Node.js是单线程吗？  js 运行在服务器端
  是 -> GG
    js 是单线程  html css js .vue .jsx node koa
    java 主线程 ，开辟新的线程的概念
    基于事件的机制 event loop 回调  另一角度解决了能力
  不是，
  ajax ? 微软公司
  新的线程创建出来的 ajax 单线程
  JS 单线程的  但是JS宿主浏览器(容器)， 多线程 (http并发， img  css html js)，多线程
  注册在主线程 event 事件里
  线程间可以相互通行
2. node 当前的 main.js 进程  <=>  process  pid
  服务器天生就是多线程的，分布式的 
  js 在服务器端执行的 单线程的

  node 是服务器端js 执行的容器, 但是node是多进程的 node 10. 多线程

