console.log('hello dhyuan')
const CACHE_NAME = 'PWA-1.0'
// work-box 是 service-work 的一个轮子，封装好了的，一般企业用，操作简单

// 缓存列表
const cacheList = [
  './serviceWorker生命周期.png',
  './bundle.js'
]
// cacheStorage 
// 此时， 监听安装事件， 去缓存文件
this.addEventListener('install', (e) => {
  // install -> activated
  // 等着 一个 Promise resolve 才会去到下一阶段
  e.waitUntil(
    // 加缓存操作
    caches.open(CACHE_NAME)// 打开缓存
    .then(cache => {
      return cache.addAll(cacheList)
    })
  )
})

// 监听请求事件
this.addEventListener('fetch', (e) => {
  e.respondWith(
    // 如果缓存里面有
    caches.match(e.request)// 匹配网络请求
    .then(res => {
      if (res) {
        console.log(e.request.url, '有缓存')
        return res
      } else {
        console.log(e.request.url, '无缓冲')
        return fetch(e.request)
        .then(res => {
          // service-worker 拿到请求的结果
          // 拿到结果后， 再添加到缓存中
          return caches.open(CACHE_NAME)
          .then(cache => {
            cache.put(e.request, res)
            return res
          })
        })
      }
    })
  )
})