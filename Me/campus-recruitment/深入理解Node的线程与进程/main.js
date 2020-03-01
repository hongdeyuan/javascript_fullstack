const http = require('http')
const server  = http.createServer()

server.on('requset', (req,res) => {
  res.setHeader('Access-Controll-Allow-Origin', '*')
  res.setHeader('Access-Controll-Allow-Headers', '*')
  setTimeout(() => {
    res.end('hello')
  },1000)
})
;
server.listen(3000, () => {
  process.title = '程序员成长的指北针测试进程'
  console.log('进程id', process.pid, 'http://localhost:3000')
})