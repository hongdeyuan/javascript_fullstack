# 腾讯视频小程序-云开发

研究腾讯大厂小程序：

- 数据库：采用微信开发 提供的云数据库，在云函数中读写的 JSON 文档型数据库
- 文件存储：在模仿的腾讯视频小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权


# 开发中的坑
  - 如果隐藏的话 不能写如下： 

    <swiper indicator-dots="false" autoplay="true" interval="5000" duration="300">
    </swiper>
    因为 "false" 会被解析成字符串 而字符串是 true 值，所以直接写是不行的
    
    解决如下：
    <swiper indicator-dots="{{false}}" autoplay="true" interval="5000" duration="300"> </swiper>

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

