# Level: Medium
# Explanation:
# Set Boundaries for each corner and increment when that row or column has been traversed.
# Solution seems a bit inefficient. There must be a better solution for this.

from typing import List

class Solution:
    def spiralOrder(self, matrix: List[List[int]]) -> List[int]:
        row_len = len(matrix) - 1
        col_len = len(matrix[0]) - 1
        row = 0
        col = 0
        top_border = 0
        bottom_border  = 0
        left_border = 0
        right_border = 0
        direction = [0,1]
        output = []
        
        while (row_len >= (top_border + bottom_border) and col_len >= (left_border + right_border)):
            output.append(matrix[row][col])
            
            if (direction[1] == 1 and col == (col_len - right_border)):
                top_border +=1 
                direction = [1,0]
            elif (direction[0] == 1 and row == (row_len - bottom_border)):
                right_border += 1
                direction = [0,-1]
            elif (direction[1] == -1 and col == left_border):
                bottom_border += 1
                direction = [-1,0]
            elif (direction[0] == -1 and row == top_border):
                left_border += 1
                direction = [0,1]
                
            row += direction[0]
            col += direction[1]
        
        return output

# array = [[1,2,3],[4,5,6],[7,8,9]]
# sol = Solution()

# print(sol.spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))

