// 27. 移除元素
// nums = [3,2,2,3], val = 3

var removeElement = function(nums, val) {
  var i = 0
  while (i < nums.length) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  console.log(nums)
  return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))