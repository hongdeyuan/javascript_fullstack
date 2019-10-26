const https = require('https');
const http = require('http');
const cheerio = require('cheerio');


// doubanSpider('https://movie.douban.com/top250?start=25',(data) => {
//   //得到结果
//   console.log(data);
// })

//'https://movie.douban.com/top250?start=25'

function doubanSpider(url, cb){
    https.get(url,(res)=>{
    let html = '';
    //流的形式传出
    res.on('data',(chunk)=>{
      html += chunk;
    })
    res.on('end',()=>{
      // console.log(html);
      //jquery 类似的 $ 选择器
      const $ = cheerio.load(html);

      let movies = [];

      $('li .item').each(function(){
        //拿到每一个电影
        //当前的 .pic img
        const picUrl = $('.pic img',this).attr('src');

        const title =  $('.info .title',this).text();

        const star = $('.star .rating_num',this).text();

        const inq =  $('.inq',this).text();

        movies.push({picUrl,title,star,inq});

      })

      cb(movies);

    })
  })
}

http.createServer((req,res) => {
  doubanSpider('https://movie.douban.com/top250?start=25',(data) => {

    // mime 类型 ：
      // application/json json
      // text/plain 纯文本
      // text/html  html
    // console.log(data);

    res.writeHead(200,{
      'Content-type':'application/json',
      'Access-Control-Allow-origin':'*'
    })
    res.end(JSON.stringify(data))

  })
}).listen(3000,() => {
  console.log('后端服务已启动，端口为 3000')
})



