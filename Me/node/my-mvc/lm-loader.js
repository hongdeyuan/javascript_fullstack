const fs = require('fs')
const path = require('path')
const Router = require('koa-router')
// 读取目录和文件
function load(dir, cb) {
  // 获取绝对路径，（千万记住是 绝对路径）
  //path.resolve('/foo/bar', './baz')   // returns '/foo/bar/baz'
  const url = path.resolve(__dirname, dir)
  // console.log(__dirname)
  // 读取目录
  const files = fs.readdirSync(url)
  // 遍历
  files.forEach(filename => {
    // 祛除扩展名
    filename = filename.replace('.js', '')
    const file = require(url + '/' + filename)
    cb(filename, file)
  })
}




// 加载路由
function initRouter () {
  const router = new Router()
  load('routes', (filename, routes) => {
    // 前缀
    const perfix = filename === 'index' ? '' : `/${filename}`
    Object.keys(routes).forEach(key => {
      const [method, path] = key.split(' ')
      console.log(`正在映射地址：${method.toLocaleUpperCase()} ${perfix}${path}`)

      // 注册路由
      // app.get('/', ctx => {})
      router[method] (perfix + path, routes[key])
    })
  })

  return router
}


module.exports = {
  initRouter
}

// load('routes', filename => console.log('routes' + filename))

// initRouter()