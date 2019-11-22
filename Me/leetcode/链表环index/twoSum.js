var twoSum = function(nums, target) {
  const map = {}
  const len = nums.length
  for(let i=0;i<len; i++){
      const targetNum = target - nums[i]
      console.log(targetNum, targetNum in map, map)
      // in 索引的是 每一项的 索引号
      if(targetNum in map) return [map[targetNum], i]
      map[nums[i]] = i  
  }  
};

console.log(twoSum([1, 5 , 5, 8], 10))