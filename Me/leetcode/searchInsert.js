// 35. 搜索插入位置
// 输入: [1,3,5,6], 5
// 输出: 2

var searchInsert = function(nums, target) {
    if (nums.indexOf(target) >= 0) {
      return nums.indexOf(target)
    }
    nums.push(target)
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] >= target) {
        return i
      }
    }
};

console.log(searchInsert([1,3,5,6,7,8], 7))