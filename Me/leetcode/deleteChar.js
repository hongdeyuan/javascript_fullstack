// 删除 指定字符串
var str = 'dsadaasasdwedwef'

function deleteChar(str, target){
  for (let i = 0; i < str.length; i++) {
    if (str[i] == target) {
      str = str.replace(target, '')
      i = i - 1
    }
    console.log(str)
  }
  return str
}

function deleteChar1 (str, target){
  var arr = str.split(target)
  var strs = arr.join('')
  return strs
}

console.log(deleteChar(str, 'a'))