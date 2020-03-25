# HTTP协议（(HyperText Transfer Protocol）
  概念：HTTP是一个基于TCP/IP通信协议来传输（超文本）数据
  - HTTP是基于TCP/IP协议来定位传输数据
  - 同时在TCP/IP包基础上对要传输的数据进行再次包装
  - HTTP 是单向单链接，无状态协议
  - HTTP它指定了客户端可能发送给服务器什么样的消息以及得到什么样的响应

http: 传输 ht (超文本-html、音频、图片等) 这样的规则

URL（Uniform Resource Locator,统一资源定位符）

- HTTP规定了请求发送的数据格式
  Request 消息分三部分：
    - Request Line: 请求行
      （包含：Method, Path-to-resoure）(请求资源)
    - Request Header: 请求头
    - Request Body: 请求正文
- HTTP规定了返回的数据格式
- HTTP规定了传输规则

http://ietf.org (官网) - RFC （一系列以编号排定的文件)

# HTTP - Node.js