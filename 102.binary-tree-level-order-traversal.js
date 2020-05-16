/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
34/34 cases passed (60 ms)
Your runtime beats 53.19 % of javascript submissions
Your memory usage beats 5.88 % of javascript submissions (35.5 MB)

bfs version:
var levelOrder = function(root) {
    if (!root) {
        return [];
    }
    const stack = [];
    stack.push(root);
    const result = [];
    while (stack.length > 0) {
        const size = stack.length;
        const temp = [];
        for (let i = 0; i < size; i++) {
            const node = stack.shift();
            temp.push(node.val);
            if (node.left) {
                stack.push(node.left);
            }
            if (node.right) {
                stack.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
};

dfs version:
var levelOrder = function(root, solArr = [], level = 0) {
    if (!root) return solArr;
        
    if (!solArr[level]) {
        solArr[level] = [];
    }
	
	solArr[level].push(root.val);
    
    levelOrder(root.left, solArr, level + 1);
    levelOrder(root.right, solArr, level + 1);
    
    return solArr;
};
*/

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let arr1 = [root];
    let arr2 = [];
    const result = [];
    while(arr1.length) {
        const level = [];
        arr1.forEach((node)=> {
            level.push(node.val);
            node.left && arr2.push(node.left);
            node.right && arr2.push(node.right);
        });
        result.push(level);
        arr1 = arr2;
        arr2 = [];
    }

    return result;
};

// test cases:
// assertCompare(()=>levelOrder(null), []);
// assertCompare(()=>levelOrder(makeTree([1])), [[1]]);
// assertCompare(()=>levelOrder(makeTree([3,9,20,null,null,15,7])), [[3],[9,20],[15,7]]);


// @lc code=end

