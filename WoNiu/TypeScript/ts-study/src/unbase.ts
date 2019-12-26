// let notSure:any = 4 // 无法确定数据类似时用 any
// notSure = 'dhyuan'

// let value :any
// value = true
// value = 1
// value = "dhyuan"
// value = Symbol('type')
// value = []
// value = {}

// -----------
// value.foo.bar
// value()
// new value()
// value[0][1]
// unknown 与 any有区别


// let val: unknown
// val = true
// val = 1
// val = "dhyuan"
// val = Symbol('type')
// val = []
// val = {}
// -----------
// val.foo.bar// 报错
// val()// 报错
// new val()// 报错
// val[0][1]// 报错


// nerver: 表示不存在的值
// function error(message: string) {
//   throw new Error(message)
// }

// nerver 是任何类型的子类型， 也可以赋值给任何类型
// 然而没有任何类型是 nerver类型的子类型或赋值给nerver类型
// const empty: never[] =[]
// empty.push(1)// 报错： 


// Array
// const list: number[] = [1, 2, 3, 4]
// const list2: Array<number> = [1, 2, 3, 4] // 泛型

// tuple 元组: 存放多种数据类型
// let x: [string, number]
// x = ['hello', 100]
// interface Tuple extands Array<string | number> {
//   0: string,
//   1: number,
//   length: 2
// }

// object
// enum Direction {
//   center = 1
// }

// let value: object

// value = Direction
// value = [1]
// value = [1, 'hello']
// value = {}

// enum 枚举