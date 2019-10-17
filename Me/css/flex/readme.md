# 弹性布局
  - 在弹性布局中
    right left top bottom  属性是失效的
    float，clear、vertical-align 属性是失效
    margin padding 也无法达到居中效果
  - align-items

　　决定了item在交叉轴上的对齐方式，可能的值有flex-start|flex-end|center|baseline|stretch，当主轴水平时，其具体含义为

　　　　flex-start：顶端对齐

　　　　flex-end：底部对齐

　　　　center：竖直方向上居中对齐

　　　　baseline：item第一行文字的底部对齐

　　　　stretch：当item未设置高度时，item将和容器等高对齐
  - align-content

 　　该属性定义了当有多根主轴时，即item不止一行时，多行在交叉轴轴上的对齐方式。注意当有多行时，定义了align-content后，align-items属性将失效。         align-content可能值含义如下（假设主轴为水平方向）：
　　　　　　flex-start：左对齐

　　　　　　flex-end：右对齐

　　　　　　center：居中对齐

　　　　　　space- between：两端对齐

　　　　　　space-around：沿轴线均匀分布

　　　　　　stretch：各行将根据其flex-grow值伸展以充分占据剩余空间
  - justify-content

　　　　决定item在主轴上的对齐方式，可能的值有flex-start（默认），flex-end，center，space-between，space-around。当主轴沿水平方向时，具体含义为

　　　　　　flex-start：左对齐

　　　　　　flex-end：右对齐

　　　　　　center：居中对齐

　　　　　　space- between：两端对齐

　　　　　　space-around：沿轴线均匀分布
  - flex-direction

　　　　决定主轴的方向，即项目排列的方向，有四个可能的值：row(默认)|row-reverse|column|column-reverse

　　　　row:主轴为水平方向，项目沿主轴从左至右排列

　　　　column：主轴为竖直方向，项目沿主轴从上至下排列

　　　　row-reverse：主轴水平，项目从右至左排列，与row反向

　　　　column-reverse：主轴竖直，项目从下至上排列，与column反向
  - flex-wrap

　　　　默认情况下，item排列在一条线上，即主轴上，flex-wrap决定当排列不下时是否换行以及换行的方式，可能的值nowrap(默认)|wrap|wrap-reverse

　　　　nowrap：自动缩小项目，不换行

　　　　wrap：换行，且第一行在上方

　　　　wrap-reverse：换行，第一行在下面

