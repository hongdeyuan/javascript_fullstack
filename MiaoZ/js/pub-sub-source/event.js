const Event = require('events');
const ev = new Event();

//订阅
ev.on('price',() => {
  console.log('price is 123');
})

//订阅
ev.on('price',() => {
  console.log('price is 189');
})

//发布
ev.emit('price');