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

var arr = [12, 23, 123, 53, 67, 34, 24, 89]
// 快速排序
// 1. 基准 ： 选择一个元素作为基准 ：53
// 2. 所有小于 基准的元素 ， 都移到基准的左边，所有大于 基准的元素，都移到 基准的右边
// 3. 对左右两边的子集 重复 1 ，2 步骤
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivotIndex = Math.floor(arr.length >> 1)
  var pivot = arr.splice(pivotIndex, 1)[0]
  var left = []
  var right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  
  return quickSort(left).concat([pivot], quickSort(right))
}

console.log(quickSort(arr))

console.log(mpFun(test))


