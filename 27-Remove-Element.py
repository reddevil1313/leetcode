# Level: Easy

# Explanation: 
# If value is target, then don't add

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        counter = 0
        for x in nums:
            if (x != val):
                nums[counter] = x
                counter += 1
        return counter