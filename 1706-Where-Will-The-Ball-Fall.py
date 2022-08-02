# Level: Medium

# Explanation:
# Use a loop to go down the matrix rows. Don't need to use DFS as only one possible route.

from typing import List

class Solution:
    def findBall(self, grid: List[List[int]]) -> List[int]:
        rows= len(grid)
        cols = len(grid[0])
        output = []
        
        def fallOut(grid: List[List[int]], position: int) -> int:
            row = 0
            col = x
            position = -1

            while (row <= rows):
                if (row == rows): 
                    position = col
                    break

                if (row < 0 or col < 0 or row >= rows or col >= cols): continue

                if (grid[row][col] == 1):
                    if (col == cols - 1 or grid[row][col+1] == -1): 
                        break
                    else:
                        row += 1
                        col += 1
                else:
                    if (col == 0 or grid[row][col-1] == 1): 
                        break
                    else:
                        row += 1
                        col -= 1

            return position
        
        for x in range(0,cols):
            output.append(fallOut(grid, x))
        
        return output


array = [[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]
sol = Solution()

print(sol.findBall(array))