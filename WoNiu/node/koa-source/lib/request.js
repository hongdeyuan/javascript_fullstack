let url = require('url')
let request = {
  // 在方法名前 写get 表示 调用时， 不需要写(), 就可以调用 url
  get url() {// 这样就可用 ctx.request.url 取值
    return this.req.url
  },
  get path() {
    return url.parse(this.req.url).pathname
  },
  get query() {
    return url.parse(this.req.url).query
  }
  // ...
}

module.exports = request