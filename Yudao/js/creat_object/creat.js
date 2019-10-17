function creat(obj) {
  // 放回一个实例
  // 对象 它的原型对象是obj
  // var creat = new Object();
  // creat.__proto__=obj;
  function F() { };
  F.__proto__=obj;
    return new F();
}

var Person = {
  age: 0,
  greet: function () {
    console.log(`Hello ,${this.name}`);
  }
}

var bob = creat(Person);

console.log(bob);