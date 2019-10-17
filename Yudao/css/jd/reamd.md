# 页面设置
  - 基本的结构套路
   + #app>.page
  - css 解析也是需要花时间的： '*' 费时，所以不推荐使用'*' 来初始化css
    + 推荐使用下面的：
      a, abbr, acronym, address, applet, 
      article, aside, audio, b, big, blockquote, 
      body, canvas, caption, center, cite, code, 
      dd, del, details, dfn, div, dl, dt, em, embed, 
      fieldset, figcaption, figure, footer, form, h1, 
      h2, h3, h4, h5, h6, header, hgroup, html, i, iframe, 
      img, ins, kbd, label, legend, li, mark, menu, nav, 
      object, ol, output, p, pre, q, ruby, s, samp, section, 
      small, span, strike, strong, sub, summary, sup, table, 
      tbody, td, tfoot, th, thead, time, tr, tt, u, ul, var, video {
        margin: 0;
        padding: 0;
        border: 0;
        vertical-align: baseline;
      }
  - html{
      -ms-text-size-adjust: 100%;/*不要调整文字大小*/
    }
    text-size-adjust: 100%; //将字体调整为 100%
    -webkit-text-size-adjust:100%;//
    -webkit ：谷歌浏览器内核  手机端多以它为主
    -ms : PC端 ，windwos操作系统，内核时微软的
    text-size-adjust:100% ; 是新出的一个属性
    加前缀的方式： -wenkit-
  - -webkit-overflow-scrolling:touch;/*让滚动更顺滑*/ 当划一下 停一下时 就停下 感受到手指的滑动
  - 自适应, rem em   手机端中: px 靠不住
    + weui em 100px 京东 喜欢用这种
      + 16px .16rem
  - css 考点
    + -webkit-text-size-adjust:100%;
    + -webkit-tap-highlight-color: transparent;
    +  -webkit-overflow-scrolling:touch;/*让滚动更顺滑*/
    + html font-size:100px
    + .quick-login .quick-type
      stylus 嵌套 
      容易冲突
      模块化 命名空间
  - base64 
    更小 任何一张图片都是编码
    传输更快 ,完全在CSS中不需要发送http请求  性能开销的核心