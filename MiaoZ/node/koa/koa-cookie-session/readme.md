## cookie
  - 设置cookie方式
    - 前端： document.cookie = 'isLogin=true;max-age=60'
    - 后端：使用koa-router 
      ctx.cookies.set('isLogin', true, {
        maxAge: 1000 * 60
      })