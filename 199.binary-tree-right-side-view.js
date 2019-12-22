/*
 * @lc app=leetcode id=199 lang=javascript
 *
 * [199] Binary Tree Right Side View
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
211/211 cases passed (56 ms)
Your runtime beats 82.27 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (34.2 MB)

more clean solution:
var rightSideView = function(root, depth = 0, result = []) {
    if(root == null) return result
    result[depth] = root.val
    rightSideView(root.left, depth+1, result)
    rightSideView(root.right, depth+1, result)
    return result
};
*/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = [];
    let queue1 = [];//current level
    let queue2 = [];//next level

    root && queue1.push(root);
    while(queue1.length) {
        while(queue1.length) {
            const node = queue1.shift();
            node.left && queue2.push(node.left);
            node.right && queue2.push(node.right);
            if(!queue1.length) {
                result.push(node.val);
            }
        }
        queue1 = queue2;
        queue2 = [];
    }

    return result;
};

// test cases:
// assertCompare(()=>rightSideView(makeTree([1,2,3,null,5,null,4])), [1,3,4]);
// assertCompare(()=>rightSideView(makeTree([])), []);
// assertCompare(()=>rightSideView(makeTree([1])), [1]);
// assertCompare(()=>rightSideView(makeTree([1,2])), [1,2]);
// assertCompare(()=>rightSideView(makeTree([1,null,2])), [1,2]);

// @lc code=end

