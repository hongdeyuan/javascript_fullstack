// 隐士函数类型 
const add = (a: number, b: number) => a + b

// 显示函数类型
const add1 = (a1: number, b1: number): number => a1 + b1

// 默认参数
const add2 =  (a2: number, b2 = 2): number => a2 + ( b2 ? b2 : 0)

// 剩余参数rest -> arguments
const add3 =  (a3: number,...rest: number[]): number => rest.reduce((a, b) => a + b)

// 重载
interface Directions {
  top: number
  bottom: number
  right: number
  left: number
}
function assigned(all: number): Directions
function assigned(topAndBottom: number, leftAndRight: number): Directions
function assigned(top: number, bottom: number, right: number, left: number): Directions

function assigned(a: number, b?: number, c?: number, d?: any) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a
  } else if (c === undefined && d === undefined) {
    c = a 
    d = b
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  }
}

assigned(1, 2, 3, 4)