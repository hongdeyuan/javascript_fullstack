/**
  * 
  * @param url string字符串 
  * @return string字符串
  * 
  */
function parseUrl(url) {
  let urlJson = {}
  let arr1 = url.split('?')
  let arr2 = arr1[1].split('#')
  let params = arr2[0].split('&')
  let arr3 = arr1[0].split('://')

  let paramObj = {}
  for (let item of params) {
    let k_v = item.split('=')
    paramObj[k_v[0]] = k_v[1]
  }

  let target = arr3[1].indexOf('/')


  urlJson['protocol'] = arr3[0]
  urlJson['host'] = arr3[1].slice(0, target)
  urlJson['path'] = arr3[1].slice(target)
  urlJson['params'] = paramObj
  urlJson['hash'] = arr2[1]
  console.log(urlJson)
}

parseUrl('http://www.baidu.com/api/post?entry=index&ts=1585703058520&id=12#feature')
// module.exports = {
//   parseUrl: parseUrl
// };

// https://www.qiniu.com/products/qcdn
// entry=index&ts=1585703058520
//feature

// let obj = { 
//   'protocol': 'https', 
//   'host': 'www.qiniu.com', 
//   'path': '/products/qcdn', 
//   'params': { 
//     'entry': 'index', 
//     'ts': '1585703058520' 
//   }, 
//   'hash': 'feature' 
// }