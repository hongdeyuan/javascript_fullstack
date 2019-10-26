const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

let datas = []

doubanSpider('https://movie.douban.com/top250?start=25',(data) => {
  //得到结果
  console.log(data);

  fs.writeFile('./resource/data.json', JSON.stringify(data), (err, data) => {
    if (!err) {
        console.log('文件写入成功');
    } else {
        console.log('写入失败！');
    }
  })

  
})

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

      $('li .item').each(function(){
        //拿到每一个电影
        //当前的 .pic img
        const picUrl = $('.pic img',this).attr('src');

        const title =  $('.info .title',this).text();

        const star = $('.star .rating_num',this).text();

        const inq =  $('.inq',this).text();

        datas.push({picUrl,title,star,inq})

        // console.log({
        //   picUrl,
        //   title,
        //   star,
        //   inq
        // })

      })

      cb(datas);

    })
  })
}

