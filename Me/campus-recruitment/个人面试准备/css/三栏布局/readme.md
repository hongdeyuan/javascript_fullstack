# CSS三栏布局的四种方法

## 1.绝对定位法

HTML代码如下:
```js
<div class="left">Left</div>
<div class="main">Main</div>
<div class="right">Right</div>
```

css代码：
```js
//简单的进行CSS reset
body,html{
    height:100%;
    padding: 0px;
    margin:0px;
}
//左右绝对定位
.left,.right{
    position: absolute;
    top:0px;
    background: red;
    height:100%;
}
.left{
    left:0;
    width:100px;
}
.right{
    right:0px;
    width:200px;
}
//中间使用margin空出左右元素所占据的空间
.main{
    margin:0px 200px 0px 100px;
    height:100%;
    background: blue;
}
```

## 2. 圣杯布局

HTML代码如下：
```js
//注意元素次序
<div class="main">Main</div>
<div class="left">Left</div>
<div class="right">Right</div>
```

css代码：
```js
//习惯性的CSS reset
body,html{
    height:100%;
    padding: 0;
    margin: 0
}
//父元素body空出左右栏位
body {
    padding-left: 100px;
    padding-right: 200px;
}
//左边元素更改
.left {
    background: red;
    width: 100px;
    float: left;
    margin-left: -100%;
    position: relative;
    left: -100px;
    height: 100%;
}
//中间部分
.main {
    background: blue;
    width: 100%;
    height: 100%;
    float: left;
}
//右边元素定义
.right {
    background: red;
    width: 200px;
    height: 100%;
    float: left;
    margin-left: -200px;
    position: relative;
    right: -200px;
}
```

相关解释如下：

  - (1)中间部分需要根据浏览器宽度的变化而变化，所以要用100%，这里设左中右向左浮动，因为中间100%，左层和右层根本没有位置上去
  - (2)把左层margin负100后，发现left上去了，因为负到出窗口没位置了，只能往上挪
  - (3)按第二步这个方法，可以得出它只要挪动窗口宽度那么宽就能到最左边了，利用负边距，把左右栏定位
  - (4)但由于左右栏遮挡住了中间部分，于是采用相对定位方法，各自相对于自己把自己挪出去，得到最终结果

## 3.双飞翼布局

HTML代码如下：
```js
<div class="main">
    <div class="inner">
        Main
    </div>
</div>
<div class="left">Left</div>
<div class="right">Right</div>
```

CSS代码如下：
```js
//CSS reset
body,html {
    height:100%;
    padding: 0;
    margin: 0
}
body {
    /*padding-left:100px;*/
    /*padding-right:200px;*/
}
.left {
    background: red;
    width: 100px;
    float: left;
    margin-left: -100%;
    height: 100%;
    /*position: relative;*/
    /*left:-100px;*/
}
.main {
    background: blue;
    width: 100%;
    float: left;
    height: 100%;
}
.right {
    background: red;
    width: 200px;
    float: left;
    margin-left: -200px;
    height: 100%;
    /*position:relative;*/
    /*right:-200px;*/
}
//新增inner元素
.inner {
    margin-left: 100px;
    margin-right: 200px;
}
```
相关解释：
  - 圣杯布局实际看起来是复杂的后期维护性也不是很高，在淘宝UED的探讨下，出来了一种新的布局方式就是双飞翼布局，代码如上。增加多一个div就可以不用相对布局了，只用到了浮动和负边距。和圣杯布局差异的地方已经被注释。

## 浮动

HTML代码如下：
```js
//注意元素次序
<div class="left">Left</div>
<div class="right">Right</div>
<div class="main">Main</div>
```

CSS代码：
```js
//CSS reset
body,html {
    height:100%;
    padding: 0;
    margin: 0
}
//左栏左浮动
.left {
    background: red;
    width: 100px;
    float: left;
    height: 100%;
}
//中间自适应
.main {
    background: blue;
    height: 100%;
    margin:0px 200px 0px 100px;
}
//右栏右浮动
.right {
    background: red;
    width: 200px;
    float: right;
    height: 100%;
}
```