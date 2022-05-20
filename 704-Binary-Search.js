//Learning: log(n) time usually includes splitting the array into two.
// Also, we can hve pointers to an array's starting and ending instead of splitting it.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    var start = 0
    var end = nums.length - 1
    while (start <= end) {
        var middle = start + Math.floor(end - start/2)
        if (target == nums[middle]) {
            start = middle
            break;
        } else if (target > nums[middle]) {
            start = (middle + 1)
        } else {
            end = (middle - 1)
        }
    }

    return (start == end) ? start : -1;
};