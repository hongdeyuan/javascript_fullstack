var fs = require('fs')


//读取文件
fs.readFile('../data/test.txt', (err, data) => {
    console.log('打印读写的内容 \t' + data.toString())
})

//写文件   参数一：文件路径  参数二：文件内容  参数三：回调函数

//成功 err : null  失败：err:为错误对象

fs.writeFile('../data/in.text', '测试一下 nodejs 文件写入', (err, data) => {
    if (!err) {
        console.log('文件写入成功');
    } else {
        console.log('写入失败！');
    }
})