function type(vlaue) {
  if (Object.prototype.toString.call(vlaue) === "[object,String]") {
    return true
  }

  return false
  
}