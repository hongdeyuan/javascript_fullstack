//服务器提供数据服务：
//发起请求
//接受请求
//处理请求
//反馈（发送响应）
//注册request的请求事件
//当客户端请求过来 就会自动触发服务期的request请求事件，然后执行第二个参数：回调处理函数
var http = require('http')

//参数1：request:请求    参数2：res:response ：响应
// http.createServer((req, res) => {
//     console.log('connecting success!');
//     res.write('hello');
//     res.end();
// }).listen(5555, '192.168.1.103');


var server = http.createServer();


//request 请求事件处理函数，需要请求两个参数：
//          Request  请求对象
//                  请求对象可以用来获取客户端的一些请求信息 例如请求路径
//          Response 响应对象
//                  响应对象可以用来给客户端发送响应消息

//req.url  : 请求路径 -> http://192.168.1.103/3000/a   ->  输出req.url为 /a
//             请求路径 -> http://192.168.1.103/3000/   ->  输出req.url为 /


//reponse  write  可用来给客户端发送响应数据
//          write可以s使用多次，但是最后一定要使用end  : res.end()  来结束响应，否则客户端一直会处于等待
server.on('request', function(req, res) {
    console.log('收到客户请求！' + req.url);
    res.write('test');
    res.end(); //end 表示服务器的输入完成了，客户端可以接受到数据了
})

// //绑定端口号 ，启动服务
server.listen(3000, () => {
    console.log('服务器启动成功,可以通过 http://192.168.1.103/3000/ 来进行访问');
})