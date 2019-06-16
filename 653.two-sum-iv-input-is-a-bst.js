/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
  ✔ 421/421 cases passed (124 ms)
  ✔ Your runtime beats 12.24 % of javascript submissions
  ✔ Your memory usage beats 17.04 % of javascript submissions (42.7 MB)

another solution:
const findTarget = (root, k, map = {}) => {
    if (!root) return false
    if (k - root.val in map) return true
    map[root.val] = 1
    return findTarget(root.left, k, map) || findTarget(root.right, k, map)
};

faster solution:
var findTarget = function(root, k) {
    const sorted = [];
    
    const inorder = node => {
        if(!node) return;
        
        inorder(node.left);
        
        sorted.push(node.val);
        
        inorder(node.right);
    };
    
    inorder(root);
    
    for(let i = 0; i < sorted.length-1; i++) {
        for(let j = sorted.length-1; j > i; j--) {
            if(sorted[i] + sorted[j] === k) {
                return true;
            }
        }
    }
    
    return false;
};

*/

/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    const cache = {};
    const travels = (node)=>{
        if(!node) {
            return;
        }
        cache[node.val] = (cache[node.val] || 0) + 1;
        travels(node.left);
        travels(node.right);
    };
    travels(root);
    
    for(let key in cache) {
        let anotherKey = k - key;
        if(key==anotherKey) {
            if(cache[key]>1) {
                return true;
            }
        }else {
            if(cache[anotherKey]) {
                return true;
            }
        }
    }

    return false;
};

