// 删除排序数组中的重复项I 21
var nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// [1, 1, 1]
// [1, 1]
var removeDuplicates = function (nums) {
  let i = 0
  while (i < nums.length) {
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
var removeDuplicates1 = function (nums) {
  let count = 0
  for (let j = 0; j < nums.length; j++) {
    if (nums[count] != nums[j]) {
      nums[count + 1] = nums[j]
      count += 1
    }
  }
  return count + 1
};


// 删除排序数组中的重复项II 80
var num = [0,0,1,2,2,2,3,4,4,4]
// [0, 0, 1, 1, 1, 2, 3, 3]  -> i = 3, length = 8


// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]

var removeDuplicates2 = function (nums) {
  let i = 0
  let count = 0
  while (i < nums.length) {
    if (nums[i] == nums[i + 1] && count < 2) {
      count++
      i++
    } else if (count == 2) {
      nums.splice(i, 1)
      count = 0
      i = i - 2
    } else {
      count = 0
      i++
    }
  }

  return nums.length
};

// [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// [1,1,1,2,2,3]   i = 1 j = 1
// [1,1,1,2,2,3]   i = 1 j = 2
// [1,1,2,2,2,3]   i = 2 j = 3
// [1,1,2,2,2,3]   i = 3 j = 4
// [1,1,2,2,3,3]   i = 4 j = 5
var removeDuplicates3 = function (nums) {
  let i = 0
  let count = 1
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] != nums[j]) {
      nums[++i] = nums[j];
      count = 1;
    } else if (count >= 2) {
      continue;
    } else {
      nums[++i] = nums[j];
      count++;
    }
  }
  console.log(nums)
  return i + 1
};

console.log(removeDuplicates3(num))