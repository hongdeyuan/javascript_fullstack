/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function(deck) {
  if (deck.length <= 1) {
    return false
  }
  let obj = {}
  let res = false
  for (let i = 0; i < deck.length; i++) {
    if (!obj[deck[i]]) {
      obj[deck[i]] = 1
    } else {
      obj[deck[i]] ++
    }
  }

  let min = obj[deck[0]]

  Object.keys(obj).map(item => {
    min = Math.min(min, obj[item])
  })
  res = Object.keys(obj).every(item => {
      return obj[item] % 2 === 0 || (obj[item] === min && obj[item] % 2 !== 0) 
  })

  return res
};
// Math.pow(2, k)
// [0,0,0,0,0,1,1,2,3,4]
console.log(hasGroupsSizeX([1,1,1,1,2,2,2,2,2,2]))