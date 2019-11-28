/*
 * @lc app=leetcode id=129 lang=javascript
 *
 * [129] Sum Root to Leaf Numbers
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
110/110 cases passed (88 ms)
Your runtime beats 6.55 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (33.7 MB)
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    let sum = 0;
    const preOrder = function(node, base) {
        if(!node) {
            return;
        }
        base = base * 10 + node.val;
        if(!node.left && !node.right) {
            sum += base;
        }
        node.left && preOrder(node.left, base);
        node.right && preOrder(node.right, base);
    };
    preOrder(root, 0);

    return sum;
};

// test cases:
// assertCompare(()=>sumNumbers(makeTree([])), 0);
// assertCompare(()=>sumNumbers(makeTree([1])), 1);
// assertCompare(()=>sumNumbers(makeTree([1,2])), 12);
// assertCompare(()=>sumNumbers(makeTree([1,2,3])), 25);
// assertCompare(()=>sumNumbers(makeTree([4,9,0,5,1])), 1026);
// assertCompare(()=>sumNumbers(makeTree([0,1,2])), 3);
// assertCompare(()=>sumNumbers(makeTree([1,5,1,null,null,null,6])), 131);
// @lc code=end

