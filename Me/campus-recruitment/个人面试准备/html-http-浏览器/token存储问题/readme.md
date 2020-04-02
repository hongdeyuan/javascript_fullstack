# 关于 token 的存储问题

## JWT：
  csrf 攻击无法获取第三方的 cookie，而是直接使用 cookie进行查询的时候会自动携带 cookie。
  xss攻击通过代码注入可以获取 cookie。需要设置转义。
 
## 方式一
  客户端使用 cookie直接认证，需要设置 cookie为 httpOnly，可以防止 xss攻击。但是无法防止 csrf攻击。需要设置伪随机数 X-XSRF-TOKEN。（推荐！不 需要处理 xss，并且xsrf 随机数有完善的应用机制）
 
## 方式二
  客户端使用 auth授权头认证，token存储在 cookie中，需要防止xss攻击。可以防止 csrf攻击，因为 csrf只能在请求中携带 cookie，而这里必须从 cookie中拿出相应的值并放到 authorization 头中。实际上cookie不能跨站（同源政策）被取出，因此可以避免 csrf 攻击。（适用于 ajax请求或者 api请求，可以方便的设置 auth头）
 
## 方式三
  可以将token存储在 localstorage里面，需要防止xss攻击。实现方式可以在一个统一的地方复写请求头，让每次请求都在header中带上这个token， 当token失效的时候，后端肯定会返回401，这个时候在你可以在前端代码中操作返回登陆页面，清除localstorage中的token。（适用于 ajax请求或者 api请求，可以方便的存入 localstorage）