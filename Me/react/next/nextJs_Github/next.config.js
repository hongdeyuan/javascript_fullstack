const withCSS = require('@zeit/next-css')

const configs = {
  // 编译文件的输出目录
  distDir: 'dist',
  // 是否缓存页面内容
  onDemandEntries: {
    // 内容在内存中缓存的时长(ms)
    maxInactiveAge: 25 * 1000
  },
  // 服务端渲染和客户端渲染都可以获取的配置
  publicRuntimeConfig: {
    staticFolder: './static'
  }
}

if (typeof require !== undefined ) {
  require.extensions['.css'] = (file) => {

  }
}


module.exports = withCSS({
  // distDir: 'dist'
})