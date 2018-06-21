# PWA初探
<hr>

### 目录结构

```
ngrok.exe 外网映射地址(目前仅有window安装包，其他系统下请安装相应的程序)

index.html    主页面，内有注册pwa

manifest.json
    short_name: "" 用户主屏幕上的应用名字
    display: "standalone" 设置启动样式,让您的网络应用隐藏浏览器的 URL 地址栏
    start_url: "/" 设置启动网址，如果不提供的话，默认是使用当前页面
    theme_color: "" 用来告知浏览器用什么颜色来为地址栏等 UI 元素着色
    background_color: "" 设置启动页面的背景颜色
    icons: ""  就是添加到主屏幕之后的图标

sw.js         Service Worker 进行缓存
```
### 使用示例
```
1. 启动本地服务
npm run dev

2. 启动 ngrok (外网映射，另起控制台)
npm run ngrok

3. 浏览器打开
根据ngrok控制台 Forwarding 的地址访问, 使用https

4. 查看浏览器 Application 
可以看到Service Worker 读取sw.js, Cache Storage 缓存sw.js的指定文件, 关闭网络刷新，可以看到network文件from service worker

5. 修改sw.js cacheStorageKey值
修改改值, 重新刷新, 重新获取缓存

```
