// Learning: store the temporary value of one subtree if modifying it and using the old value to modify the other subtree


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
 * @return {TreeNode}
 */
 var invertTree = function(root) {
    if (!root) return null;
    let left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(left)
    return root
};