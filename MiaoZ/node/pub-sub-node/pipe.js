const fs = require('fs');

//读取 某个文件  流情况 读写
//createWriteStream   WriteStream
//stream 
// 100G 读一点 写一点
fs.createReadStream('./music.js')
.pipe(
  fs.WriteStream('./music-copy.js')
)


//非流情况 读写
fs.readFile('./index.html',(err,data) => {
  // data 内存
  //先读完  再去写
  fs.watchFile('./index-copy.html',data,(err,res) => {
    if (!err) {
      console.log('write success!')
    }else{
      console.log(err)
    }
  })


})