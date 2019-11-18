from typing import List
class Solution:
    # -> int 返回值 类型： int; 声明 参数的类型   candies:List[int]
    def distributeCandies(self, candies:List[int]) -> int:
        # min 函数式 内置函数
        # set(candies) 原生的数据结构： 去重，放回一个数组
        return min(len(set(candies)), len(candies)>>1)

x = Solution()
print("最大的糖果数： ", x.distributeCandies([1,1,2,2,3,3]))