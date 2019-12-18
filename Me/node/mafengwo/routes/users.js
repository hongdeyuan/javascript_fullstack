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
  var type = ctx.request.body.type
  await userServices.userLogin(username, userpwd, type).then((res) => {
    console.log('打印结果：', JSON.stringify(res))
    let r = ''
    if (res.length) {
      r = 'ok'
      let result = {
        id: res[0].id,
        nickname: res[0].nickname,
        username: res[0].identifier
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


// 注册
router.post('/userRegister', async(ctx, next) => {
  var username = ctx.request.body.username
  var userpwd = ctx.request.body.userpwd
  var nickname = ctx.request.body.nickname
  if (!username || !userpwd || !nickname) {
    ctx.body = {
      code: 501,
      message: '账号，密码，昵称不能为空'
    }
    return
  }
  await userServices.findUser(username).then(async (res) => {
    console.log(res)
    if (res.length) {
      try {
        throw Error('用户名已存在')
      } catch (error) {
        console.log(error)
      }
      ctx.body = {
        code: 502,
        message: '用户名已存在',
        data: 'err'
      }
    } else {
      await userServices.insertUser([username, userpwd, nickname]).then((res) => {
        // console.log(res)
        let r = ''
        if (res.affectedRows !== 0) {
          r = 'ok'
          ctx.body = {
            code: 200,
            data: r,
            message: '注册成功'
          }
        } else {
          r = 'error'
          ctx.body = {
            code: 500,
            data: r,
            message: '注册失败'
          }
        }
      }).catch((error) => {
        ctx.body = {
          code: 500,
          data: error
        }
      })
    }
  })


})

module.exports = router
