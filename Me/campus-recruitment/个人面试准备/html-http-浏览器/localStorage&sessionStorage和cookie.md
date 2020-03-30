# localStorage，sessionStorage和cookie的区别

  ## cookie和session的区别

  - cookie数据存放在客户的浏览器上，session数据放在服务器上
  - session保存在服务器，客户端不知道其中的信息；反之，cookie保存在客户端，服务器能够知道其中的信息
  - session中保存的是对象，cookie中保存的是字符串
  - session不能区分路径，同一个用户在访问一个网站期间，所有的session在任何一个地方都可以访问到，而cookie中如果设置了路径参数，那么同一个网站中不同路径下的cookie互相是访问不到的

  ## localStorage，sessionStorage和cookie的区别

  - cookie数据始终在同源的http请求中携带（即使不需要），即cookie在浏览器和服务器间来回传递。cookie数据还有路径（path）的概念，可以限制cookie只属于某个路径下
  - cookie数据不能超过4K，同时因为每次http请求都会携带cookie
  - sessionStorage和localStorage虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大
  - sessionStorage：仅在当前浏览器窗口关闭之前有效
  - localStorage：始终有效，窗口或浏览器关闭也一直保存，本地存储，因此用作持久数据
  - cookie：只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭,如果未设置，关闭浏览器或窗口则过期
  - localstorage在所有同源窗口中都是共享的；也就是说只要浏览器不关闭，数据仍然存在
  - cookie: 也是在所有同源窗口中都是共享的.也就是说只要浏览器不关闭，数据仍然存在
  - sessionStorage不在不同的浏览器窗口中共享，即使是同一个页面