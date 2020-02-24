// 1. 原生node服务
// const http = require('http')

// const server =  http.createServer((req, res) => {
//   res.end('hello')
// })

// server.listen(3000, () => {
//   console.log('http://localhost:3000')
// })

// 2. koa的服务
const Koa = require('koa')

const app = new Koa()

const main = (ctx, next) =>{
  ctx.response.body = 'hello, dhyuan'
}

app.use(main)
app.listen(3000)