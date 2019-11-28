const WebSocket = require('ws')
const wss = new WebSocket.Server({
  port: 3000
})
wss.on('connection', (ws) => {
  console.log('收到链接')
  // 当有消息触发的时候
  ws.on('message', (msg) => {
    console.log('msg',  msg)

    // 广播
    wss.clients.forEach(client => {
      client.send(msg)
    })
  })
})
