/*
 * @lc app=leetcode id=235 lang=javascript
 *
 * [235] Lowest Common Ancestor of a Binary Search Tree
 *
 * https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/description/
 *
 * algorithms
 * Easy (43.91%)
 * Total Accepted:    269.7K
 * Total Submissions: 612.1K
 * Testcase Example:  '[6,2,8,0,4,7,9,null,null,3,5]\n2\n8'
 *
 * Given a binary search tree (BST), find the lowest common ancestor (LCA) of
 * two given nodes in the BST.
 * 
 * According to the definition of LCA on Wikipedia: “The lowest common ancestor
 * is defined between two nodes p and q as the lowest node in T that has both p
 * and q as descendants (where we allow a node to be a descendant of itself).”
 * 
 * Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]
 * 
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
 * Output: 6
 * Explanation: The LCA of nodes 2 and 8 is 6.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
 * Output: 2
 * Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant
 * of itself according to the LCA definition.
 * 
 * 
 * 
 * 
 * Note:
 * 
 * 
 * All of the nodes' values will be unique.
 * p and q are different and both values will exist in the BST.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/*
注意这道题的题干，这是一棵『二分查找树』。
better solution:
var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }  else if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};
 */
 
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let arr = [root]
    let pNode;
    let qNode;
    while(arr.length && (!pNode || !qNode)) {
        let parent = arr.pop();
        let left = parent.left;
        let right = parent.right;
        if(left) {
            left.parent = parent;
            arr.push(left);
        }
        if(right) {
            right.parent = parent;
            arr.push(right);
        }
        if(parent.val==p.val) {
            pNode = parent;
        }
        if(parent.val==q.val) {
            qNode = parent;
        }
    }

    let pMap = {};
    while(pNode) {
        pMap[pNode.val] = pNode;
        pNode = pNode.parent;
    }
    
    while(qNode) {
        if(pMap[qNode.val]) {
            return pMap[qNode.val];
        }
        qNode = qNode.parent;
    }

    return null;
};

