// 在node中 tcp 协议
const fs = require('fs')
const net  = require('net')

// 创建一个服务器 
// 1. 监听地址端口 ；2. 处理发送到当前监听地址以及端口的数据
// 3. 返回(发送) 数据到连接的客户端
const server = net.createServer(() =>{
  // 这个函数其实就是connection事件绑定函数
})

// function createServer() {
//   let s = new net.Server()
//   s.on('connection', callback)
//   return s
// }

// 连接
server.on('connection', (socket) => {
  // socket 当前连接的socket对象
  console.log('客户端正在连接')

  // 可写流对象
  // socket.write('hello dhyuan')
  let data1 = fs.readFileSync('../布局.png')
  socket.write(data1)// 二进制流 Buffer

  socket.on('data', data => {
    // socket.write('show me the money')
    console.log(data)
    
  })
})



// 监听地址和端口
server.listen(3333, '0.0.0.0',  () => {
  console.log('正在监听3333端口')
})

