module.exports = app => ({
  index: async ctx => {
    // ctx.body = 'Ctrl Index'
    ctx.body = await app.$model.user.findAll()
  },
  detail: ctx => {
    ctx.body = 'Ctrl Detail'
  }
})