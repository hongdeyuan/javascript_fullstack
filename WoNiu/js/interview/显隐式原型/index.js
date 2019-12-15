// es5
// function Person (name) {
//   this.name = name
// }

// let p = new Person('wn')
// p.__proto__ === Person.prototype
// console.log(p.__proto__)

// Function.__proto__ === Object.prototype  // false  特例

// var foo = {}
// var foo = new Object()
// var F = function() {}
// Object.prototype.a= 'valA'
// Function.prototype.b = 'valB'

// console.log(foo.a) // valA
// console.log(foo.b) // undifined
// console.log(F.b) // valB
// console.log(F.a) // valA


// es6
// class Person {
//   constructor (name){
//     this.name = name
//   }
// }

// 面试题
// 在构造函数中 除 返回对象 ，其它返回值不影响实例返回值
// function Person (name) {
//   this.name = name
//   return 1 
// }

// let p = new Person('wn')
// console.log(p)


// let arr = []
// let arr1 = new Array()

// Array.prototype.method = function(){}
var myArray = [1, 2, 3, 4, 5, 6, 7]
// myArray.name = 'wn'
// for (let index in myArray) {
//   console.log(index)
// }
for (let index of myArray) {
  console.log(index)
}