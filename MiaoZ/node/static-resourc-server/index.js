const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  console.log(req.url)
  // 图片多 
  if (req.url === '/design.jpg') {
    
  }
  fs.createReadStream('./index.html').pipe(res)
})
.listen(8888, () => {
  console.log('start server: http://localhost:8888')
})