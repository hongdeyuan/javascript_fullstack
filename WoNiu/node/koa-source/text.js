let a = {
  name: 'dhyaun',
  age: 18
}

let b = a// 浅拷贝
b.friend = 'hm'
console.log(a.friend) // hm

let c = Object.create(a)// 深拷贝
c.sex = 'boy'
console.log(a.sex) // undefined