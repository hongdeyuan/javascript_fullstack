// 图片分类
var AipImageClassifyClient = require('baidu-aip-sdk').imageClassify;
var fs = require('fs'); // 文件模块

var APP_ID = '17798919';
var API_KEY = 'GRqfsqanqlC6P3QNvBsFUWpD';
var SECRET_KEY = 'BuBWLkbVQ1brwBqUM5WpOFWOdR9ZehvX';
// 内存 -> I/O
var image = fs.readFileSync('tcl.jpg').toString('base64'); // 同步Sync

var client = new AipImageClassifyClient(APP_ID, API_KEY, SECRET_KEY);

client.carDetect(image)
.then(function(result) {
  console.log(result);
})
.catch(function(err) {
  console.log(err)
});

// console.log(image)