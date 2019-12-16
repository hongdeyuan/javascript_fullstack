## call apply bind
  都可以来 绑定 this

  call / apply : 调用函数

```js
function foo(a, b){}
// foo()
// foo.call(this, a, b)
// foo.apply(this, [a, b])
```
函数式编程：
柯里化 (curry)

