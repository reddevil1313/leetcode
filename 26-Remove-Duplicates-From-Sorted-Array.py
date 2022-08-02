# Level: Easy

# Explanation: 
# Keep track of current element
# If repeated then ignore it
# If new element, then replace in the list.

from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        counter = 0
        for x in nums:
            if (x != val):
                nums[counter] = x
                counter += 1
        return counter