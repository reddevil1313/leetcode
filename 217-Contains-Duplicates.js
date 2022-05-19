// Attempt 1: Faster but takes up more space
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const dups = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in dups) return true;
        dups[nums[i]] = i
    }
    return false;
};

// Attempt 2: Slower but takes up lesser space
/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    const sorted = nums.sort()
    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] == sorted[i+1]) return true;
    }
    return false;
};