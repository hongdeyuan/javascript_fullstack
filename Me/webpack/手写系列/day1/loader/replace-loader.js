// 拿到入口文件的源码，替换里面的字符

module.exports = function (source) {
  return source.replace('dh', 'dhyuan')
}