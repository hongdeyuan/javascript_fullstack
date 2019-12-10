# 跨域
 - 浏览器的安全策略：
   两个服务需要通信遵守同源策略：同协议 、 同域名 、 同端口
    - 同源 才会 让你 发出请求
    - 不同源 就产生跨域
    - http://localhost:8080/index.html

    - http://localhost.com/api/v

# baidu.com   api.baidu.com

# cors
  - corss-origin-resource-share 
  - 一个规范 ， 允许 服务器声明 哪些源可以访问

# 请求步骤
  1. 简单请求：直接发跨域请求
  2. 复杂请求 先发起 一个 预检(preFlight)请求 (OPTIONS)， 
     预先试探服务端 是否支持 跨越，之后才会发起正式的跨域请求
  简单请求，表单可以构造的请求

# 为什么跨域 时 ，一次请求在 浏览器看到 2次 请求
  - 浏览器对复杂跨域请求的一种处理方式,在真正发送请求之前,会先进行一次预请求,
    就是我们刚刚说到的参数为OPTIONS的第一次请求,他的作用是用于试探性的服务器
    响应是否正确,即是否能接受真正的请求,如果在options请求之后获取到的响应是拒
    绝性质的,例如500等http状态,那么它就会停止第二次的真正请求的访问


# JsonP
  - link script img : 不受同源策略的影响
  - JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。

  - 何为 JsonP
  - jsonp的整个过程就类似于前端声明好一个函数，
    后端返回执行函数。执行函数参数中携带所需的数据

# 简单请求
  只要同时满足以下两大条件，就属于简单请求：
  1) 请求方法是以下三种方法之一：
    HEAD
    GET
    POST
（2）HTTP的头信息不超出以下几种字段：
    Accept
    Accept-Language
    Content-Language
    Last-Event-ID
    Content-Type：只限于三个值application/x-www-form-urlencoded、multipart/form-data、text/plain
# 复杂请求
  - 预检请求
    非简单请求是那种对服务器有特殊要求的请求，比如请求方法是PUT或DELETE，或者Content-Type字段的类型是application/json。

    非简单请求的CORS请求，会在正式通信之前，增加一次HTTP查询请求，称为"预检"请求（preflight）。

    浏览器先询问服务器，当前网页所在的域名是否在服务器的许可名单之中，以及可以使用哪些HTTP动词和头信息字段。只有得到肯定答复，浏览器才会发出正式的XMLHttpRequest请求，否则就报错。

    下面是一段浏览器的JavaScript脚本。
      var url = 'http://api.alice.com/cors';
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', url, true);
      xhr.setRequestHeader('X-Custom-Header', 'value');
      xhr.send();
  - 预检请求的回应
    服务器收到"预检"请求以后，检查了Origin、Access-Control-Request-Method和Access-Control-Request-Headers字段以后，确认允许跨源请求，就可以做出回应
      HTTP/1.1 200 OK
      Date: Mon, 01 Dec 2008 01:15:39 GMT
      Server: Apache/2.0.61 (Unix)
      Access-Control-Allow-Origin: http://api.bob.com
      Access-Control-Allow-Methods: GET, POST, PUT
      Access-Control-Allow-Headers: X-Custom-Header
      Content-Type: text/html; charset=utf-8
      Content-Encoding: gzip
      Content-Length: 0
      Keep-Alive: timeout=2, max=100
      Connection: Keep-Alive
      Content-Type: text/plain
    上面的HTTP回应中，关键的是Access-Control-Allow-Origin字段，表示http://api.bob.com可以请求数据。该字段也可以设为星号，表示同意任意跨源请求。
  - 浏览器的正常请求和回应
    一旦服务器通过了"预检"请求，以后每次浏览器正常的CORS请求，就都跟简单请求一样，会有一个Origin头信息字段。服务器的回应，也都会有一个Access-Control-Allow-Origin头信息字段。