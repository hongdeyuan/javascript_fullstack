- leetcode 是大厂算法题的来源
- minlen 0~minLen 皆有可能
    老实取出部分 strs[0] strs[1]...strs[0minLen]
    for(let i= 0 ; i< strs[i].length;i++){
        strs[i].startsWith(strs[02]);
    }
    从后面开始[0minLen] [0minLen-1] .. 
    概率相同  中间：二分查找
    flower 

    low   middle  high
    0       2      4
    3       3      3
    3              2  退出循环

- 二分查找  log2（n）
    每次从中间查找  ，符合概率  每次都可以排除一半的元素
    low    middle    high  重复去做计算  并相应去挑战



    位移运行   >> 1   除二  取整
    算法  算法复杂度 O(n)  log2N


- 爱吃香蕉的珂珂 算法题
    香蕉建模 
    piles = [3,6,7,11]
    K    mid    H   
    1     6     11
    1     3      5
    4     4      5
    5     5      5
    5            4
    最小速度 4 || 5 -> 4 

    [30,11,23,4,20]  H=6
    K        H
    23       6
    1 ... hi  ->  O(n)       中间试算 -> 二分法   log2N   8 -> 3

    // 展开运算符 ： ...piles  -> ...[1,2,3,4] -> 1,2,3,4

    5 可以吃到  左边就可以
    反过来 找右边 ，每一次都可以放掉一半的尝试
    1 .. 4    2
    3 .. 4    4





