let http = require('http')
let EventEmitter = require('events')
let context = require('./context')
let request = require('./request.js')
let response = require('./response.js')
let Stream = require('stream')// 流类型

class Koa extends EventEmitter {
  constructor () {
    super()
    this.fn
    this.context = context
    this.request = request
    this.response = response
  }

  use (fn) {
    this.fn = fn
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
    this.fn(ctx)
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
    // res.end(ctx.body)
  }

  listen (...args) {
    let server = http.createServer(this.handleRequest.bind(this))
    server.listen(...args)
  }
}

module.exports = Koa