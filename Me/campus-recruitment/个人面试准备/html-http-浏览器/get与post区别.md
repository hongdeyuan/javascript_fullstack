# GET 与POST区别

  ## 区别

  - **GET在浏览器回退时不会再次请求，而POST会再次提交请求**。
  - GET产生的URL地址可以被Bookmark，而POST不可以。
  - **GET请求会被浏览器主动cache，而POST不会，除非手动设置**。
  - **GET请求只能进行url编码，而POST支持多种编码方式**。
  - GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
  - GET请求在URL中传送的参数是有长度限制的，而POST么有。
  - 对参数的数据类型，GET只接受ASCII字符，而POST没有限制。
  - **GET比POST更不安全，因为参数直接暴露在URL上**，所以不能用来传递敏感信息。
  - GET参数通过URL传递，POST放在Request body中。
  - get传送的数据量较小，不能大于2KB。post传送的数据量较大，一般被默认为不受限制

  ## GET和POST还有一个重大区别

    - **GET产生一个TCP数据包；POST产生两个TCP数据包**
    原因： 对于GET方式的请求，浏览器会把http header和data一并发送出去，服务器响应200（返回数据）；POST产生两个TCP数据包，对于POST，浏览器先发送header，服务器响应100 continue，浏览器再发送data，服务器响应200 ok（返回数据），并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次