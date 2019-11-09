const http = require('http')

http.createServer((req, res) => {

  console.log(req.url, req.method)

  // 'Access-Control-Allow-Credentials': true 是否允许 cookie 传输
  res.writeHead(200, {
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'x-auth, content-type',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true
  })

  // res.end(JSON.stringify({
  //   bookName: 'php'
  // }))

  // jsonP
  res.end(`
    getBook(${JSON.stringify({bookName: 'php'})})
  `)

})
.listen(3000,() => {
  console.log('启动成功： http://localhost:3000')
})