// const http = require('http')

// let server = http.createServer((req, res) => {
//   res.end('hello dhyuan')
// })
// server.listen(3000, () => {
//   console.log('http://localhost:3000')
// })

// const Koa = require('koa')
// const app = new Koa()

// app.use((ctx, next) => {
//   ctx.body = 'hello dhyuan!'
// })

// app.listen(3000)

let myKoa = require('./lib/application.js')

let app = new myKoa()

app.use((ctx) => {
  console.log(ctx.req.url)
  console.log(ctx.request.req.url)
  console.log(ctx.response.req.url)
  console.log(ctx.request.url)
  console.log(ctx.response.url)
  console.log(ctx.url)
  console.log(ctx.path)
  ctx.body = {
    name: 'dhyuan',
    age: 18,
    sex: 'boy'
  }
})

app.listen(3000)