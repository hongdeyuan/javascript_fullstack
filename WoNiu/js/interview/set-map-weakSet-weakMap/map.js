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


let map = new Map()
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


const data = {
  0: {name: 'dhyuan'},
  1: {name: 'dhyuan1'},
  2: {name: 'dhyuan2'}
}

console.log(data[0])