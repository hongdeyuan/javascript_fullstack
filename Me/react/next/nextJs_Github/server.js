const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

// 开发环境
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()

  const router = new Router()
  router.get('/test/a/:id' , async (ctx) => {
    const id = ctx.params.id
    await handle(ctx.req, ctx.res, {
      pathname: '/test/a',
      query: {
        id: id
      }
    })
    ctx.respond = false
  })

  server.use(router.routes())

  // 此处中间件就是一个函数，起到一个承上启下的作用，next表示去执行下一个中间件
  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
    await next()
  })

  server.listen(3000, () => {
    console.log('koa server listening 3000')
  })
})