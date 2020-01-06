const router = require('koa-router')()
const homeServices = require('../controllers/mySqlConfig')

router.prefix('/home')// 路由前缀

router.get('/', function (ctx, next) {
  ctx.body = 'this is a home response!'
})

// router.get('/applications', async (ctx, next) => {
//   await homeServices.findHomeApplications().then((res) => {
//     ctx.body = res
//   })
// })


//获取首页热门搜索城市列表
router.post('/homeHotCities', async(ctx, next) => {
  await homeServices.findHomeHotCities().then((res) => {
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res,
        message: '获取成功'
      }
    } else {
      ctx.body = {
        code: 404,
        data: 'error',
        message: '没有该数据资源'
      }
    }

  })
  .catch((err) => {
    ctx.body = {
      code: 500,
      data: 'error',
      message: err
    }
  })
})

//获取首页热门搜索城市列表
router.post('/applications', async(ctx, next) => {
  await homeServices.findHomeApplications().then((res) => {
    if (res.length) {
      ctx.body = {
        code: 200,
        data: res,
        message: '获取成功'
      }
    } else {
      ctx.body = {
        code: 404,
        data: 'error',
        message: '没有该数据资源'
      }
    }

  })
  .catch((err) => {
    ctx.body = {
      code: 500,
      data: 'error',
      message: err
    }
  })
})

module.exports = router
