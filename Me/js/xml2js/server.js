var xml2js = require('xml2js');
//xml->json
//xml2js默认会把子节点的值变为一个数组, explicitArray设置为false
var xmlParser = new xml2js.Parser({explicitArray : false, ignoreAttrs : true})


//json->xml
// var jsonBuilder = new xml2js.Builder();

//测试用例
var xml = "<root>Hello xml2js!</root>";
var obj = {name: "dhyuan", Surname: "Man", age: 18};

console.log('----------');

// xml -> json
xmlParser.parseString(xml, function (err, result) {
  //将返回的结果再次格式化
   console.log(JSON.stringify(result));
});
console.log('----------');

//json --> xml
var builder = new xml2js.Builder();
// buildObject： 将对象转 xml
var jsonxml = builder.buildObject(obj);
console.log(jsonxml);

console.log('----------');  