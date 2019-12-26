// ts 基础数据类型
// const isLogin: boolean = false
const decLiteral: number = 6
const hexLiteral: number = 0xf00d

const book: string = "深入浅出 TypeScript"

// void空类型
function users(): void {
  console.log('test')
}

const a: void = undefined
// const b: void = null // 报错
let n: null = null
let u: undefined = undefined

const sym1 = Symbol('key1')
const sym2 = Symbol('key2')
// Symbol('key1') ===  Symbol('key1') // false

// 大数整型
// const max: number = Number.MAX_SAFE_INTEGER
// const max1: number = max + 1n
// const max2: number = max + 2n
// max1 === max2 // false
// const max = BigInt(Number.MAX_SAFE_INTEGER)