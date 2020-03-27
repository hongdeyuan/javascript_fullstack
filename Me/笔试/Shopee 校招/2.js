//斐波那契数列
// 递归
function fb (num) {
  return num <= 2 ? 1 : fb(num-1) + fb(num - 2)
}

console.log(udp(6))

// 非递归- 一层for循环

function udp(num) {
  let first = 0
  let second = 0
  let res = 0

  for (let i = 0; i <= num; i++) {
    if (i <= 1) {
      res = 1
      first = 1
      second = 1
    } else {
      res = first + second
      first = second
      second = res
    }
  }
  return res
}
