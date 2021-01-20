/**
 * @param {number[]} nums
 * @return {number}
 * 
 * https://leetcode-cn.com/problems/maximum-product-of-three-numbers/
 * 输入: [1,2,3,4]
 * 输出: 24
 * 
 * [-100,-98,-1,2,3,4]
 */
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);//  先排序
  return Math.max(nums[nums.length - 1]*nums[nums.length - 2]*nums[nums.length - 3], nums[0]*nums[1]*nums[nums.length - 1]);// 求最大
};
console.log(maximumProduct([-100,-98,-1,2,3,4]))