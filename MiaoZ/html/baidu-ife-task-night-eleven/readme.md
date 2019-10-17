- header .mask  与 header.mask  区别
    header.mask 表示 选中 header标签带有mask类名的header标签
    header .mask  表示选中 header标签下的 类名为mask的标签
- padding 误区
    如果没有加 box-sizing: border-box;则加上padding属性时，它不会动盒子内部内容的大小，而是在内部内容大小基础上加上一个padding大小，所以导致整个盒子宽高大小改变
    如果加了 box-sizing: border-box;，则加上padding属性时，整个盒子宽高大小不变，盒子内部内容的大小会收缩，也就相当于宽高大小 = padding+盒子内部内容大小