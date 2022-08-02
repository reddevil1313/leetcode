# Level: Easy

# Explanation: 
# Use math to find the total sum and subtract each element from it

class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        num = len(nums)
        totalSum = num*(num + 1)//2
        for x in nums:
            totalSum -= x
        return totalSum