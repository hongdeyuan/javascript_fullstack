var data = {
  company: {
    name: "Shopee",
    location: {
      country: "China",
      city: "SZ"
    }
  },
  industry: "e-commerce"
}


function Shallow(param, char) {
  if (Object.prototype.hasOwnProperty.call(param, char)) {
    return param[char]
  } else {
    return 'unknown'
  }

}

function getProp(propPath) {
  let arr = propPath.split('.')
  let flag = true
  let str
  let cur = data
  while (flag) {
    if (!arr.length) {
      flag = false
    } else {
      let char = arr.shift()
      let res = Shallow(cur, char)
      if (typeof res === 'object') {
        cur = res
        flag = true
      } else {
        str = Shallow(cur, char)
        flag = false
      }
    }
  }
  return str
}

var ret = getProp('company.location.lng')
console.log(ret)