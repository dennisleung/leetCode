/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
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
18/18 cases passed (88 ms)
Your runtime beats 21.12 % of javascript submissions
Your memory usage beats 20 % of javascript submissions (46.5 MB)

2-liner dfs solution:
var countNodes = function(root) {
    if(!root) return 0;
    return 1 + countNodes(root.left) + countNodes(root.right);
};

binary-search solution:
https://leetcode.com/problems/count-complete-tree-nodes/discuss/61978/JavaScript-O(logxb2n)-time-and-O(1)-space-using-binary-search
*/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function(root) {
    let count = 0;;
    let queue = root ? [root] : [];
    while(queue.length) {
        let node = queue.shift();
        count++;
        if(node.left) {
            queue.push(node.left);
        }
        if(node.right) {
            queue.push(node.right);
        }
    }

    return count;
};

// test cases:
// assertCompare(()=>countNodes(makeTree([])), 0);
// assertCompare(()=>countNodes(makeTree([1,2,3,4,5,6])), 6);

// @lc code=end

