let http = require('http')//引入http核心模块，来创建服务器
let fs = require('fs')//引入fs 操作服务器的资源文件

let server = http.createServer()

server.on('request',(req,res)=>{
  console.log('收到客户请求！' + req.url)
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html',(err,data)=>{
      if (err) {
        res.setHeader('Content-t\Type','text/plain;charset=utf-8')
        res.end('你需要的资源不存在!');
      }else{
        res.setHeader('Content-t\Type','text/html;charset=utf-8')
        res.end(data);
      }
      
    })
  }if (url === '/dog.jpeg') {
    fs.readFile('./resource/dog.jpeg',(err,data)=>{
      if (err) {
        res.setHeader('Content-t\Type','text/plain;charset=utf-8')
        res.end('你需要的资源不存在!');
      }else{
        res.setHeader('Content-t\Type','text/jpeg;charset=utf-8')
        res.end(data);
      }
    })
  }
})

// //绑定端口号 ，启动服务
server.listen(5215, () => {
    console.log('服务器启动成功,可以通过http://192.168.31.167:5215/ 来进行访问');
})
