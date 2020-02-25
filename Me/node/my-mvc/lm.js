const Koa = require('Koa')
const { initRouter, initController, initService, loadConfig, initSchedule } = require('./lm-loader')
class lm {
  constructor (conf) {
    this.$app = new Koa(conf)
    loadConfig(this)
    this.$service = initService()
    this.$ctrl = initController()
    this.$router = initRouter(this)
    this.$app.use(this.$router.routes())

    initSchedule()
  }

  start (port) {
    this.$app.listen(port, () => {
      console.log('服务已启动成功 端口:' + port)
    })
  }

}

module.exports = lm