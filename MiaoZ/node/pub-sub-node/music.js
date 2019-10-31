// 发布-订阅者模式  node 快速下载小工具  node music.js 
// console.log(process.argv);
const Event = require('events');
const request = require('request');
const inquirer = require('inquirer');
const fs = require('fs');

const ev = new Event();


//入口
function main(argv) {
  if (argv.length) {
    let searchName = argv[0];
    console.log(searchName);

    //模块解耦
    ev.emit('search',searchName);


  }
}

//下载模块
ev.on('download',(id) => {

  request({
    url: `http://neteasecloudmusicapi.zhaoboy.com/song/url?id=${id}`,
    method: 'GET',
    json: true
  },(err,res) => {
    if (err) {
      console.log(err)
    }else{
      const body = res.body;
      // console.log('地址',body.data[0].url);
      if (body.data && body.data[0] && body.data[0].url) {
        //下载
        request(body.data[0].url).pipe(
          fs.createWriteStream(`./${id}.mp3`)
        )
      }else{
        console.log('没有找到该歌曲，请重选');
      }
      
    }
  })

})

//搜歌模块
ev.on('select',(songList) =>{

  //生成一个列表  prompt-生成列表、expand-展开、input-输入
  inquirer.prompt([
    {
      type: 'list',
      name: 'song',
      message: `共有${songList.result.songCount}首歌，回车下载`,
      choices: songList.result.songs.map(song => {
        return {
          value: song.id,
          name: song.name + (song.artists[0] ? song.artists[0].name : '' )
        }
      })
    }
  ])
  .then(id => {
    // console.log('选择了', id)
    id = id.song;

    // 下载歌曲
    ev.emit('download',id);


  })



})

//搜索功能模块-函数
ev.on('search',(searchName) => {
  //  http://neteasecloudmusicapi.zhaoboy.com/search?keywords=偏爱
  // /search?keywords=偏爱


  //编码
  searchName = encodeURIComponent(searchName);

  //http - 请求
  request({
    url: `http://neteasecloudmusicapi.zhaoboy.com/search?keywords=${searchName}`,
    method: 'GET',
    json: true
  },(err,body) => {
    if (err) {
      console.log(err)
    }else{
      // console.log(body.body);
      ev.emit('select',body.body);
    }
  })

})



main(process.argv.slice(2));//只取第三项

