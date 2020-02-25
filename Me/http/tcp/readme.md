## [TCP协议灵魂之问，巩固你的网路底层基础](https://juejin.im/post/5e527c58e51d4526c654bf41)

1. TCP 和 UDP 的区别
  共同点：位于传输层（两种协议、应用场景、传输内容）
  应用层(Http) -> 表示层(解码和编码..) -> 会话层(session)  -> 传输层(TCP) -> 网络层(IP) -> 数据链路层(mac地址) -> 物理层  OSI七层(open System Interconnection)
  web : TCP/IP   jepg -> Content-Type images/jpeg
  TCP: Transmission Control System 传输控制协议

  客户端 client  浏览器 domain/index.html  10KB  html src 并发http请求
  服务器 Server 

  Http协议 domain -> 服务器IP 建立连接 req
  res  -> Client
  10KB? 字节流 
  TCP 建立连接 可信 可控制
  index.html 10KB 排序 不能少传

  - TCP 是一个面向链接的，可靠的（顺序是可靠的，并且可控制的）， 基于字节流的传输层协议
    buffer(字节流) 
  - UDP 网络直播 ，电影： 以传输速度为主要的要求 数据包的到达 完整性并不要求高
    面向无连接的的传输协议 User Datagram Protocol(用户数据报)

2. 说说 TCP 三次握手的过程？为什么是三次而不是两次、四次？
  SYN：同步序列编号（Synchronize Sequence Numbers）。是TCP/IP建立连接时使用的握手信号
