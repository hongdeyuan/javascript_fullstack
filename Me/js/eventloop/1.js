let arr = []
console.log('start');// 1

setTimeout(() => {          // callback1
  console.log(111);// 4
  setTimeout(() => {        // callback2
    console.log(222, arr);// 11
  }, 0);
  setImmediate(() => {      // callback3
    console.log(333);// 10
  })
  process.nextTick(() => {  // callback4
    console.log(444);  // 5
  })
}, 0);

setImmediate(() => {        // callback5
  console.log(555);// 8
  process.nextTick(() => {  // callback6
    console.log(666);  // 9
  })
})

setTimeout(() => {          // callback7     
  console.log(777);// 6
  process.nextTick(() => {  // callback8
    console.log(888);// 7
  })
}, 0);

process.nextTick(() => {    // callback9
  console.log(999);// 3
})

console.log('end');// 2

// [文章参考](https://segmentfault.com/a/1190000013102056)