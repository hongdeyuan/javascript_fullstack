# 选择器
浏览器默认属性 < 继承自父元素的属性 < 通配符选择器(*) 
  < 标签选择器(p, div,img等) < 类选择器('.box') 
  < 结构伪类选择器(:first-child; nth-child(n);nth-last-child(n); :root ) 
  < id选择器('#pwd') < 行内样式 < !important

# div 匹配选择

  - div p:div内的子元素p或孙子元素p等等(更深层次)
  - div>p:仅div内的子元素p
  - div+p:选择紧接在 <div> 元素之后的所有 <p> 元素
  - div~p:选择div元素之后紧跟着的p元素,换句话说“选择前面有 <div> 元素的每个 <p> 元素。”