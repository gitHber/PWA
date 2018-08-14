/**
 * 自定义 service-worker manifest.json获取出错
 */
var cacheStorageKey = 'minimal-pwa-1'

var cacheList = [
  '/',
  'index.html',
  'main.css',
  'favicon.png'
]
// sw 安装
// 静态缓存
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheStorageKey)
      .then(cache=>cache.addAll(cacheList))
      .then(()=>self.skipWaiting())
  )
})
// 处理动态缓存
self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response !== null){
        return response
      }
      return fetch(e.request.url)
    })
  )
})
// 
self.addEventListener('activate', function(e){
  e.waitUntil(
    // 获取所有cache名称
    caches.keys().then(cacheNames=>{
      return Promise.all(
        // 获取所有不同于当前版本名称 cache 下的内容
        cacheNames.filter(cacheNames => {
          return cacheNames !== cacheStorageKey
        }).map(cacheNames => {
          return caches.delete(cacheNames)
        })
      )
    }).then(() => {
      return self.clients.claim()
    })
  )
})