function _instanceof(left, right) {
  const rightVal = right.prototype
  const leftVal = left.__proto__
  // 若找不到就到一直循环到父类型或祖类型
  while(true) {
      if (leftVal === null) {
          return false
      }
      if (leftVal === rightVal) {
          return true
      }
      leftVal = leftVal.__proto__ // 获取祖类型的__proto__
  }
}