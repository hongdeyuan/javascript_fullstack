# typescript 学习

## 安装
  npm install -g typescript
  cnpm install -g typescript
  yarn add -g typescript

## TypeScript是什么
  > TypeScript 是一种由微软开发的自由和开源的编程语言。它是 JavaScript 的一个超集，TypeScript 在 JavaScript 的基础上添加了可选的静态类型和基于类的面向对象编程

## 起步
  - npm init -y : 初始话为一个 node项目， 默认形式生成package.json文件
  - tsc --init ： 生成tsconfig.json 文件， 初始化为 ts 项目
  - tsc -w
  - 目前只有 谷歌浏览器执行在线编译TypeScript

## tsconfig.json配置

```js
{
  "compilerOptions": {
    "target": "ES5",// 指定js版本为ES5
    "module": "commonjs",// 指定commonjs规范
    "moduleResolution": "node",// 选择模块解析器
    "experimentalDecorators": true,// 启用实验性的ES装饰器
    "allowSyntheticDefaultImports": true,// 允许从没有默认导出的模块当中默认导入
    "sourceMap": true,// 生成相应的 .map文件,方便调试
    "strict": true,// 严格模式
    "noImplicitAny": true,//不允许默认的any类型
    "alwaysStrict": true,// 以严格模式解析并为每个源文件生成 "use strict"语句
    "declaration": true, // 生成对于的.d.ts文件（声明文件）
    "removeComments": true,// 删除编译后的所有注释
    "noImplicitReturns": true,//  不是函数所有放回路径都有返回值时报错
    "importHelpers": true,// 辅助工具
    "lib": ["es6", "dom"],// 指定要包含再编译中的库文件
    "typeRoots": ["node_modules/@types"],
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": [
    "./src/**/*.ts"// 入口文件
  ],
  "exclude": [
    "node_modules",
    "dist"// 出口文件
  ]
}
```

## 基本数据类型
 见： learn.ts

TypeScript中的数据类型有：   视频学习：技术胖 https://dhyuan.com/detailed?id=38#toc28
- Undefined:
- Number:数字类型
- string:字符串类型
- Boolean：布尔类型
- enum：枚举类型
- any:任意类型
- void：空类型
- Array：数组类型
- Tuple：元祖类型
- Null：空类型

对比 js 基本数据类型：
- String
- Number
- Undefined
- Null
- Symbol
- Boolean
- Object：
  Array, function, Object

### 类型推论
  如果没有明确的指定类型，那么TypeScript会依照类型推论的规则推断出一个类型
```js
let myNumber = '1'  // 被推断为字符串类型
myNumber = 7 // Type 'number' is not assignable to type 'string'.

// 等价于
let myNumber: string = '1'
myNumber = 7
```
  > 如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查

### 联合类型
  联合类型表示取值可以为多种类型中的一种
```js
let myNumber: string | number
myNumber = '1'
myNumber = 7
myNumber = true
// Type 'boolean' is not assignable to type 'string | number'.
```


## 函数参数
  种类：
  - 可选形参
  - 默认形参
  - 剩余参数形参

### 可选参数的函数
  定义形参的时候可以定义一个可传可不传的参数。（通过?标注）

```js
//可选参数函数
function searchFlower(name:string,feature?:string):string{
    let yy:string = ''
    yy = '觉得'+ name 
    if(feature != undefined){
        yy = yy + feature
    }
    return yy + 'dhyuan'
}

var result:string = searchFlower('dhyuan','帅气的')
console.log(result)  //返回 觉得dhyuan帅气的
```

### 默认参数的函数
  意思就是说 在参数后面 = "dhyuan"
```js
//有默认参数的函数
function searchFlower(name:string = "dhyuan",feature?:string = '热心的'):string{
    let yy:string = ''
    yy = '觉得'+ name 
    if(feature != undefined){
        yy = yy + feature
    }
    return yy + 'ljc'
}

var result:string = searchFlower()
console.log(result)  //返回 找到了荷花白色花朵
```

### 剩余参数的函数
  直接将剩余参数 结构到数组，并且声明 数组内部数据的类型是什么
```js
const add3 =  (a3: number,...rest: number[]): number => rest.reduce(
  (a, b) => a + b)
```

## 三种函数定义的方式

### 函数声明法

```js
// 函数声明法
function add(n1:number,n2:number):number{
    return n1 + n2;
}
console.log(add(3,4)) 
```

### 函数表达式法
  将函数赋值给变量，这个变量名就是函数名。必须在定义之后，调用函数

```js
var add1 = function(n1:number,n2:number):number{
    return n1 + n2;
}
console.log(add1(1,4))
```

### 箭头函数
  TypeScript 完全支持ES6语法。并且，箭头函数定义一般都用于回调函数中

```js
// 箭头函数
var add2 = (n1:number,n2:number):number =>{
    return n1 + n2;
}
console.log(add2(1,4))
```

## 引用类型-数组
  > 引用类型是一种复合的数据类型，引用类型中封装了很多属性，每一个属性都有属性名。TypeScript提供的引用类型 Array  String， Date， RegExp等

```js
let dhyuan = {
    name: 'dhyuan',
    age: 18,
    saySometing:function(){
        console.log('初试引用类型数组')
    }
}
console.log(dhyuan.name)
dhyuan.saySometing() //返回 dhyuan  初试引用类型数组
```

### 初始化数组的两种方法  

  ```js
  let arr1:number[ ]     //声明一个数值类型的数组
  let arr2:Array<string>  //声明一个字符串类型的数组
  ```
### 给数组赋值

```js
//字面量赋值法
let arr1:number[] = [] 
//定义一个数组时，直接给数组赋值
let arr2:number[] = [1,2,3,4,5]

//构造函数赋值法
let arr1:number[] = new Array()
let arr2:number[] = new Array(1,2,3,4,5)

let arr3:Array<string> = new Array('dhyuan','ljc')
let arr4:Array<boolean> = new Array(true,false)

console.log(arr1,arr2,arr3,arr4)
//[] [ 1, 2, 3, 4, 5 ] [ 'dhyuan', 'ljc' ] [ true, false ]
```

### 数组泛型
```js
let arr5: Array<number> = [1, 1, 2, 3, 5];
```

### 用接口表示数组
```js
interface NumberArray {
    [index: number]: number
}
let arr6: NumberArray = [1, 1, 2, 3, 5]
```
> NumberArray表示：只要索引的类型是数字时，那么值的类型必须是数字。 虽然接口也可以用来描述数组，但是我们一般不会这么做，因为这种方法比前两种方式复杂多了。不过有一种情况例外，那就是它常用来表示类数组

## 元组(tuple)
  > 元祖类型 允许表示一个已知元素数量和类型的数组，各元素在类型不必相同
  tuple 元组: 存放多种数据类型

```js
let x : [string,number]
x = ['dhyuan',18]

//元组进阶
interface Tuple extands Array<string | number> {
  0: string,
  1: number,
  length: 2
}
```

## 引用类型-字符串
- 基本类型字符串：...
- 引用类型字符串：new 实例化的String类型

```js
let dhyuan1:string = 'dhyuan'
let dhyuan2:String = new String("dhyuan.com")
console.log(dhyuan1) 
console.log(dhyuan2)
// dhyuan
//[String: 'dhyuan.com']
```

## 引用类型-日期类型

  - 不传递任何参数
  ```js
  let d:Date = new Date()
  console.log(d)// 显示当前的时间
  ```

  - 传递一个整数
  ```js
  let d:Date = new Date(1000)
  let da:Date = new Date(2000)
  console.log(d)  //1970-01-01T00:00:01.000Z
  console.log(da) //1970-01-01T00:00:02.000Z
  ```

  - 传递一个字符
  如果传递一个表示日期的字符串，就会生成相对应的日期对象。字符串的格式常用yyyy/MM/dd hh:mm:ss,
  yyyy-MM-dd hh:mm:ss,
  yyyy-MM-ddThh:mm:ss等
  ```js
  let d1:Date = new Date('2020/05/06 05:30:00')
  let d2:Date = new Date('2020-05-06 05:30:00')
  let d3:Date = new Date('2020-05-06T05:30:00')
  console.log(d1)// 2018-09-05T17:30:00
  console.log(d2)// 2018-09-05T17:30:00
  console.log(d3)// 2018-09-05T17:30:00
  ```

  - 传递表示年月日时分秒的变量
  ```js
  let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
  ```
  year 表示年份，4位数字。
  month表示月份，数值是0(1月)~11(12月)之间的整数。
  day 表示日期。数值是1~31之间的整数。
  hours 表示小时，数值是0-23之间的整数。
  minutes 表示分钟数，数值是0~59之间的整数。
  seconds 表示秒数，数值是0~59之间的整数。
  ms 表示毫秒数，数值是0~999之间的整数。

## 引用类型-正则表达式

### 构造函数法

```js
let reg1:RegExp = new RegExp("dhyuan")  //表示字符串规则里含有dhyuan
console.log(reg1)
let reg2:RegExp = new RegExp("dhyuan",'di')
console.log(reg2)	
```

### 字面量

```js
let reg3:RegExp = /dhyuan/
let reg4:RegExp = /dhyuan/gi
console.log(reg2)	
```

### RegExp中的常用方

  - test(string) ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false
  - exec(string) : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null

```js
let reg1:RegExp =  /dhyuna/i
let website:string = 'dhyuan.com'
let result:boolean = reg1.test(website)
console.log(result)    //true

let reg1:RegExp =  /dhyuan/i
let website:string = 'dhyuan.com'
console.log(reg1.exec(website))
//[ 'dhyuan', index: 0, input: 'dhyuan.com', groups: undefined ] 
```

## 面向对象编程
  见： class.ts
  
### 类中访问修饰符
  - public ：可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
  - protected：受保护的修饰符，可以本类和子类中使用protected修饰的属性和行为。
  - private： 私有修饰符，只可以再类中使用private修饰的属性和行为

### 只读属性修饰符
  使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里面被初始化

```js
class Man{
    public readonly sex:string = '男'
}
var man:Man = new Man()
//man.sex = '女'  //报错
```

### 继承和重写 
  见： class.ts

### 重载
> 重载允许一个函数接受不同数量或类型的参数时，做出不同的处理 比如 实现一个 reverse 函数，输入数字123时 输出反转的数字321

```js
function reverse(x: number): number
function reverse(y: string): string
function reverse(x: number | string): number | string {
  if(typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
  } else {
    return x.split('').reverse().join('')
  }
}
```

## 接口(interface)
  见：interface.ts

## 面向对象编程-命名空间
  不同文件里面变量名一样，导致冲突，那么使用命名空间就可以解决这个问题

```js
namespace Man{
    export class person{
        public name:string = "dhyuan"
        talk(){
            console.log(`I am ${name}`)
        }
    }
}

namespace Boy{
    export class person{
        public name:string = "ljc"
        talk(){
            console.log(`I am ${name}`)
        }
    }
}

let one1:Man.person = new Man.person()
let one2:Boy.person = new Boy.person()
one1.talk()  // I am dhyuan
one2.talk() // I am ljc
```


## 类型断言

### 语法
  ```js
  <值> as <类型>
  // or 
  <类型>值
  ```
  > 在tsx语法中必须使用第一种(as)，因为<>包裹在tsx中可表示标签，且在ts中除了表示类型断言以外，也可能表示一个泛型。因此 建议使用第一种语法。

### 用途
  1. 将一个联合类型断言为其中一个类型
  当TypeScript不确定一个联合类型的变量到底是哪个类型的时候，我们只能访问此联合类型的所有类型中共有的属性或方法。那如果我们确实要在还不确定的时候访问其中一个类型特有的属性或方法呢？此时可以使用类型断言。
  ```js
  interface Cat {
    name: string
    run(): void
  }
  interface Fish {
      name: string
      swim(): void
  }
  function isFish(animal: Cat | Fish) {
      if (typeof (animal as Fish).swim === 'function') {
          return true
      }
      return false
  }
  ```
  > 类型断言只能够欺骗TypeScript编译器，是编译时不报错，但无法避免运行时的错误，滥用类型断言可能会导致运行时错误

  ```js
  interface Cat {
    name: string
    run(): void
  }
  interface Fish {
      name: string
      swim(): void
  }
  function swim(animal: Cat | Fish) {
      (animal as Fish).swim()
  }
  const tom: Cat = {
      name: 'Tom',
      run() { console.log('run') }
  }
  swim(tom)
  // Uncaught TypeError: animal.swim is not a function`
  ```
  上面的例子编译时不会报错，但运行时会报错

  2. 将一个父类断言为更加具体的子类
    当类之间有继承关系时，类型断言也是很常见的
  ```js
  class ApiError extends Error {
    code: number = 0
  }
  class HttpError extends Error {
      statusCode: number = 200
  }
  function isApiError(error: Error) {
      if(typeof (error as ApiError).code === 'number') {
          return true
      }
      return false
  }
  ```

  可能你会觉得 这里用instanceof更合适
  ```js
  function isApiError(error: Error) {
    if(error instanceof ApiError) {
        return true
    }
    return false
  }
  ```
  在这里 确实是使用instanceof更合适，但是有些情况下，ApiError 和 HttpError 不是一个真实的类，而是一个TypeScript的接口，接口是一个类型，不是真正的值，他在编译结果中会被删除，当然就无法使用 instanceof 来做运行时的判断了

  3. 将任何一个类型断言为any
    理想情况下，TypeScript的类型系统运转良好，每个值的类型都是具体而精确的。当我们引用一个在此类型上不存在的属性或方式时，就会报错
  ```js
  const foo: number = 1
  foo.length = 1
  // Property 'length' does not exist on type 'number'.
  ```

  但是有时候 我们非常确定这段代码不会出错，比如
  ```js
  window.foo = 1
  // Property 'foo' does not exist on type 'Window & typeof globalThis'.
  ```
  4. 将 any 断言为一个具体类型

    在日常开发中，我们不可避免需要处理 any 类型的变量，它可能是由于第三方库不能定义好自己的类型，也可能是历史遗留问题或是别人写的烂代码，还可能是受到TypeScript类型系统的限制而无法精确定义类型。我们可以不加理会，让它继续滋生更多的 any, 也可以选择改进它，通过类型断言及时把any 断言为更精确的类型。使我们的代码向着高可维护性的目标发展。
    例如下面这个历史遗留的函数，返回的类型是any
  ```js
  function getCacheData(key: string): any {
    return (window as any).cache[key]
  }
  ```

  我们在使用的时候，最好能够将调用它之后的返回值断言成一个精确的类型
  ```js
  interface Cat {
    name: string;
    run(): void
  }
  const tom = getCacheData('tom') as Cat
  ```

### 断言的限制

  要使得A能够被断言为B，只需要 A 兼容 B 或 B 兼容 A 即可
总结：

  - 联合类型可以被断言为其中一个类型
  - 父类可以被断言为子类
  - 任何类型可以被断言为any
  - any类型可以被断言为任何类型
  - 要使得A能够被断言为B,只需要A 兼容B或B兼容A 即可

### 双重断言
  既然 任意类型可以被断言为any any可以被断言为任意类型，那么是否可以使用双重断言

```js
interface Cat {
    run(): void
}
interface Fish {
    swim(): void
}
function testCat(cat: Cat) {
    return (cat as any as Fish)
}
```
  > 使用双重断言，很有可能会导致运行时错误，所以除非迫不得已，千万别用双重断言

### 类型断言 vs 类型转换
  类型断言只会影响TypeScript编译时的类型，断言语句在编译结果中会被删除。不会真的影响到变量的类型

### 类型断言 vs 类型声明

```js
function getCacheData(key: string): any {
    return (window as any).cache[key]
}
interface Cat {
    name: string;
    run(): void
}
const tom = getCacheData('tom') as Cat
tom.run()
```

上面的代码 我们用函数声明的方式实现

```js
function getCacheData(key: string): any {
    return (window as any).cache[key]
}
interface Cat {
    name: string,
    run(): void
}
const tom: Cat = getCacheData('tom')
tom.run()
```

从上面的例子发现，这和类型断言是非常的相似，产生的结果也几乎一样。它们的区别，可以通过下面这个例子来理解

```js
interface Animal {
    name: string
}
interface Cat {
    name: string;
    run(): void
}
const animal: Animal = {
    name: 'tom'
}
let tom = animal as Cat
```

因为animal 兼容 Cat 所以可以将animal 断言为 Cat 赋值给tom

```js
let tom: Cat = animal
// Property 'run' is missing in type 'Animal' but required in type 'Cat'.
```

若将tom 定义为Cat 类型 并赋值为 animal 则会报错，因为animal 是Animal的实例，而Cat 相当于 Animal 的子类，将父类的实例 赋值给子类的变量，显然是不可以的。
由此 我们可知，类型声明 比 类型断言更严格。

> animal 断言为Cat, 只要满足 Animal 兼容Cat, 或 Cat 兼容Animal; animal 赋值给tom, 必须满足Cat 兼容Animal

### 类型断言 vs 泛型
  于上面那个例子 我们还可以通过泛型解决

```js
function getCacheData<T>(key: string): any {
    return (window as any).cache[key]
}
interface Cat {
    name: string,
    run(): void
}
const tom  = getCacheData<Cat>('tom')
tom.run()
```

通过给getCacheData 添加泛型，我们更规范的约束了函数的返回值，同时也去掉了代码中的any，是最优解决方案


## 声明文件

- 声明语句
> 假如我们要使用jQuery，在html中 我们通过`<script>`引入jQuery，然后就可以使用全局变量$ 或jQuery。但是在ts中，它并不知道$和jQuery是什么，所以我们需要进行声明

```js
declare var jQuery: (selector: string) => any
jQuery('#foo')
```
这里的declare var 仅仅用于编译时的检查，在编译结果中会被删除

- 声明文件
  通常我们会把声明语句放到单独的文件中，这个文件我们称之为声明文件，声明文件必须以.d.ts作为后缀

```js
// src/jQuery.d.ts
declare var jQuery: (selector: string) => any

// src/index.ts
jQuery('#foo')
```

- 第三方声明文件
  社区已经帮我们定义好了一些[声明文件](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types)，我们可以直接下载来用，但是更推荐使用@types（直接用npm安装对应的声明模块即可） 统一管理第三方库的声明文件.

```js
// 以jquery为例：
npm install @types/jquery --save-dev
```

就目前来说，在实际应用中，常见的第三方库的声明文件，我们都可以在社区或npm上找到。如果没有找到，则需要我们自己写，关于如何写声明文件及发布声明文件 

### 内置对象
  - JavaScript有很多内置对象，它们可以在typescript中直接使用
  - ECMAScript 标准提供的内置对象有：Boolean,Error,Date,RegExp

  ```js
  let b: Boolean = new Boolean(1)
  let e: Error = new Error('Error')
  let d: Date = new Date()
  let r: RegExp = /[a-z]/
  ```

更多的内置对象可查看 [文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects)
DOM 和 BOM的内置对象有: Document,HTMLElement, Event, NodeList
```js
let body: HTMLElement = document.body
let allDiv: NodeList = document.querySelectorAll('div')
document.addEventListener('click', function(e: MouseEvent) {
    ...
}
```