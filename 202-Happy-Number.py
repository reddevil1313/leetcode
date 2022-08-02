# Level: Easy

# Explanation: 
# Use a Hashset to store the values already encountered.
# Find the sum of squares of digits and add to the set

# Possible Improvement: Use a Hashmap instead.

class Solution:
    def isHappy(self, n: int) -> bool:
        happy = n
        dictionary = set()
        dictionary.add(n)
        while (happy != 1):
            temp = happy
            sum = 0
            while (temp > 0):
                digit = temp%10
                sum += digit*digit
                temp = temp//10
            if sum in dictionary:
                return False
            else:
                dictionary.add(sum)
                happy = sum
        
        return True