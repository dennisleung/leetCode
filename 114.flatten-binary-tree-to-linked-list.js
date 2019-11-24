/*
 * @lc app=leetcode id=114 lang=javascript
 *
 * [114] Flatten Binary Tree to Linked List
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*
225/225 cases passed (80 ms)
Your runtime beats 10.14 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (37.4 MB)

iteration solution:
var flatten = function(root) {
    if (!root) return null;
    let node = root; 
    let left = root.left ? [root.left] : [];
    let right = root.right ? [root.right] : []; 
    
    while (left.length || right.length) {
        node.right = left[0] ? left[0] : right[0];
        node.left = null;
        
        node = left[0] ? left.shift() : right.shift(); 
        if (node.left) left.push(node.left);
        if (node.right) right.unshift(node.right);  
    }; 
    return root;
};

dfs solution:
var flatten = function (root) {
    if (!root) {
        return;
    }
    let list = [];
    dfs(root, list);
    root.left = null;
    let cursor = root;
    for (let i = 1; i < list.length; i++) {
        cursor.right = new TreeNode(list[i].val);
        cursor = cursor.right;
    }
};

var dfs = function (root, list) {
    if (!root) {
        return;
    }
    list.push(root);
    if (root.left) {
        dfs(root.left, list);
    }
    if (root.right) {
        dfs(root.right, list);
    }
}
*/

//先序遍历
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

    return [root].concat(getLeftChildren(root)).concat(getRightChildren(root));
};

var flatten = function(root) {
    if(!root) {
        return null;
    }
    const arr = preorderTraversal(root);
    for(let i = 0; i<arr.length-1; i++) {
        arr[i].left = null;
        arr[i].right = arr[i+1];
    }
    const lastNode = arr.pop();
    lastNode.left = lastNode.right = null;

    return arr[0];
};

// test cases:
// assertCompare(()=>flatten(makeTree([])), makeTree([]));
// assertCompare(()=>flatten(makeTree([1,2,5,3,4,null,6])), makeTree([1,null,2,null,3,null,4,null,5,null,6]));


// @lc code=end

