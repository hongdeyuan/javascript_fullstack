function Person() {
  this.age = 20
}
Person.prototype.say = function () {}

function Student () {}

// 继承
// Student.prototype.__proto__ = Person.prototype

// 1 
// Student.prototype = new Person()

// 2
// Object.create 复制
// Student.prototype = Object.create(Person.prototype)


// 3 es6 extends
function myCreate(obj) {
  var F = function () {}
  F.prototype = obj
  return new F()
}

function Student1() {
  // 继承属性
  Person.call(this)
  // this === s
}
// 继承方法
Student1.prototype = myCreate(Person.prototype)
// 修正 constructor
Student1.prototype.constructor = Student1
var s = new Student1()