- 触屏 重力感应 陀螺仪 手机区别于PC
    touchstart touchmove touchend ?
- 让我们的阴影的部分  感知力度  css border-radius 50%
- 那么张树懒的照片
- 如何将按压的力度 作用到照片
- live-server 启动http服务
    http协议 web底层

- node 内建http 服务
     http.createServer(function(req, res) {
        console.log(req.url);
        // res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.write("欢庆70周年！");
        let fileStream = file.createReadStream(path.join(__dirname, 'index.html'));
        fileStream.pipe(res);
    }).listen(1314)
    一直伺服状态

- http fs path node 内置模块
    index.html
    sloth.png
    一切皆是资源 url 表示
    /    index.html
    /images/sloth.png   sloth.png
    区别  req.url  
    文件类型 : text/html  image/png
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})