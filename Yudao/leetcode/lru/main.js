//可以被执行的对象函数
function LRUCache(capacity) {
    this.capacity = capacity; //容量
    this.obj = {}; //get set  负责存储数据
    this.arr = []; //存--优先级
    // push 向数组的末尾添加一个或更多元素，并返回新的长度
    //splice 删除元素，并向数组添加新元素
    //pop 删除并返回数组的最后一个元素
    //unshift:向数组的开头添加一个或更多元素，并返回新的长度
}

LRUCache.prototype.get = function(key) {
    // 没有 放回 -1   处理优献级
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
        this.obj[key] = value; //更新值
        //调整优先级，在某个位置？ 删除， 移到最前面
        var index = this.arr.indexOf(key);
        this.arr.splice(index, 1);//删除一个元素
        this.arr.unshift(key);
        return;
    }
    if (this.capacity === this.arr.length) { //表示已经满了
        var k = this.arr.pop();
        this.obj[k] = undefined; //相当于删除k
    }
    this.obj[key] = value;
    this.arr.unshift(key); //放到最最前面 ，最前面是最优先

}

let cache = new LRUCache(2);

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