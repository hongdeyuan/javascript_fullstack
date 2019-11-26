// 循环移位
// [1, 2, 3, 4, 5, 6, 7] K = 3
// 7 1 2 3 4 5 6
// 6 7 1 2 3 4 5
// 5 6 7 1 2 3 4

// [-1, -100, 3, 99]
// [3, 99, -1, -100]


// 空间复杂度 O(n)
// 时间复杂度 O(n)
var list = [-1, -100, 3, 99], k=2;

// function Rshift (list, k){
//   const arr = [...list]
//   const n = list.length
//   if (k % n === 0) {
//     return arr
//   }
//   for (let i = 0; i < n; i++) {
//     list[i] = arr[(k + i) % n]
//   }
//   return list
// }

// 定义 变量不增加 空间复杂度
// 定义 数组 和对象时，会增加 空间复杂度

// 空间复杂度 1
// function Rshift (list, k){
//   const n = list.length
//   if (k % n === 0) {
//     return list
//   }

//   // 取正整
//   let cnt = Math.abs(K > 0 ? k % n : n + (k % n))
//   let t = null
//   while (cnt--) {
//     t = list[n - 1]
//     // 右移 一位
//     for (let i = n - 1; i > 0; i--) {
//       list[i] = list[i - 1]
//     }
//     list[0] = t
//   }
// }


// 空间复杂度为 常数  ； 时间复杂度 为常数
// 三次 翻转
// [0, n-k-1]
// [n-k, n-1]
// [0, n-1]

// [1, 2, 3, 4, 5, 6, 7] => [6, 7, 1, 2, 3, 4, 5]
// [5, 4, 3, 2, 1, 7, 6]


// [-1, -100, 3, 99]
function reverse (list, start, end) {
  let t = null
  while (start < end){
    t = list[start]
    list[start] = list [end]
    list[end] = t
    start++
    end--
  }
}

function Rshift (list, k){
  const n = list.length
  if (k % n === 0) {
    return list
  }
  reverse(list, 0, n-k-1)
  reverse(list, n-k, n-1)
  reverse(list, 0, n-1)
  return list
}

console.log(Rshift(list, k))