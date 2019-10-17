//缓存算法
// 函数 首字母大写的函数 ： 一个类
function LRUCache(title) {
    //构造函数
    //类的属性
    // this 是 指针 只有指向要生成的对象
    console.log(this);
    this.title = title;
}

//加方法
LRUCache.prototype.sayHello = function() {
    console.log(`你好，${this.title}`);
}


// 静态方法
// LRUCache.byCar = function() {
//         console.log('火车');
//     } //undefine

// LRUCache.byCar();


//对象 实例
let cache = new LRUCache('井泊然');

//instanceof  是否 是 某个类的实例
console.log(cache instanceof LRUCache);

console.log(cache.__proto__ == LRUCache.prototype)

//console.log(cache.sayHello())