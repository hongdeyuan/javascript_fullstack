// 接口
const getUserName  = (user: User) => {
  user.say = function (words: string) {
    return 'hello world'
  }
}


interface User {
  name: string,
  age?: number,// ?表示可能存在可能不存在
  readonly isMale: boolean,// 只读，不可修改
  say: Say// (words: string) => string
}

interface Say {
  (words: string): string
}

// interface Config {
//   width?: number,
//   // [propName: string]: any // 添加字符串索引签名时使用
// }
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