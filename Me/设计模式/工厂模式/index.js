// 这是一个简单的工厂
var XMLHttpFactory = function () {
  
}

// XMLHttpFactory.createXMLHttp 根据当前环境的具体情况来返回一个XHR对象
XMLHttpFactory.createXMLHttp = function () {
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