module.exports = {
  'get /': async ctx => {
    ctx.body = '首页'
  },
  'get /detail': async ctx => {
    ctx.body = '详情页面'
  }
}