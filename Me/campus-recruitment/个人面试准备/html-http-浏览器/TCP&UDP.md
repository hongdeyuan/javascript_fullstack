# UDP 
  - 不可靠、无连接的服务、传输效率高
  - 效率要求高，准确性要求相对较低的场景
  - 在线视频，网络语音电话。。


# dgram (数据报)


# TCP协议
  - 可靠性、面向连接的协议、传输效率低
  - 效率要求较低，当准确性相对较高
  - 文件传输、接受邮件、远程登录

# net 
  net 模块用于创建基于流的 TCP 或 IPC 的服务器（net.createServer()）与客户端（net.createConnection()）

  在数据发送的过程中除了有具体发送的数据，还会有一些其他的额外数据
  比如： 接受者和发送者的ip、端口，为了能够让接收数据的一方按照这些数据反馈信息给对方

  同时在发送过程中，数据还要安按照一定的规则进行打包，比如：  会把大数据按照一定的规则，打包成一个一个小的数据包，每隔数据包中都会包含如下的一些信息：

  A --> B
  A 发送的数据：'acbakkg13112' -> 拆包 - 取决于网络速度 来拆分多少个包
  第一个包： {192.168.1.6|8080|acbakkg} ---> 第二个包： {192.168.1.6|8080|13112}

  不同的应用程序会对发送的数据进行自己的二次包装(TCP),
  形成各式各样的传输协议：HTTP, FTP，MAIL

  {192.168.1.6|8080|231231298@qq.com, xxx@qq.com,标题，内容，附件} ->

  {192.168.1.6|8080|{from: '', to: '', content: '', title: '',
   attachment: ''}} 

   => MAIL协议