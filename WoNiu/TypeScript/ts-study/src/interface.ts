// 接口
const getUserName  = (user: User) => {
  user.say = function (words: string) {
    return 'hello world'
  }
}


interface User {
  name: string,// 必选
  age?: number,// ?表示 可选 可能存在可能不存在
  readonly isMale: boolean,// 只读，不可修改
  say: Say// (words: string) => string
}

interface Say {
  (words: string): string
}

// 任意属性
interface Config {
  width?: number,// 可选
  [propName: string]: any // 添加字符串索引签名时使用
}

let conf: Config = {
  width: 18,// 可选属性匹配
  height: 20// 任意属性匹配
}

// function CalculateAreas(config: Config): {area: number} {
//   let square = 100
//   if (config.width) {
//     square = config.width * config.width
//   }
//   return {area: square}
// }
// let mySquare1 = CalculateAreas({width: 5})

// 类型断言
// let mySquare2 = CalculateAreas({widdth: 5} as Config)// 当属性名widdth 与width不一致时，使用类型断言

// 添加字符串索引签名
// let mySquare3 = CalculateAreas({widdth: 5})// [propName: string]: any

// 将字母量赋值给另外一个变量 ->尽量不使用
// let options = {widdth: 5}
// let mySquare4 = CalculateAreas(options)

interface SupperUser {
  getGrade: () => void
}

// 继承接口
interface VIPUser extends User, SupperUser {
  broadcast: () => void
}