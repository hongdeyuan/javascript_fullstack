## DNS预加载
  <link rel='dns-prefetach' href='//img.baidu.com'>

1. 查看dns缓存
2. 本地没有缓存，发起dns请求，向本地的 DNS服务器发送请求(递归)

## 优化策略
  1. 长连接: 减少tcp连接
  2. 减少文件体积
    1. js打包压缩
    2. gzip
  3. 减少文件的请求次数
    1. 雪碧图
    2. js ,css打包
    3. 缓存机制
    4. 懒加载
  4. 较小用户和服务器的距离
    1. cdn(分发网络)
  5. 本地存储
    - localStorage