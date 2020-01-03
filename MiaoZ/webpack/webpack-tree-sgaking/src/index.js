import { add, reduce } from './math'

import { includes } from 'lodash'
// babel-plugin-import
// babel-plugin-import 把上面的写法 转为下面的写法
// import { includes } from 'lodash/includes'
console.log(add(1, 2))

console.log(reduce(2 - 1))

console.log(includes([1, 2], 1))