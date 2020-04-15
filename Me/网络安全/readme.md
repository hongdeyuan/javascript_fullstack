# 网络安全
  - 吴翰清、 
## 常见web攻击方式
  - XSS(Corss-Site Scripting)
    1. 跨站脚本攻击，因为缩写和css重叠，所以叫XSS;
    跨站脚本攻击是指通过存在安全漏洞的web网站注册的用户的浏览器内运行非法的非本站点的html标签或JavaScript进行的一种攻击。
    2. 影响：
      - 利用虚假的输入表单骗取用户个人信息
      - 利用脚本窃取用户的Cookie值，被害者在不知情的情况下，帮助攻击者发送恶意请求
      - 显示伪造的图片和文章
    3. XSS类型
      - 反射型攻击
        1. 普通的： http://localhost:3000/?from=china
        2. alert 尝试 http://localhost:3000/?from=<srcipt>alert(1)</script>
        3. 获取cookie
        4. 短域名伪造

      - 存储型 - 存储到DB后读取注入
        1. <srcipt>alert(1)</script>
        2. <srcipt src="http:localhost:4000/hack.js"></script>
    4. 危害：
      1. 获取页面数据
      2. 获取Cookies
      3. 劫持前端逻辑
      4. 发送请求
      5. 偷取网站的任意数据
      6. 偷取用户资料
      7. 偷取用户秘密和登录状态
      8. 欺骗用户
    5. 防范手段
      1. ejs转义小知识
        - <% code %> 用于执行其中的js代码
        - <% =code %> 会对code进行html转义
        - <% -code %> 不会转义

      2. ctx.set('X-XSS-Protection', 0) 禁止XSS过滤
      3. CSP -内容安全策略  本质就是建立白名单，开发者告诉浏览器哪些外部资源是可以加载的。我们只要做一些配置规则，如何拦截是浏览器的事。
      (Content-Security-Policy: default-src 'self') 只允许加载本站资源
      (Content-Security-Policy: img-src https://* ) 只允许加载https协议图片
      (Content-Security-Policy: child-src 'none') 不允许加载任何资源
      4. 黑名单转义
      function escape(str){
        str = str.replace(/&/g, '&amp')
        str = str.repalce(/</g, '&lt')
        str = str.repalce(/>/g, '&gt')
        str = str.repalce(/"/g, '&quot')
        str = str.repalce(/'/g, '&#39')
        str = str.repalce(/`/g, '&#96')
        str = str.repalce(/\//g, '&#x2f')
      }
      5. 白名单转义
        const xss = require('xss')
        const html = xss('<h1>XSS demo</h1><script>alert(123)</script>')
      6. httpOnly
        值为true时，不允许传cookie， 为false时，允许传cookie

  - CSRF(Corss-Site Request Forgery)
    1. 跨站请求伪造，是一种常见的Web攻击，它利用用户已经登录的身份，在用户毫不知情的情况下，以用户的名义完成非法操作。

    2. 危害
      - 利用用户登录状态
      - 用户不知情
      - 完成业务请求
      - 盗取用户资金(转账、消费)
      - 冒充用户发帖背锅
      - 损害网站名誉

    3. 防御
      1. 禁止第三方网站带Cookie-有兼容性问题
      2. Referer Check - Https 不发送referer
      3. 验证码

  - 点击劫持
  - sql注入
  - OS注入
  - 请求劫持
  - DDos


## 防范方法
  - 密码安全-密码加固
  - 密码学(对称与非对称)
  - 传输安全-HTTPS
  - NodeJS安全框架 hemelt
  - CSP策略