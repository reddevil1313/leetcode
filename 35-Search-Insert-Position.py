# Level: Easy

# Explanation: 
# Use binary search.
# If the value at start is smaller than target then return the next index.

from typing import List

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        start = 0
        end = len(nums) - 1
        while start < end:
            mid = start + (end - start)//2
            if (nums[mid] == target):
                return mid
            elif target < nums[mid]:
                end = mid
            else:
                start = mid + 1
        
        if (nums[start] >= target):
            return start
        else:
            return start + 1