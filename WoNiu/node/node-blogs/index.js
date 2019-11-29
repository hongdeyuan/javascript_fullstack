const Koa = require('koa')
const path = require('path')
const bodyParser = require('koa-bodyparser') // 解析表单中间件
const ejs = require('ejs')
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config/default.js'); // 导入default.js
const Router=require('koa-router')
const views = require('koa-views')
// const koaStatic = require('koa-static')
const staticCache = require('koa-static-cache')

const app = new Koa()
const router = new Router()
app.use(router.routes())
// 做缓存
// app.use(staticCache(path.join(__dirname),'./public'),
//  { dynamic : true }, // 文件夹直接能相互作用
//  { maxAge: 365 * 24 * 60 * 60 })
router.get('*',(ctx, next)=>{
  ctx.body = 'hello world',
  next()
})

app.use(staticCache(path.join(__dirname, './pubilc'), 
  {dynamic: true},
  {maxAge: 365 * 24 * 60 * 60}
))
app.use(staticCache(path.join(__dirname, './images'), 
{dynamic: true},
{maxAge: 365 * 24 * 60 * 60}
))
// 配置服务器端模板，渲染引擎中间件
app.use(views(path.join(__dirname,'./views'),{
  extension: 'ejs'
}
))

app.listen(config.port)
console.log(`listening on port ${config.port}`)