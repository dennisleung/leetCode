/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
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
114/114 cases passed (84 ms)
Your runtime beats 26.11 % of javascript submissions
Your memory usage beats 85 % of javascript submissions (41.9 MB)
*/

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    let result = [];
    if(!root) {
        return result;
    }

    if(root.left) {
        const leftResult = pathSum(root.left, sum-root.val);
        if(leftResult.length) {
            result = result.concat(leftResult.map(v=>[root.val, ...v]));
        }
    }

    if(root.right) {
        const rightResult = pathSum(root.right, sum-root.val);
        if(rightResult.length) {
            result = result.concat(rightResult.map(v=>[root.val, ...v]));
        }
    }

    if(!root.left&&!root.right&&root.val==sum) {
        result.push([root.val]);
    }

    return result;
};

// test cases:
// assertCompare(()=>pathSum(makeTree([]), 10), []);
// assertCompare(()=>pathSum(makeTree([10]), 10), [[10]]);
// assertCompare(()=>pathSum(makeTree([10]), 1), []);
// assertCompare(()=>pathSum(makeTree([5,4,8,11,null,13,4,7,2,null,null,5,1]), 22), [[5,4,11,2],[5,8,4,5]]);

// @lc code=end

