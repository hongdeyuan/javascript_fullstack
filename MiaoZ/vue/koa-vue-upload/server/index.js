const KoaRouter = require('koa-router')
const Koa = require('koa')
const KoaStatic = require('koa-static')
const KoaCors = require('koa-cors')
const KoaBody = require('koa-body')

app = new Koa()
const router = new KoaRouter()
// 针对单个路由
const path  = require('path')
router.post('/upload', KoaBody({ 
  multipart: true,//多文件上传
  formidable: {
    uploadDir: path.join(__dirname, '/static/'),
    keepExtensions: true,
    hash: true// hash 字符串 MD5 sha256
  }
}), async (ctx) => {
  /**
   * ctx = {
   *  request
   *  response
   * }
   * 
   * .files koabody 自带加上去的
   */
  const diskPath = ctx.request.files.avatar.path
  // basename 取名字 ： c:js/a.jpg
  let fileName = path.basename(diskPath)
  console.log('fileName', fileName)
  ctx.body = {
    code: 200,
    url: `http://localhost:3000/${fileName}`
  }
})

// 全局的中间件
// 顺序
app.use(KoaCors())// 跨域处理
app.use(router.routes())
.use(router.allowedMethods())
app.listen(3000, () => {
  console.log('server is running')
})