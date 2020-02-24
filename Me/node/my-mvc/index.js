const app = new(require('koa'))()
const { initRouter } = require('./lm-loader')
// router.routes()作用：启动路由
app.use(initRouter().routes())

app.listen(3000)