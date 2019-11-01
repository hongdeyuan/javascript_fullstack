// const subPub = {
//   'price': [
//       () => { console.log('fn1') },
//       () => { console.log('fn2') }
//   ]
// }

// //price 对应的方法执行一遍

// for (let fn of subPub.price) {
//   fn()
// }


// //--------------------



// //subPub 上添加一个 value 为数组的 key  (foo)
// //foo 方法放到数组去

// //效果 foo: [ foo ]
// function foo() {
//   console.log('foo')
// }


// subPub.foo = [];

// subPub.foo.push(foo);

// console.log(subPub);


//--------------------

class Events{
  constructor() {
    this.listener = {};
  }
  on(key,fn) {
    //加了中括号 就是 [key] key中的值 为key
    if (!this.listener[key]) {
      this.listener[key] = [];
    }
    this.listener[key].push(fn);
    // this.listener.push(fn);
  }
  emit(key) {
    // console.log(this.listener[key].length);
    for (let fn of this.listener[key]) {
      fn()
    }
  }
}

const ev = new Events()
//订阅
ev.on('abc',() => { console.log("f1") })
//订阅
ev.on('abc',() => { console.log("f2") })
//发布
ev.emit('abc');// 执行的
