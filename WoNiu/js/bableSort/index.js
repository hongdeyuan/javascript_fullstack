// 5 4 3 2 1


// 4 3 2 1 5  1轮 4次  arr.length -1 - 0
// 3 2 1 4 5  2轮 3次  arr.length -1 - 1
// 2 1 3 4 5  3轮 2次  arr.length -1 - 2
// 1 2 3 4 5  4轮 1次  arr.length -1 - 3

// 第二次循环
// ...

// 冒泡排序
var test = [5, 4, 3, 2, 1]

function mpFun(arr) {

  // 轮数
  for(let i = 0; i < arr.length -1; i++){
    for(let j = 0; j < arr.length - 1 - i; j++){
      if (arr[j] > arr[j + 1]) {
        let num = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = num
      }
    }
  }

  return arr
}
console.log(mpFun(test))