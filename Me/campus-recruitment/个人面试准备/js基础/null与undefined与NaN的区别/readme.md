# NaN、 null与undefined的区别

## NaN
  1. NaN 为Number的一个特殊值，它与任何值都不相等，包括自己

## null
  > null表示一个值被定义了，但是这个值是空值
  - 作为函数的参数，表示函数的参数不是对象
  - 作为原型链的终点
  - 定义一个值为null是合理的，但是为undefined是不合理的

## undefined
  > undefined表示缺少值，即此处应该有值，但是还未定义
  - 变量声明了，但是还未复制，就为undefined
  - 函数没有返回值，默认为undefined

## 不同点
  - Number(null) 输出 0
  - Number(undefined) 输出 NaN

## 相同点
  - if判断时 都是 false