// 可以被运行的对象叫函数
function LRUCache(capacity) {
  this.capacity = capacity; //容量
  this.obj = {}; // get set  存储数据
  // push splice pop unshift 
  this.arr = []; //优先级
}
LRUCache.prototype.get = function(key) {
  var val = this.obj[key];
  if (val) {
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return val;
  } else {
    return -1;
  }
}
LRUCache.prototype.put = function(key, value) {
  if (this.obj[key]) { //已存在
    this.obj[key] = value;//更新值
    // 调整它的优先级， 在某个位置？ 删除， 移到最前面
    var index = this.arr.indexOf(key);
    this.arr.splice(index, 1);
    this.arr.unshift(key);
    return;
  }
  
  if (this.capacity === this.arr.length) { //放满了
    var k = this.arr.pop();
    this.obj[k] = undefined;
  }

  this.obj[key] = value;
  this.arr.unshift(key); //放到最前面， 最前面是最优先
}


let cache = new LRUCache(2);
// console.log(cache.capacity);
cache.put(2, 1);
console.log(cache.arr, cache.obj);
cache.put(1, 1);
console.log(cache.arr, cache.obj);
cache.put(2, 3); 
console.log(cache.arr, cache.obj);
cache.put(4, 1); 
console.log(cache.arr, cache.obj);
cache.get(1); 
console.log(cache.arr, cache.obj);
cache.get(2); 
console.log(cache.arr, cache.obj);
