// const proxy = require('http-proxy-middleware')
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) { 
  app.use(createProxyMiddleware('/api', {target: 'http://xiangxi.red', changeOrigin: true})),
  app.use(createProxyMiddleware('/upload_images', {target: 'https://upload-images.jianshu.io', changeOrigin: true}))
}  
