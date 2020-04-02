// 排序数组
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let index = nums.length >> 1
  let indexVal = nums.splice(index, 1)
  let left = []
  let right = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < indexVal) {
      left.push(nums[i])
    } else {
      right.push(nums[i])
    }
  }
  return sortArray(left).concat([indexVal], sortArray(right))
};

var sortArray = function (nums) {
  if (nums.length <= 1) {
    return nums
  }
  let index = nums.length >> 1
  let left = nums.slice(0, index)
  let right = nums.slice(index)
  return mergeSort(sortArray(left), sortArray(right))
};

function mergeSort(left, right) {
  let result = []
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