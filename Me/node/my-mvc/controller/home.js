module.exports = {
  index: async ctx => {
    ctx.body = 'Ctrl Index'
  },
  detail: ctx => {
    ctx.body = 'Ctrl Detail'
  }
}