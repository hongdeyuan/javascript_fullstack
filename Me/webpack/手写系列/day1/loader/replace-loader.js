// 拿到入口文件的源码，替换里面的字符

module.exports = function (source) {
  console.log(source)
  const query = this.query
  // console.log(this)
  return source.replace('webpack', query.name)
}