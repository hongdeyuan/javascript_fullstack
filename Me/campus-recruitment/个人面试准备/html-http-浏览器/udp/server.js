// 服务端 监听当前服务器上指定的ip
// 监听当前服务器上指定的ip与端口，如果有数据发送到给ip 和端口上，我就进行处理

const dgram = require('dgram');
//创建一个socket类，用来处理网络数据的API对象
// 通过socket，我们就可以对网络数据进行读取和输出
// const socket = new dgram.Socket()
const server = dgram.createSocket('udp4');// 套接字

server.on('listening', () =>{
  console.log('服务器开启成功，等待数据')
})

// 当接受到数据的时候
server.on('message', (data) => {
  console.log('服务器接受到的数据: '+ data)
})
// 监听指定的地址和端口
server.bind(3333, '127.0.0.1')


