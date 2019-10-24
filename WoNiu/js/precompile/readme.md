# 预编译 
  - 变量提升
  - 任何变量 未经过声明 就赋值 此变量 就会成为 全局变量
  - 一切声明的 全局变量 ，都归 window 所有(window为全局对象)
  # 预编译 四部曲 发生在函数执行之前
    1. 创建一个 AO 对象 执行期上下文（后面更新关于执行期上下文详解）
    2. 寻找函数的形参和变量声明，将变量和形参名作为AO对象的属性名，值设定为undefined.
    3. 将形参和实参相统一，即更改【形参】后的【undefined】为具体的【形参值】。
    4. 寻找函数中的函数声明，将函数名作为AO对象的属性名，值赋予函数体。

  # 预编译 也发生在 全局
    1. 创建一个 GO 对象
    2. 寻找函数的形参和变量声明，将变量和形参名作为AO对象的属性名，值设定为undefined.
    3. 在函数体力找函数声明，将函数名作为 AO 对象的属性名，值赋值予函数体

  # 代码
    var global = 100
    function fn() {
      console.log(global)
      }
    fn()


  #  全局
    1. 
      GO{
        
      } GO === Window

    2. 
      GO{
        global: undefined
      }
    
    3. 
      GO{
        global: undefined
        fn:function(){}
      }

    4. 创建了AO
    AO{

    }

    5. 执行
    

  # 代码：
    function fn(a) {

        console.log(a)// function(){}
        var a = 12
        console.log(a)//12
        function a() {
          console.log(a)//12 
        }

        var b = function () {
          console.log(a)//12  function(){}
        }
      }


  #：预编译过程：
    1. 创建AO对象
      AO{
        //空对象
      }
    2. 找形参和变量声明
      AO{
        a : undefined,
        b : undefined
      }
    3. 形参和实参相统一
      AO{
        a : 1,
        b : undefined
      }
    4. 找函数声明
      AO{
        a : function a(){},
        b : undefined,
        d : function d(){}
      }
