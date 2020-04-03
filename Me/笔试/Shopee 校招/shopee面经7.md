
1. react hooks的useState
  答： useState用来快速生成属性和set方法

2. socket.io
  答： 
  - Socket.IO就是对WebSocket的封装，并且实现了WebSocket的服务端代码。Socket.IO将WebSocket和轮询（Polling）机制以及其它的实时通信方式封装成了通用的接口，并且在服务端实现了这些实时机制的相应代码。也就是说，WebSocket仅仅是Socket.IO实现实时通信的一个子集。Socket.IO简化了WebSocket API，统一了返回传输的API

3. 讲了下http tcp 还有websocket
  答： http是基于tcp进行二次包装的应用层协议，正式它为超文本传输协议，所以一般用来传输音频，图片等数据；而http是无状态的，每次请求都需要进行TCP三次握手；并且http是不安全的，因为是明文进行传输的
      tcp 则是应用在 传输层的协议，对应传输的准确性要求高，它主要应用远程登录、文件传输

4. 一些加密的方法 怎么做

5. react-router的实现原理
  答： 略
  
6. 地址栏变化的时候是否会导致新的生命周期出现
  答： 在地址栏里修改了url，然后回车，组件进入了componentWillReceiveProps这个生命周期，也就是更新组件；再次回车时，就变成重新加载，组件从componentWillMount开始新的生命周期

7. react的生命周期
  答： 略

8. node 中间件方面的知识

9. set weakSet map和weakMap的区别

10. new的实现原理
  答：略
  
11. 移动端和pc端适配吧


想不起来了其他的
问了下平常怎么学习的，是否有写博客的爱好，凉凉