## 纯函数
  1. 相同的输入 会有相同的输出
  2. 不会产生 副作用
    f(x) = x ^ 2
    f(1) = 1 ^ 2
    f(2) = 2 ^ 2
    f(3) = 3 ^ 2
  3. 纯函数好处
    - 易于测试
    - 易于缓存
## 常见 不纯函数 
    1. I/O
    2. Math.random()
    3. appendChild ... DOM操作

## 状态码
  - 200 请求成功
  - 304 缓存， 服务器不返回任何资源，浏览器从缓存中取数据资源

## 缓存的过程
  - 第一次请求： 浏览器 向服务器请求资源， 服务器响应内容时，会设置当前的资源缓存的一些字段
    expries(http 1.0)/ cache-control(http 1.1)，Etag：会存在响应头：
    - expries(http 1.0)/ cache-control(http 1.1): 时间
    - Etag:       ;
    - last-modified: 文件最后修改时间
  - 第二次请求：
    ### 强缓存
    1. 浏览器判断缓存是否过期(依据->cache-control(http 1.1))， 如果没有， 直接从缓存取内容， 不经过服务器的；
    ### 协商缓存
    2. 缓存过期： 携带 if-none-match: abcd 服务器决策 200？304
    3. Etag 不存在 -> 携带 if-modified-since; last-modified 200?304
