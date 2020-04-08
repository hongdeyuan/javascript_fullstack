# BFC

  > 块级格式化上下文，是一个独立的渲染区域，并且有一定的布局规则。 
  · BFC区域不会与float box重叠 
  · BFC是页面上的一个独立容器，子元素不会影响到外面
  · 计算BFC的高度时，浮动元素也会参与计算 那些元素会生成BFC： 
    · 根元素 
    · float不为none的元素 
    · position为fixed和absolute的元素 
    · display为inline-block、table-cell、table-caption，flex，inline-flex的元素 
    · overflow不为visible的元素

## BFC的约束规则

  - 内部的Box会在垂直方向上一个接一个的放置
  - 垂直方向的距离有margin决定(属于同一个BFC的两个相邻Box的margin会发生重叠，与方向无关)
  - 每个元素的margin box的左边， 与包含块border box的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此
  - BFC的区域不会与float的元素区域重叠
  - 计算BFC的高度时，浮动子元素也参与计算
  - BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面元素


  [参考](https://juejin.im/post/5a4dbe026fb9a0452207ebe6)