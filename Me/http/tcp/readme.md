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


  [TCP三次握手](https://juejin.im/post/5a0444d45188255ea95b66bc)
2. 说说 TCP 三次握手的过程？为什么是三次而不是两次、四次？
  SYN：同步序列编号（Synchronize Sequence Numbers）。是TCP/IP建立连接时使用的握手信号
  - ack —— 确认号码
  - seq —— 顺序号码
  - ISN —— 初始序列号
  - ACK —— 确认，使得确认号有效（握手使用
  - SYN —— 用于初始化一个连接的序列号，建立联机
  - FIN —— 该报文的发送方已经结束向对方发送数据

  第一次握手：(SYN=1, ACK=0, seq=x):Client发送SYN标志位1的包到Server，以及初始序号x（保存在包头的序列号seq字段，简称ISN），和ACK标志位为0，并进入SYN_SEND状态，等待Server确认。

  第二次握手：(SYN=1, ACK=1, seq=y, ack=x+1):Server发回确认包(ACK)应答。即 SYN 标志位和 ACK 标志位均为1。Server确认ISN序列号，放到seq域里，同时将确认序号(ack)设置为Client的ISN加1，即x+1。 发送完毕后，Server进入 SYN_RCVD 状态。

  第三次握手：(ACK=1，seq=x+1，ack=y+1)Client再次发送确认包(ACK)，ACK标志位为1，并且把Server发来ISN的序号字段+1，放在确定字段中发送给对方。发送完毕后，Client和Server建立连接，TCP 握手结束。

  ### 为什么不是两次
  - 根本原因: 无法确认客户端的接收能力

  - 如果是两次，你现在发了 SYN 报文想握手，但是这个包滞留在了当前的网络中迟迟没有到达，TCP 以为这是丢了包，于是重传，两次握手建立好了连接。
  
  - 如果两次握手就可以创建连接 ，传输数据并释放连接后，第一个超时的连接请求才到达 B 机器的话，B 机器会以为是 A 创建新连接的请求，然后确认同意创建连接。因为 A 机器的状态不是 SYl_SENT ，所以直接丢弃了 B 的确认数据 ，以致最后只是 B 机器单方面创建连接完毕

  - 看似没有问题，但是连接关闭后，如果这个滞留在网路中的包到达了服务端呢？这时候由于是两次握手，服务端只要接收到然后发送相应的数据包，就默认建立连接，但是现在客户端已经断开了。看到问题的吧，这就带来了连接资源的浪费

  ### TCP四次挥手

  - 第一次挥手(FIN=1，seq=u)
  Client 想要关闭连接，Client 会发送一个FIN标志位置为1，当前序列号为u的包，表示需要关闭连接了。Client进入 FIN_WAIT_1 状态。

  - 第二次挥手(ACK=1，seq=v，ack=u+1)
  Server收到Client的FIN包之后，会发送一个确认序号为收到的序列号u+1的包，表明自己接受到了Client关闭连接的请求，但还未准备好关闭连接。Server进入 CLOSE_WAIT 状态，Client进入 FIN_WAIT_2 状态。
  
  - 第三次挥手(FIN=1，ACK=1，seq=w，ack=u+1)
  当Server将剩余数据发送完之后，会发送一个自己的FIN包，序列号为u+1。Server进入 LAST_ACK 状态，等待来自Client的最后一个ACK。

  - 第四次挥手(ACK=1，seq=u+1，ack=w+1)
  Client接收到来自Server端的关闭请求之后，发送最后一个ACK确认包，确认序号设置为收到序号加1。Client进入 TIME_WAIT状态，等待可能出现的要求重传的 ACK 包。Server接收到这个确认包之后，关闭连接，进入CLOSED状态。(Client会等待2MSL之后，没有收到Server的ACK ，就确认Server进入CLOSED状态，自己也关闭进入CLOSED状态。)