// 删除排序数组中的重复项
var nums = [1,1,1]//[0,0,1,1,1,2,2,3,3,4]
// [0, 1, 2, 3, 4]
var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        console.log(i,j)
        nums.splice(j, 1)
      }
    }
  }
  return nums
};

console.log(removeDuplicates(nums))