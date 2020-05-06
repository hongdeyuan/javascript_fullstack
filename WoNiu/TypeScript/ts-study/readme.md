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