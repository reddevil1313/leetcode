/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    const reached = {}
    var ref = head
    while(ref) {
        console.log(reached[ref])
        if (reached[ref] != undefined) return true;
        reached[ref] = ref.val
        ref = ref.next
    }
    
    return false;
};

const trying = { val: 1, next: {val: 2, next: null}}

console.log(hasCycle(trying));