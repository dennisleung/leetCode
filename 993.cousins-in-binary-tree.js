/*
 * @lc app=leetcode id=993 lang=javascript
 *
 * [993] Cousins in Binary Tree
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
  ✔ 103/103 cases passed (60 ms)
  ✔ Your runtime beats 52.09 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.2 MB)

*/

/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
    const _findNode = (node, parentNode, val, depth)=>{
        if(node.val==val) {
            throw [parentNode, depth];
        }
        node.left && _findNode(node.left, node, val, depth+1);
        node.right && _findNode(node.right, node, val, depth+1);
    }
    const findNode = (val) => {
        try {
            _findNode(root, null, val, 0);
        }catch(result){
            return result;
        }
    };

    const [xRoot, xDepth] = findNode(x);
    const [yRoot, yDepth] = findNode(y);
    return xDepth==yDepth && xRoot&&yRoot&&xRoot.val!=yRoot.val;
};

