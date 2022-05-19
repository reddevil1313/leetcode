/*
Explanation:
- Use the concept of pairs
- If the (target - other value in the ideal pair) already exists in the dictionary,
    then return
- Else store in the dictionary.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (target - nums[i] in map) {
            return [map[target - nums[i]],i]
        } else {
            map[nums[i]] = i
        }
    }
};

