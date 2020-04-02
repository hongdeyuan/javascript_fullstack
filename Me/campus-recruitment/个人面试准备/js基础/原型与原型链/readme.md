# 原型与原型链

## 原型：

  > 原型到底是什么？原型是一个可以被复制（或者叫克隆）的一个类，通过复制原型可以创建一个一模一样的新对象。通俗的说，原型就是一个模板，在设计语言中更准确的说是一个对象模板。

```js
var Person = function(name){
    this.name = name;
}
            
Person.prototype.sayHi = function(){
    console.log("Hello! I am " + this.name + ".");
}
            
var joe = new Person("joe");
var john = new Person("john");
            
joe.sayHi();    //Hello! I am joe.
john.sayHi();   //Hello! I am john.
```
  从上面的代码可以看出来，原型（Person）定义了一些公用的属性和方法；利用原型（Person）创建出来的新对象实例（joe和john对象）会共享原型（Person）的所有属性和方法

  - 原型（Person）的属性和方法总是被原型实例所共享
  - 通过原型创建的新对象实例是相互独立的

## 原型链：

  > 在javascript中，所有的对象都拥有一个__proto__属性指向该对象的原型（prototype)。在上面的代码中，执行console.log(joe.__proto__)后在控制台可以看到输出了原型（Person），然后继续执行console.log(Person.__proto__)，控制台打印的结果是function(){}，为什么Person的原型是function呢？这是因为Person是一个构造函数，它的本质就是一个函数。在javascript中函数是一等对象

  - 原型链是原型对象创建过程的历史记录

### hasOwnProperty 函数：

  hasOwnProperty 函数可以用来检查对象自身是否含有某个属性，返回值是布尔值，当属性不存在时不会向上查找对象原型链。

```js
if（C.hasOwnProperty("a")){
    console.log(c["a"]) //属性 a 不是自身属性，不会执行这一步
}
```

### getOwnPropertyNames 函数：

  getOwnPropertyNames 函数可以获取对象所有的自身属性，返回值是由对象自身属性名称组成的数组，同样不会向上查找对象原型链。

```js
console.log(Object.getOwnPropertyNames(C))  //输出 ["d"]
```