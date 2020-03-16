/**
 * @param {string} S
 * @return {string}
 */
var compressString1 = function(S) {
  let length = S.length
  let i = 0
  let count = 1
  let res = ''
  while (i < S.length) {
    if (S[i] === S[i + 1]) {
      count++
    } else if (S[i] !== S[i + 1]) {
      res += S[i] + count
      count = 1
    }
    i++
  }

  return res.length >= length ? S : res
};

// console.log(compressString1('abbccd'))
