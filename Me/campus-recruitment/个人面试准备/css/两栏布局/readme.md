# 两栏布局
  > 两栏布局(左侧固定宽度，右侧自适应)，在工作中总结了几种方法

## 1.使用浮动—float + BFC（overflow: hidden|auto;）
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

## 2. 使用绝对定位实现—absolute + BFC（overflow: hidden|auto;）

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
>  此方法，虽然能让 右边自动增长，但是缩小全部时，无法保证左边的不变(亲自测试)

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

>  此方法与table类似，虽然能让 右边自动增长，但是缩小全部时，无法保证左边的不变(亲自测试)

```js
/**清除浏览器默认边距 
 * flex属性默认是0 1 auto
 * flex-grow为0，则存在剩余空间也不放大 
 * flex-shrink为1，则空间不足该项目缩小 
 * flex-basis为auto，则该项目本来的大小
 * 
 * flex:1 相当于 
 * flex-grow为1 
 * flex-shrink为1
 * flex-basis为0%
 * 
 *【关于flex的计算】https://blog.csdn.net/qq_26598303/article/details/52841087
*/


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