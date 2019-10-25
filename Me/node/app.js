var express = require('express')
var app = express()
app.get('/',(req,res)=>{
  res.end('ending..')
})
app.listen(3000,()=>{
  console.log('启动了3000')
})