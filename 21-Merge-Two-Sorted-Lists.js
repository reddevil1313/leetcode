// Solution 1: using recursion. This uses less memory

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    var arr = {val : 0, next : null};
    if (!list1)
        return list2
    if (!list2) 
        return list1
    
    if (list1.val < list2.val) {
        var temp = list1.next
        arr.next = list1
        list1.next = mergeTwoLists(temp, list2)
    } else {
        var temp = list2.next
        arr.next = list2
        list2.next = mergeTwoLists(list1, temp)
    }
        
    return arr.next
};

// Solution 2: Using while loop. This uses more memory

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    var arr = {val : 0, next : null};
    var replace = arr;
    while(list1 && list2) {
        if (list1.val < list2.val) {
            replace.next = list1
            list1 = list1.next
        } else {
            replace.next = list2
            list2 = list2.next
        }
        replace = replace.next
    }
    replace.next = list1 || list2
        
    return arr.next
};