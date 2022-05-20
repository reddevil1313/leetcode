//Learning: Need to calculate the depth for each subtree and also checm if they are balanced individually

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isBalanced = function(root) {
    if (!root) return true;
    
    var calculateHeight = function(root) {
        if (!root) return 0;

        return 1 + Math.max(calculateHeight(root.left), calculateHeight(root.right))
        
    }
    var leftBalanced = calculateHeight(root.left)
    var rightBalanced = calculateHeight(root.right)
    
    return (Math.abs(leftBalanced - rightBalanced) <= 1)
        && isBalanced(root.left) && isBalanced(root.right)
};