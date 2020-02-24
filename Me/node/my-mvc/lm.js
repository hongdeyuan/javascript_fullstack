const Koa = require('Koa')
const { initRouter, initController, initService } = require('./lm-loader')
class lm {
  constructor (conf) {
    this.$app = new Koa(conf)
    this.$service = initService()
    this.$ctrl = initController()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())
  }

  start (port) {
    this.$app.listen(port, () => {
      console.log('服务已启动成功 端口:' + port)
    })
  }

}

module.exports = lm