const http = require('http')

// 创建服务器 http.Server类
// new http.Server() 
// http.createServer()
const server = http.createServer() 

server.on('request', () => {
  console.log('收到了请求')
})

// 80默认端口， 约定， 给http使用
server.listen(80, '0.0.0.0', () => {
  console.log('服务器已经开启：http://localhost:80')
})

