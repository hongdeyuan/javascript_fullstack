const router = require('koa-router')()
const userServices = require('../controllers/mySqlConfig')

router.prefix('/users')// 路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

router.get('/all', async(ctx, next) => {
  await userServices.getAllusers().then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    ctx.body = res
  })
})

module.exports = router
