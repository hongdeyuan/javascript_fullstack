var majorityElement = function(nums) {
    var arr = {},
        val, max_val = 0,
        max_key = 0
    for (var i = 0; i < nums.length; i++) {
        val = nums[i]
        if (arr[val]) {
            arr[val] = arr[val] + 1
        } else {
            arr[val] = 1
        }
    }
    for (var i in arr) {
        if (arr[i] > max_val) {
            max_val = arr[i]
            max_key = i
        }
    }
    console.log(max_val);
    return parseInt(max_key);
};

console.log("众数为: \t " + majorityElement([2, 2, 2, 1, 1, 1, 2, 2, 2]));