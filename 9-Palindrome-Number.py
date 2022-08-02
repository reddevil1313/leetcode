# Level: Easy

# Explanation:
# Find reverse and check if they are equal


class Solution:
    def isPalindrome(self, x: int) -> bool:
        num = x
        reversed = 0
        while (num > 0):
            temp = num % 10
            reversed = reversed*10 + temp
            num = num // 10
        if (x == reversed):
            return True
        else:
            return False