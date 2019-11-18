var fs = require('fs');
var AipOcrClient = require('baidu-aip-sdk').ocr; // 图片识别？  从图片中提取文字
var image = fs.readFileSync('./tcl1.jpg')
.toString('base64'); // 文件本身就是 二进制文本

var APP_ID = '17799069';
var API_KEY = 'vRYzFhcRFxUQbSO7sgcD6OUh';
var SECRET_KEY = 'sBXIYOYwOaGu0Hd8B4ZveGIa8G7jsdRP';

var client = new AipOcrClient(APP_ID, API_KEY, SECRET_KEY)

var options = {};

client.licensePlate(image, options)
.then(function(result) {
  console.log(result);
})
.catch(function(err) {
  console.log(err)
});