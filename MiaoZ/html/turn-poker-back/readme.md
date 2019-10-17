- var 与 let 作用域问题
    因为let i 的是区块变量，每个i只能存活到大括号结束，并不会把后面的for循环的 i 值赋给前面的setTimeout中的i；
    而var i 则是局部变量，这个 i 的生命周期不受for循环的大括号限制