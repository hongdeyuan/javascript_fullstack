const net = require('net');


// 创建客户端与udp不同
// net.Socket
// 1. new net.Scoket()
// 2. net.createConnection()



// 要连接的目标主机的地址与端口号
const clientSocket = net.createConnection(3333, '192.168.1.6')


// 监听数据传输
clientSocket.on('data', data => {
  // console.log('服务器返回:' + data)


  // clientSocket.write('get money')


  // clientSocket.write('getBaby')
  console.log('数据:' + data)
})

clientSocket.on('end', data => {
  console.log('数据传输完成')
})