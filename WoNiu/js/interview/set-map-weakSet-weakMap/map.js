// const data = {}
// const element = document.getElementById('myDiv')

// data[element] = 'dhyuan'
// data['[object HTMLDivElement]']

// 一般 key 只能为 字符串
// const m = new Map()
// const o = {p: 'dhyuan'}

// m.set(o, 'content') // .set()是map的一个方法， 用来设置或修改实例当中的值
// m.delete(o)
// console.log(m.get(o), m.has(o))

// const items = [
//   ['name', 'dhyuan'],
//   ['sex', 'boy']
// ]

// const map = new Map()

// items.forEach(([key, value]) => map.set(key, value))

// 等效于  const  map = new Map([['name', 'dhyuan'], ['sex', 'boy']])

// 此时会变成 ->  Map 会将数组变成对象
// map = {
//   'name': 'dhyuan',
//   'sex': 'boy'
// }

// console.log(map.size)
// console.log(items.get('name'))

// 实际上不仅仅是数组， 任何具有Iterator接口，
//只要每一个成员都是双元素数组的数据结构， 都可以作为Map的参数
// Set 、Map都可以用来生成新的Map

// const set = new Set([
//   ['foo', 1],
//   ['bar', 2]
// ])

// const m1 = new Map(set)

// console.log(m1.get('foo'))

// const m2 = new Map([['baz', 3]])
// console.log(m2)
// const m3 = new Map(m2)
// console.log(m3.get('baz'), m3)

// const map = new Map()
// map.set(1, 'aaa').set(2, 'bbb')
// console.log(map.get(3)) //undefined



// const k1 = ['a']
// const k2 = ['a']
// 相同的key值在对不同对象的引用，在Map结构中视为2个不同的key，
// map.set(k1, 111).set(k2, 222)
// console.log(map)


// let map = new Map()
// map.set(-0, 124)
// console.log(map.get(+0)) // 123

// map.set(-1, 124)
// console.log(map.get(+1)) // undefined

// map.set(true, 1)
// map.set('true', 2)
// console.log(map.get('true'))

// map.set(undefined, 1)
// map.set(null, 2)
// map.set(NaN, 55)
// console.log(map.get(NaN)) // 22


// const data = {
//   0: {name: 'dhyuan'},
//   1: {name: 'dhyuan1'},
//   2: {name: 'dhyuan2'}
// }

// console.log(data[0])



// 实例属性 和操作方法
// const map = new Map()
// map.set('foo', true)
// map.set('bar', false)
// console.log(map.size)
// map.set('abc', 222).set(222, 'abc').set(undefined, NaN) // 链式调用
// console.log(map.get(222))
// console.log(map.has(NaN)) // 没有 NaN 为 key 的数据
// map.delete(222) // 删除指定 key的数据
// map.clear() // 删除所有元素
// console.log(map)

// key 值不能相等， 否则会被后面的覆盖

// 遍历

// Map 的遍历顺序一定会按照数据本身的顺序进行

// const map = new Map([
//   ['foo', 'no'],
//   ['bar', 'yes']
// ])

// for (let key of map.keys()) {
//   console.log(key)
// }

// for (let key of map.values()) {
//   console.log(key)
// }

// for (let key of map.entries()) {
//   console.log(key)
// }

// for (let [key, value] of map.entries()) {
//   console.log(key, value)
// }

// for (let [key, value] of map) {
//   console.log(key, value)
// }


// for of  只能遍历 具备迭代器的结构
// for in  遍历对象 ， 但不能遍历Map

// console.log(Map.prototype[Symbol.iterator] === Map.prototype.entries)

//  数组 转换为 Map
// const map = new Map([
//   [1, 'one'],
//   [2, 'two'],
//   [3, 'three']
// ])

// let arr = [...map.keys()]
// [...map.values()]
// [...map.entries()]
// console.log(arr)


// map.forEach((value, key, map) => {
//   console.log(key + ':' + value)
// });

// map.map((value, key) => {
//   console.log(key + ':' + value) // 报错 map不是一个方法
// });

// const map = new Map()
// map.set(1, 'one').set(2, 'two').set(3, 'three')

// map 转 数组
//  let arr = [...map]
// arr.filter(([key, value]) => {
//   console.log(key + ': \t' + value) // 报错 map不是一个方法
// });


// map 转 对象
// function setMapToObj(strMap) {
//   let obj = Object.create(null) // {}
//   for (let [k, v]  of strMap) {
//     obj[k] = v
//   }
//   return obj
// }

// let obj = setMapToObj(map)
// console.log(obj)



// 对象转 map
let obj = {
  'yes': true,
  'no': false
}

// function setObjToMap(obj) {
//   let strMap = new Map()
//   for (let item in obj) {
//     strMap.set(item, obj[item])
//   }
//   return strMap
// }

function setObjToMap(obj) {
  let strMap = new Map()
  for (let item of Object.keys(obj)) {
    strMap.set(item, obj[item])
  }
  return strMap
}


console.log(setObjToMap(obj))