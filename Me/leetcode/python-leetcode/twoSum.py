class Solution:
     def twoSum(self, nums: List[int], target: int) -> List[int]:
        dict_ = {}
        for i in range(len(nums)):
            tmp = target - nums[i]
            if tmp in dict_:
                return [dict_[tmp], i]
            dict_[nums[i]]=i