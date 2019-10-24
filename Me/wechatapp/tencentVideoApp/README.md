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
  - 微信小程序swiper高度动态适配(子元素高度不固定)
      swiper,swiper-item{
        height: 100vh !important;
      }
    - 或者
        swiper,swiper-item{
          height: calc(100vh - 75rpx) !important;
        }
  - overflow-x: scroll 失效 ：原因是父容器使用了 swiper ，swiper也是一个滑动，
      但优先级比 overflow-x: scroll 高，所以会导致它失效。建议：使用自定义方法处理
  - 实现固定 菜单栏 下滑


## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)


