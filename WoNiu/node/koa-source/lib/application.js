let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request.js')
let response = require('./response.js')
let Stream = require('stream')// 流类型

class Koa extends EventEmitter {
  constructor () {
    super()
    // this.fn
    this.middlewares = []
    this.context = context
    this.request = request
    this.response = response
  }

  use (fn) {
    // this.fn = fn
    this.middlewares.push(fn)
  }
  // 接受中间件数组，将ctx对象作为参数
  compose (middlewares, ctx) {
    function dispath(index) {// 利用递归函数 各个中间件串联起来一次调用
      if (index === middlewares.length) {
        return Promise.resolve()// 保证最后一个next不执行
      }
      let middleware = middlewares[index]
      // 用promise.resolve包裹中间件
      return Promise.resolve(middleware(ctx, () => dispath(index + 1)))
    }
    return dispath(0)
  }
  // 创建ctx
  createContext (req, res) {
    const ctx = Object.create(this.context)
    const request = ctx.request = Object.create(this.request)
    const response = ctx.response = Object.create(this.response)
    // 交叉赋值 -> 理解难点
    ctx.req = request.req = response.req = req
    ctx.res = request.res = response.res = res
    request.ctx = response.ctx
    request.response = response
    response.request = request
    return ctx
  }
  // 创建一个处理请求的函数
  handleRequest (req, res) {
    res.statusCode = 404
    let ctx = this.createContext(req, res)// 创建了ctx
    let fn =  this.compose(this.middlewares, ctx)// 代替this.fn(ctx)
    console.log('fn', fn)
    fn.then(() => {
      if (typeof ctx.body == 'object') {
        res.setHeader('Content-Type', 'application/json;charset=utf8')
        res.end(JSON.stringify(ctx.body))
      } else if (ctx.body instanceof Stream) {
        ctx.body.pipe(res)// 处理流类型
      } else if (typeof ctx.body === 'string' || Buffer.isBuffer(ctx.body)) {
        res.setHeader('Content-Type', 'text/html;charset=utf8')
        ctx.end(ctx.body)
      } else {
        res.end('Not find')
      }
    }).catch(err => {
      this.emit('error', err)
      res.statusCode = 500
      res.end('server error')
    })
    
    // res.end(ctx.body)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa