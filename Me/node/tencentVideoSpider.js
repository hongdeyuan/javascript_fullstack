const https = require('https')
const cheerio = require('cheerio')
const fs = require('fs')

let swipers = []

doubanSpider('https://v.qq.com/x/cover/mzc00200ejsxyf3/z0032cheokf.html',(data) => {
  //得到结果
  console.log(data);

  fs.writeFile('./data/starsIntroduce.json', JSON.stringify(data), (err, data) => {
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
      fs.writeFile('./data/first.html', html, (err, data) => {
        if (!err) {
            console.log('文件写入成功');
        } else {
            console.log('写入失败！');
        }
      })
      //jquery 类似的 $ 选择器
      const $ = cheerio.load(html);

      $('.container_main .mod_people_tabs .mod_people_inner _starlist').each(function(){
        //拿到每一个电影
        //当前的 .pic img
        const picUrl = $('.item .img img',this).attr('src');

        const name =  $('.item .name',this).text();

        // const count = $('.item_content .item_count',this).text();

        swipers.push({picUrl,name})

      })

      cb(swipers);

    })
  })
}

