/*
 * @lc app=leetcode id=783 lang=javascript
 *
 * [783] Minimum Distance Between BST Nodes
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
  ✔ 45/45 cases passed (52 ms)
  ✔ Your runtime beats 89.11 % of javascript submissions
  ✔ Your memory usage beats 43.08 % of javascript submissions (34.8 MB)

Iterative Inorder Solution:
onst minDiffInBST = root => {
    const stack = [];
    let curr = root, prev = null, min = Infinity;
    
    while (stack.length || curr) {
        if (curr) {
            stack.push(curr);
            curr = curr.left;
        } else {
            curr = stack.pop();
            
            if (prev) {
                min = Math.min(min, Math.abs(curr.val - prev.val))
            }
            prev = curr;
						
            curr = curr.right;
        }
    }
    
    return min;
};

Recursive Solution:
const minDiffInBST = root => {
    let prev = null;
    let min = Infinity;
    
    const inorder = curr => {
        if (!curr) return;
        
        inorder(curr.left);
        
        if (prev) {
            min = Math.min(min, Math.abs(curr.val - prev.val));
        }
        prev = curr;
        
        inorder(curr.right);
    };
    
    inorder(root);
    return min;
};
 */
const preorderTraversal = function(root) {
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
 * @return {number}
 */
var minDiffInBST = function(root) {
    let arr = preorderTraversal(root);
    let minDistance = Infinity;
    for(let i = 0, len = arr.length; i<len-1; i++) {//这里应该可以和先序遍历的代码结合起来，去掉这个循环。
        let distance = arr[i+1]["val"]-arr[i]["val"];
        if(minDistance>distance) {
            minDistance = distance;
        }
    }

    return minDistance;
};

