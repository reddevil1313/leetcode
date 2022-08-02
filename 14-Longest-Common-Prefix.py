# Level: Easy

# Explanation:
# Store the substring and loop through the array. Break when substring becomes empty (early termination).

from typing import List

class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        substr = strs[0]

        for x in range(1,len(strs)):
            temp = ""
            for y in range(0,min(len(strs[x]),len(substr))):
                if (substr[y] == strs[x][y]): 
                    temp += strs[x][y]
                else:
                    break
            if temp == "":
                return ""
            else:
                substr = temp

        return substr
        

