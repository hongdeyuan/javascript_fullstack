// 这是一个简单的工厂
var XMLHttpFactory = function () {
  
}

XMLHttpFactory.prototype = {
  // 如果真的要调用这个方法 会抛出一个错误，它不能被实例化，只能用来派生子类
  createFactory: function () {
    throw new Error('This is an abstract class')
  }
}

var XHRHandle = function () {
  XMLHttpFactory.call(this)
}

XHRHandle.prototype = new XMLHttpFactory()

XHRHandle.prototype.constructor = XHRHandle // 重新定义createFactory


XHRHandle.prototype.createXMLHttp = function () {
  var XMLHttp = null
  // 处理 浏览器请求兼容
  if (window.XMLHttpRequest) {
    XMLHttp = new XMLHttpRequest()
  } else if (window.ActiveXObject) {
    XMLHttp = new ActiveXObject("Microsoft.XMLHTTP")
  }
  return XMLHttp
}

var AjaxHandler = function () {
  var XMLHttp = XMLHttpFactory.createXMLHttp()//具体操作
}