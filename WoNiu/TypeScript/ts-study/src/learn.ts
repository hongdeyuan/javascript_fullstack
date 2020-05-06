// ts 基础数据类型

// null 和 undefined
let n: null = null
let u: undefined = undefined
// typescript.js
// var u = undefined;
// var n = null;

// Number类型
const decLiteral: number = 6
const hexLiteral: number = 0xf00d

// 字符串类型
const book: string = "深入浅出 TypeScript"

// Boolean类型
const isLogin: boolean = false

// enum类型，见enum.ts

// any类型- 程序中不断变化着类型，又不想让程序出错，可以使用any类型
var t:any = 10
t = "zgh"
t = true
console.log(t)  //放回true

// void空类型
function users(): void {
  console.log('test')
}

const a: void = undefined
// const b: void = null // 报错


const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
// Symbol('key1') ===  Symbol('key1') // false

// 大数整型
// const max: number = Number.MAX_SAFE_INTEGER
// const max1: number = max + 1n
// const max2: number = max + 2n
// max1 === max2 // false
// const max = BigInt(Number.MAX_SAFE_INTEGER)