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
    expries(http 1.0)/ cache-control(http 1.1)，Etag， last-modified：会存在响应头：
    - expries(http 1.0)/ cache-control(http 1.1): 时间
    - Etag: 
        - 一个能标识文件内容唯一的东西； 比如用一些哈希(hash)算法：MD5
        - 哈希算法： 同样的内容 hash 完之后 结果一定一样的
        - 不管 hash 任何东西 结果都是一个固定长度的字符串
        - MD5('abcd123')  = 'xyz'; 相当于 纯函数
        - MD5(文件内容) = 'dad'
        - 过程： 
          - 第一次请求 md5(文件内容) = 'hash1'
          - 第二次请求 md5(文件内容) = 'hash2'
    - last-modified: 文件最后修改时间
      - 第一次 返回一个文件的最后修改时间
      - 第二次 再去获取一下 文件的最后修改时间
  - 第二次请求：
    ### 强缓存
    1. - 浏览器判断缓存是否过期(依据->cache-control(http 1.1))， 如果没有， 直接从缓存取内容， 不经过服务器的；
       - 状态码： 200(from memory/disk cache)
       - expries: 确定的时间 2019122711:00:00  cache-control: 30 * 60
    ### 协商缓存
    2. 缓存过期： 携带 if-none-match: abcd 服务器决策 200？304
    3. Etag 不存在 -> 携带 if-modified-since; last-modified 200?304
