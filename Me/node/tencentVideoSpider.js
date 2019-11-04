const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

let swipers = []

doubanSpider('https://m.v.qq.com/x/channel/select/index',(data) => {
  //得到结果
  console.log(data);

  fs.writeFile('./data/data.json', JSON.stringify(data), (err, data) => {
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

      $('.swiper .swiper-wrapper .swiper-slide').each(function(){
        //拿到每一个电影
        //当前的 .pic img
        const picUrl = $('.item_content img',this).attr('src');

        const title =  $('.item_title',this).text();

        const count = $('.item_content .item_count',this).text();

        swipers.push({picUrl,title,count})

      })

      cb(swipers);

    })
  })
}

