const Koa = require('koa');
const KoaRouter = require('koa-router')
const fs = require('fs')

// new 一次就新增一个服务
const app = new Koa();

const router = new KoaRouter({prefix: '/api'});

// app.use 加载一个 中间件
// request -> response
// request -> middleWare1 ->  middleWare2 -> response
// ctx: { request, response}

router.get('/user', async (ctx) => {
  let userInfo = fs.readFileSync('./api/user.json').toString();
  ctx.body = {
    code: 200,
    msg: 'success',
    data: JSON.parse(userInfo)
  };
})


const glob = require('glob');
// path 可以用来路径拼接
const path = require('path')
// 同步
glob.sync(path.resolve('./api/', '*.json'))
.forEach((item, i) => {
  console.log(item, i)
  // 获得：  /api/user.json
  let apiJsonPath = item && item.split('/api')[1];
  
  let apiPath = apiJsonPath.replace('.json', '');
  console.log('apiPath: ', apiPath)
  router.get(apiPath, async (ctx) => {
    let fileData = fs.readFileSync(item).toString();
    ctx.body = {
      data: JSON.parse(fileData),
      code: 200
    }
  })
})

// app.use(async (ctx) => {
//   ctx.body = {
//     code: 200,
//     msg: 'success'
//   };
// })

app.use(router.routes())
.use(router.allowedMethods())

app.listen(3000, () => {
  console.log('server is running http://localhost:3000')
})