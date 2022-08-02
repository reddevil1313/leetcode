# Level: Medium

# Solution 1: Using Heap
# Explanation: Use heap to sort the array in a binary tree and then obtain the k smallest elements

import heapq
from typing import List

class Solution:
    def kthSmallest(self, matrix: List[List[int]], k: int) -> int:
        result = matrix[0]
        heapq.heapify(result)

        for row in matrix[1:]:
            for ele in row:
                heapq.heapify(result, ele)
        
        kSmallest = heapq.nsmallest(k,result)
        return kSmallest[-1]


# Solution 2: Using Binary Search
# Explanation: Use heap to sort the array in a binary tree and then obtain the k smallest elements