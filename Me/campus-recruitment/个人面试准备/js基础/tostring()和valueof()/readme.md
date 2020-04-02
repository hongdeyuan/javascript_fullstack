# [javascript中tostring()和valueof()的用法及两者的区别](https://www.jb51.net/article/74888.htm)

  > 基本上，所有JS数据类型都拥有valueOf和toString这两个方法，null除外

## 1.用法如下：
  1. toString()方法：返回对象的字符串表示。
    - Array	将 Array 的元素转换为字符串。结果字符串由逗号分隔，且连接起来。
    - Boolean	如果 Boolean 值是 true，则返回 “true”。否则，返回 “false”。
    - Date	返回日期的文字表示法。
    - Error	返回一个包含相关错误消息的字符串。
    - Function	返回如下格式的字符串，其中 functionname 是被调用 toString 方法函数的名称：
      function functionname( ) { [native code] }
    - Number	返回数字的文字表示。
    - String	返回 String 对象的值。
    - s默认	返回 “[object objectname]”，其中 objectname 是对象类型的名称。

  2. valueOf()方法：返回指定对象的原始值
    - Array	数组的元素被转换为字符串，这些字符串由逗号分隔，连接在一起。其操作与Array.toString 和 Array.join方法相同。
    - Boolean	Boolean 值。
    - Date	存储的时间是从 1970 年 1 月 1 日午夜开始计的毫秒数 UTC。
    - Function	函数本身。
    - Number	数字值。
    - Object	对象本身。这是默认情况。
    - String	字符串值。

## 2.两者的共同点与不同点：
  - 共同点：在 JavaScript 中，toString()方法和valueOf()方法，在输出对象时会自动调用。
  - 不同点：二者并存的情况下，在数值运算中，优先调用了valueOf，字符串运算中，优先调用了toString。

## toString vs valueOf的差别:

- 返回值类型的差别：

              1. toString一定将所有内容转为字符串

              2. valueOf取出对象内部的值，不进行类型转换

- 用途的差别：

              1. valueOf专用于算数计算和关系运算

              2. toString专用于输出字符串

- 共同的缺点：无法获取null和undefined的值