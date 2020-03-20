/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

// 冒泡
let arr = [4,5,1,6,2,7,3,8]
let k = 4
var getLeastNumbers = function(arr, k) {
  for (let i = 0; i < arr.length -1; i++) {
    for (let j = 0; j < arr.length - i -1; j++) {
      let temp = arr[j]
      if (arr[j] > arr[j+1]) {
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr.slice(0, k)
};

// Array.sort
var getLeastNumbers1 = function(arr, k) {
  arr.sort((a, b) => {
      return a-b
  })
  return arr.slice(0, k)
};

// 归并排序- 解决
var getLeastNumbers2 = function(arr, k) {
  arr = mergeSort(arr)
  return arr.slice(0, k)
};
function mergeSort(arr) {  //采用自上而下的递归方法
  var len = arr.length;
  if(len < 2) {
      return arr;
  }
  var middle = Math.floor(len / 2),
      left = arr.slice(0, middle),
      right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}

// 归并排序
function merge(left, right)
{
  var result = [];
  while (left.length && right.length) {
      if (left[0] <= right[0]) {
          result.push(left.shift());
      } else {
          result.push(right.shift());
      }
  }

  while (left.length)
      result.push(left.shift());

  while (right.length)
      result.push(right.shift());
  return result;
}
console.log(getLeastNumbers2(arr, k))