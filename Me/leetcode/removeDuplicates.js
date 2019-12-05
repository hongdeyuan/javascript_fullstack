// 删除排序数组中的重复项
var nums = [0,0,1,1,1,2,2,3,3,4]
// [1, 1, 1]
// [1, 1]
var removeDuplicates = function(nums) {
  let i = 0
  while(i < nums.length) {
    if (nums[i] == nums[i + 1]) {
      nums.splice(i, 1)
      i = 0
    } else {
      i++
    }
  }
  return nums.length
};
// var nums = [0,0,1,1,1,2,2,3,3,4]
var removeDuplicates1 = function(nums) {
  let count = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[count]!=nums[j]) {
      nums[count+1]=nums[j]
      count+=1
    }
  }
  return count+1
};

console.log(removeDuplicates1(nums))
