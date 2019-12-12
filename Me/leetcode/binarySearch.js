// 二分查找 时间复杂度 O(logn) 必须是有序数组
function binarySearch(arr, target) {
	let max = arr.length - 1
	let min = 0
	while (min <= max) {
    // let mid = Math.floor((max + min) / 2)
    let mid = (max + min) >> 1
		if (target < arr[mid]) {
			max = mid - 1
		} else if (target > arr[mid]) {
			min = mid + 1
		} else {
			return mid
		}
	}
	return -1
}
var arr = [ 1, 2, 3, 5, 6, 7, 8 ]
// arr.sort((a, b) => {
//   return a-b
// })
console.log(arr, binarySearch(arr, 6))

// 线性查找
// O(n)
const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
    return i
  }
}
  return -1
}