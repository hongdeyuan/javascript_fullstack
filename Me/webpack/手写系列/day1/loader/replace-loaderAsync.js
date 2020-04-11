// 拿到入口文件的源码，替换里面的字符

const loadUtils = require('loader-utils')

module.exports = function (source) {
  // console.log(source)
  const options = loadUtils.getOptions(this)
  const callback = this.async()// 异步

  setTimeout(() => {
    const res = source.replace('webpack', options.name)
    callback(null, res)
  }, 3000)

}