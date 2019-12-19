## 路由学习
  - 哈希（hash）: 不会去到后端
  - url 不好看
  - 好处： 兼容性


  ## history
    - baidu.com -> baidu.com/s/
    - url 好看
    - 坏处： js pushState() 不会引起页面的刷新， 但是 /url4 点击刷， 
      是会把 /url4 发送到后端请求资源的， 后端没做任何处理 404
    - window.add(popstate) : 检测到 浏览器 前进 后退 
      back go forward  这几个行为 带来的url 的变化
      
      pushState: ?
      replaceState: ? 