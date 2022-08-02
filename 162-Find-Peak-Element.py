# Level: Medium

# Explanation:
# Find the middle element and check if it is a peak.
# If not, recurse on the half that is bigger than the peak.

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        start = 0
        end = len(nums) - 1
        while start < end:
            mid = start + (end - start) // 2
            if (nums[mid] > nums[mid - 1] and nums[mid] > nums[mid + 1]):
                return mid
            elif (nums[mid] < nums[mid + 1]):
                start = mid + 1
            else:
                end = mid - 1
        
        if (start == end): return start
        return -1