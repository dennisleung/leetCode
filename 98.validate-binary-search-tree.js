/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
75/75 cases passed (104 ms)
Your runtime beats 5.11 % of javascript submissions
Your memory usage beats 15.38 % of javascript submissions (44.2 MB)

better solution:
var isValidBST = function(root) {
    if (!root) {
        return true; // Sanity check for passing test case '[]'
    }

    function helper(root, min, max) {
        if (!root) {
            return true; // We hit the end of the path
        }
        
        if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
            return false; // current node's val doesn't satisfy the BST rules
        }
        
        // Continue to scan left and right
        return helper(root.left, min, root.val) && helper(root.right, root.val, max);
    }
    
    return helper(root, null, null);
};

shorter version:
var isValidBST = function(root, lower = -Infinity, upper = Infinity) {
    if (!root) return true;
    let val = root.val;
    if (val <= lower || val >= upper) return false; 
    return isValidBST(root.left, lower, val) && isValidBST(root.right, val, upper)
};
*/
const preorderTraversal = function(root) {
    if(!root) {
        return [];
    }

    const getLeftChildren = function(node) {
        if(node.left) {
            return preorderTraversal(node.left);
        }else {
            return [];
        }
    };

    const getRightChildren = function(node) {
        if(node.right) {
            return preorderTraversal(node.right);
        }else {
            return [];
        }
    };

    return getLeftChildren(root).concat([root]).concat(getRightChildren(root));
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const arr = preorderTraversal(root);
    for(let i = 0; i<arr.length-1; i++) {
        if(arr[i]["val"]>=arr[i+1]["val"]) {
            return false;
        }
    }

    return true;
};

// test cases:
// assertCompare(()=>isValidBST(null), true);
// assertCompare(()=>isValidBST(makeTree([1])), true);
// assertCompare(()=>isValidBST(makeTree([1,2])), false);
// assertCompare(()=>isValidBST(makeTree([2,1])), true);
// assertCompare(()=>isValidBST(makeTree([2,1,3])), true);
// assertCompare(()=>isValidBST(makeTree([5,1,4,null,null,3,6])), false);
// assertCompare(()=>isValidBST(makeTree([1,1])), false);
// assertCompare(()=>isValidBST(makeTree([10,5,15,null,null,6,20])), false);

// @lc code=end

