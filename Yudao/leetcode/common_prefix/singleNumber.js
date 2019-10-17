/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
};


const nums = [4, 1, 2, 1, 2];
console.log(singleNumber(nums));