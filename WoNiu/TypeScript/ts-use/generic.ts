// 泛型
// let arr: number[] = [1, 2, 3]
// let arr1:Array<number> = [1, 2, 3]
// let arr1:Array<number | string> = [1, 2, 3, '4']

// 元组
// let x: [string, number]
// x = ['hello', 100]

// 泛型
// 声明泛型变量<T> ，它用于捕获开发者传入的类型
// 我们就可以使用<T>做参数的返回类型
// function returnItem<T>(param: T): T {
//   return param
// }


// function swap<T, K>(tuple:[T, K]) {
//   return [tuple[0], tuple[1]]
// }
// swap([1, '2'])

// 泛型变量
// function getArrayLength<T>(arg: Array<T>): Array<T> {
//   console.log(arg.length)
//   return arg
// }

// 泛型接口
// interface ReturnItem<T>{
//   (param: T): T
// }

// const returnItem: ReturnItem<number> = para => para

// 泛型类
// type Params = number | string
// class Stack<T extends Params> {
//   private arr: T[] = []

//   public push (item: T) {
//     this.arr.push(item)
//   }

//   public pop () {
//     this.arr.pop()
//   }
// }

// const app = new Stack()
// app.push('123')


// 泛型约束
// const stack1 = new Stack<number>() // 可以
// const stack2 = new Stack<string>() // 可以
// const stack3 = new Stack<boolean>() // 此时，报错， 因为进行了泛型约束


// 泛型约束与索引类型
// function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
//   return obj[key]
// }

// const obj = {
//   name: 'wn',
//   age: 18
// }

// getValue(obj, 'age')

// 使用多重类型进行泛型约束
// interface FirstInterface {
//   doSomething (): number
// }

// interface SceondInterface {
//   doSomethingElse (): string
// }

// interface superInterface extends FirstInterface, SceondInterface {
// }

// class Demo<T extends superInterface> {
//   private genericProperty: T

//   useT () {
//     this.genericProperty.doSomething()
//     this.genericProperty.doSomethingElse()
//   }
// }

// 泛型与 new
// {new(): T} 泛型可被构造
function factory<T>(type: {new(): T}): T {
  return new type()
}