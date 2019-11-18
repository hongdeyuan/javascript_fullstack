// es6 新特性

// es5 版
var distributeCandies = function (candies) {
  var count = 0; // 总类数 unique
  // 糖果的种类数 
  let obj = {};
  // candies.map(candy => {
  //   if (!obj[candy]) {
  //     obj[candy] = 1
  //     count++
  //   }
  // })
  candies.forEach(function(item) {
    // 如果没出现过
    if (!obj[item]) {
      obj[item] = 1;// 出现过了
      count++; // 加上总类数
    }
  })
  return count >= (candies.length >> 1) ? candies.length / 2 : count
}

console.log(distributeCandies([1,1,2,2,3,3]))