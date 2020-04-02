# 跨域方案
 答：
  - 两个服务需要通信遵守同源策略：同协议 、 同域名 、 同端口，否则跨域
  - 跨域资源共享 CORS（Cross-origin resource sharing）：
    - Access-Control-Allow-Origin
    - 简单请求：1. 三种方法之一： HEAD GET POST ；2.请求头中的Content-Type请求头的值是下列之一 application/x-www-form-urlencoded、multipart/form-data、text/plain 
    - 非简单请求： options-预检请求，根据Origin字段判断是否是允许的跨域地址，否则不会发送后续的请求

    - 实际上，这是浏览器的同源策略导致的问题：不允许JS访问跨域的Cookie
      1. 服务器端使用CROS协议解决跨域访问数据问题时，需要设置响应消息头Access-Control-Allow-Credentials值为“true”。同时，还需要设置响应消息头Access-Control-Allow-Origin值为指定单一域名（注：不能为通配符“*”）
      2. xhr.withCredentials = true; // 携带跨域cookie

    - Cookie属性
      1. Expires – 过期时间。
        指定cookie的生命期。具体是值是过期日期。如果想让cookie的存在期限超过当前浏览器会话时间，就必须使用这个属性。当过了到期日期时，浏览器就可以删除cookie文件，没有任何影响

      2. Path – 路径。
        指定与cookie关联的WEB页。值可以是一个目录，或者是一个路径。如果/head/index.html 建立了一个cookie，那么在/head/目录里的所有页面，以及该目录下面任何子目录里的页面都可以访问这个cookie。这就是说，在/head/stories/articles 里的任何页面都可以访问/head/index.html建立的cookie。但是，如果/zdnn/ 需要访问/head/index.html设置的cookes，该怎么办?这时，我们要把cookies的path属性设置成“/”。在指定路径的时候，凡是来自同一服务器，URL里有相同路径的所有WEB页面都可以共享cookies。现在看另一个例子：如果想让 /head/filters/ 和/head/stories/共享cookies，就要把path设成“/head”

      3. Domain – 域。
        指定关联的WEB服务器或域。值是域名，比如goaler.com。这是对path路径属性的一个延伸。如果我们想让dev.mycompany.com 能够访问bbs.mycompany.com设置的cookies，该怎么办? 我们可以把domain属性设置成“mycompany.com”，并把path属性设置成“/”。FYI：不能把cookies域属性设置成与设置它的服务器的所在域不同的值
      4. Secure – 安全。
        指定cookie的值通过网络如何在用户和WEB服务器之间传递。这个属性的值或者是“secure”，或者为空。缺省情况下，该属性为空，也就是使用不安全的HTTP连接传递数据。如果一个 cookie 标记为secure，那么，它与WEB服务器之间就通过HTTPS或者其它安全协议传递数据。不过，设置了secure属性不代表其他人不能看到你机器本地保存的cookie。换句话说，把cookie设置为secure，只保证cookie与WEB服务器之间的数据传输过程加密，而保存在本地的cookie文件并不加密。如果想让本地cookie也加密，得自己加密数据
        
  - JsonP
    - link script img : 不受同源策略的影响
    - JSONP只支持GET请求，CORS支持所有类型的HTTP请求。JSONP的优势在于支持老式浏览器，以及可以向不支持CORS的网站请求数据。
    - 何为 JsonP
    - jsonp的整个过程就类似于前端声明好一个函数，
      后端返回执行函数。执行函数参数中携带所需的数据
  - proxy代理