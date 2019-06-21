/*
 * @lc app=leetcode id=671 lang=javascript
 *
 * [671] Second Minimum Node In a Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
✔ Accepted
  ✔ 35/35 cases passed (52 ms)
  ✔ Your runtime beats 87.04 % of javascript submissions
  ✔ Your memory usage beats 14.51 % of javascript submissions (34 MB)

 another solution:
 function findSecondMinimumValue(root) {
    const minVal = getMinLargerThanX(root);
    return minVal == null ? -1 : minVal;
}

function getMinLargerThanX(node, x = node.val) {
    if (node.val > x) {
        return node.val;
    }
    //If current node has `left` (property of tree is to have two or zero sub-nodes, which means if it has `left` it also has `right`.)
    //we determine the min value larger than x in each subtree (left and right subtree).
    if (node.left) {
        const leftMin = getMinLargerThanX(node.left, x);
        const rightMin = getMinLargerThanX(node.right, x);
        if (leftMin && rightMin) {
            return Math.min(leftMin, rightMin);
        }else {
            return leftMin || rightMin;
        }
    }
    return null;
} 
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let arr = {};
    const travels = (root) => {
        if(root) {
            arr[root.val] = 1;
            travels(root.left);
            travels(root.right);
        }
    };
    travels(root);
    let nums = Object.keys(arr);
    nums.sort((a, b)=>a-b);
    let min = nums[0];
    for(let num of nums) {
        if(num!==min) {
            return num;
        }
    }

    return -1;
};

