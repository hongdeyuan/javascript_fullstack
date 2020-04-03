# 两栏布局
  > 两栏布局(左侧固定宽度，右侧自适应)，在工作中总结了几种方法

## 1.使用浮动—float
```js
/* 清除浏览器默认边距 */
* {
    margin: 0;
    padding: 0;
}
.wrap {
    overflow: hidden;
    border: 1px solid red;
}
/* 脱离文档流 */
.left {
    float: left;
    width: 200px;
    height: 200px;
    background: purple;
}
.right {
    margin-left: 200px;
    background: skyblue;
    height: 200px;
}
```

## 2. 使用绝对定位实现—absolute

```js
/* 清除浏览器默认边距 */
* {
    margin: 0;
    padding: 0;
}

.wrap {
    overflow: hidden;
    position: relative;
}
/* 脱离文档流 */
.left {
    position: absolute;
    left: 0;
    top: 0;
    width: 200px;
    height: 200px;
    background: purple;
}

.right {
    margin-left: 200px;
    background: skyblue;
    height: 200px;
}
```

## 3. 使用表格布局—table

```js
/* 清除浏览器默认边距 */
* {
    margin: 0;
    padding: 0;
}
/* 表格布局 */
.wrap {
    display: table;
    width: 100%;
}

.left {
    display: table-cell;
    width: 200px;
    height: 200px;
    background: purple;
}

.right {
    display: table-cell;
    background: skyblue;
    height: 200px;
}
```

## flex

```js
/* 清除浏览器默认边距 */
* {
    margin: 0;
    padding: 0;
}
.wrap {
    display: flex;
}
.left {
    height: 200px;
    background: purple;
    flex:0 0 200px
}
.right {
    background: skyblue;
    height: 200px;
    flex: 1;
}
```