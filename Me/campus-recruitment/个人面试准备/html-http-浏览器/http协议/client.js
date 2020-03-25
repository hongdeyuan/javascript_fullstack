const http = require('http')

// 创建客户端(能发http请求的对象)
// new http.ClientRequest()
// http.request()
// const client = new http.ClientRequest()

// 请求行： get  http://127.0.0.1:80/  http/1.1
const client =  http.request({
  // tcp
  host: '127.0.0.1',
  port: 80,
  // http
  protocol: 'http:',
  method: 'GET',
  path: '/'
}, (res) => {
  // console.log(res)
  // 这个函数会在服务器响应的时候触发
  // res => srcket
  res.on('data', (data) => {
    console.log(data)
  })
})

// 请求的发送需要调用下面的方法
client.write('dhyuan')// 请求内容 Request Body

client.end()
