// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// console.log(Direction.Up)

// 异构枚举
// enum Heterogeneous {
//   No = 0,
//   Yes = 'Yes'
// }

// console.log(Heterogeneous)

// 反向映射 key <=> value
// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// console.log(Direction[Direction['Up']]) // Up


// 联合枚举
// const enum Direction {
//   Up = 'Up',
//   Down = 'Down',
//   Left = 'Left',
//   Right = 'Right'
// }

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// const aa:number = 0
// console.log(aa === Direction['Up'])// true
// type c = 0
// let bb: c
// bb = 1 // 报错-> aa 的 类型为 0
// bb = Direction.Up
// console.log(bb)// 0

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }
// declare let aa: Direction
// enum Animal {
//   Dog,
//   Cat
// }

// aa = Direction.Up
// aa = Animal.Cat // 报错 -> 因为a类型 为 Direction

// 合并

// enum Direction {
//   Up,
//   Down,
//   Left,
//   Right
// }

// enum Direction {
//   Center = 0
// }