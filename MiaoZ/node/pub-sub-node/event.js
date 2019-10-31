// event 模块
const Event = require('events');

const ev = new Event();

//订阅
ev.on('price',(a,b,c) => {
  console.log(a,b,c,'涨了！')
});

ev.on('price',(a,b) => {
  console.log(a,b,'涨好多了！')
});

//发布
ev.emit('price','猪肉','牛肉','房价');