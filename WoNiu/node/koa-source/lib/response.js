let response = {
  get body() {
    return this._body
  },
  set body(value) {
    this.res.statusCode = 200
    this._body = value// set时先保存下来
  }
}
// ctx.response

module.exports = response
