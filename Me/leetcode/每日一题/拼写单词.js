/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */

let  words = ["hello","world","leetcode"]
let chars = "welldonehoneyr"

var countCharacters = function(words, chars) {
  let res = []
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let count = 0
    for (let j = 0; j < word.length; j++) {
      const char = word[j];
      count ++
      if (chars.search(char) === -1) {
        count = 0
        j = word.length - 1
      }
    }
    res.push(count)
  }
  let nums = res.reduce((pre, next) => {
    return pre + next
  })

  return nums
};

console.log(countCharacters(words, chars))

var countCharacters = function(words, chars) {
  let charsMap = Array(26).fill(0)
  let ans = 0
  for (let i = 0; i < chars.length; i++) {
      charsMap[chars[i].charCodeAt(0) - 97]++
  }
  for (let i = 0; i < words.length; i++) {
      let word = words[i]
      let wordArr = Array(26).fill(0)
      let learn = true
      for (let j = 0; j < word.length; j++) {
          wordArr[word[j].charCodeAt(0) - 97]++
      }
      for (let i = 0; i < 26; i++) {
          if(wordArr[i] > charsMap[i]) {
              learn = false
              break
          }
      }
      learn && (ans += word.length)
  }
  return ans
};