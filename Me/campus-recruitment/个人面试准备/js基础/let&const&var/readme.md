# var、let和const区别

>  var、let和const的区别在这几方面：变量提升、暂时性死区、重复声明、初始值和作用域。

| 声明方式 | 变量提升 | 暂时性死区 | 重复声明 | 初始值 | 作用域 |
| :----:  | :----: | :----: | :----:  | :----: | :----: |
| var | 允许 | 不存在 | 允许 | 不需要 | 除块级 |
| let | 不允许 | 存在 | 不允许 | 不需要 | 块级 |
| const | 不允许 | 存在 | 不允许 | 需要 | 块级 |

## 一、变量提升

  > 概述：变量可在声明之前使用

```js
console.log(a);//正常运行，控制台输出 undefined
var a = 1;
```

var 命令经常会发生变量提升现象，按照一般逻辑，变量应该在声明之后使用才对。为了纠正这个现象，ES6 规定 let 和 const 命令不发生变量提升，使用 let 和 const 命令声明变量之前，该变量是不可用的。主要是为了减少运行时错误，防止变量声明前就使用这个变量，从而导致意料之外的行为。


## 暂时性死区

  > 如果在代码块中存在 let 或 const 命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。凡是在声明之前就使用这些变量，就会报错

```js
var tmp = 123;

if (true) {
	tmp = 'abc';//报错，Uncaught ReferenceError: tmp is not defined
	let tmp;
}
```
现实是，存在全局变量 tmp，但是块级作用域内 let 又声明了一个 tmp变量，导致后者被绑定在这个块级作用域中，所以在 let 声明变量前，对 tmp 赋值就报错了。

## 三、重复声明

> 指在相同作用域内，重复声明同一个变量

let 和 const 命令声明的变量不允许重复声明:
```js
function func(){
  let a = 10;
  const PI = 3.1415;
  
  var a = 1;// 报错，Uncaught SyntaxError: Identifier 'a' has already been declared
  var PI = 3;// 报错，Uncaught SyntaxError: Identifier 'PI' has already been declared
}
// 当调用func()时报错，Uncaught SyntaxError: Identifier 'a' has already been declared
function func(){
  let a = 10;
  const PI = 3.1415;
  
  let a = 1;// 报错，Uncaught SyntaxError: Identifier 'a' has already been declared
  const PI = 3;// 报错，Uncaught SyntaxError: Identifier 'PI' has already been declared
}
```

var 是允许重复定义的，而这又会给我们带来什么麻烦呢？
```js
var i = 10;
for(var i = 0;i < 5;i++){
  console.log(i);
}
console.log(i);// 输出 5
```
对于学习过静态（类型）语言的人知道，这段代码要是替换成 c 语言或其他静态语言，输出的结果应该是 10。然而对于 javascript 来说，这段代码的输出结果是 5。因为 var 命令没有块级作用域，所以 for 循环括号内的变量 i 会覆盖外层 i，而且 var 允许重复声明，所以这段代码中 i 被声明了两次,i 的最终结果就被 for 循环的 i 给覆盖了


## 四、初始值

 - 由于 const 声明的是只读的常量，一旦声明，就必须立即初始化，声明之后值不能改变。
 - const 简单类型一旦声明就不能再更改，复杂类型(数组、对象等)指针指向的地址不能更改，内部数据可以更改。

```js
const PI = 3.1415;
PI = 3;// 报错，Uncaught TypeError: Assignment to constant variable.
```

## 五、作用域

  > 在 ES5 中只有全局作用域和函数作用域，没有块级作用域，这带来很多不合理的场景。


  第一种场景，内层变量可能会覆盖外层变量
```js
var tmp = new Date();//处于全局作用域

function f() {
  console.log(tmp);//处于函数作用域
  if (false) {
    var tmp = 'hello world';
  }
}

f(); // undefined
```

上面代码的原意是，if代码块的外部使用外层的tmp变量，内部使用内层的tmp变量。
然而现实是在这段代码中，function 内部的2个 tmp 变量处在同一函数作用域，由于变量提升，导致函数作用域中的 tmp 覆盖全局作用域中的 tmp，所以，f()输出结果为undefined。

第二种场景，用来计数的循环变量泄露为全局变量（前面在重复声明中提到的）

```js
var i = 10;
for(var i = 0;i < 5;i++){
  console.log(i);
}
console.log(i);// 输出 5
```

上面代码中，变量i只用来控制循环，但是循环结束后，它并没有消失，泄露成了全局变量。