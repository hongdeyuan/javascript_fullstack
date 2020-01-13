from typing import List

class Solution:
  def removeDuplicates(self, nums: List[int]) -> int:
    if nums:
      slow = 0
      for fast in range(1, len(nums)):
        if nums[fast] != nums[slow]:
          slow += 1
          nums[slow] = nums[fast]
      return slow + 1
    else:
      return 0

x = Solution()
print(x.removeDuplicates([1, 1, 2]))