function myNew(constructor, ...args) {
  // 1
  let obj = {}
  // 2
  let res =  constructor.call(obj, ...args)
  // 3
  obj.__proto__ = constructor.prototype
  //4
  return res !== undefined ? res : obj
}

// var s1 = myNew(Person, 4)