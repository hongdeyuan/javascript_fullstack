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

// 登录
router.post('/userLogin', async(ctx, next) => {
  var username = ctx.request.body.username
  var userpwd = ctx.request.body.userpwd
  await userServices.userLogin(username, userpwd).then((res) => {
    // console.log('打印结果：', JSON.stringify(res))
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].username
      }
      ctx.body = {
        code: 200,
        data: result,
        message: '登录成功'
      }
    } else {
      r = 'error'
      ctx.body = {
        code: 404,
        data: 'error',
        message: '账号或密码错误'
      }
    }
  }).catch((err) => {
    ctx.body = {
      code: 500,
      data: 'error',
      message: err
    }
  })
})

module.exports = router
