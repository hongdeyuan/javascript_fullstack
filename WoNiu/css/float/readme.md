# 浮动会造成 元素脱离文档流  而 影响其他元素的布局
  -  采用 清除浮动 策略
    - 方式一： 在 folat 的元素之后加入 一个 div 用于清除浮动 
      <div class="clearfix"></div>
       样式： .clearfix{
                clear: left;
              }
    - 方式 二 ：父容器 加伪类

# margin 重叠问题:
  - 解决办法: 设置BFC 容器
