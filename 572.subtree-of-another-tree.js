/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
  ✔ 176/176 cases passed (824 ms)
  ✔ Your runtime beats 5.36 % of javascript submissions
  ✔ Your memory usage beats 5.23 % of javascript submissions (66.8 MB)


 better solution:
var isSubtree = function(s, t) {
    if (!s) return !t;
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(root1, root2) {
    if (!root1 || !root2) return !root1 && !root2;
    if (root1.val !== root2.val) return false;
    return isEqual(root1.left, root2.left) && isEqual(root1.right, root2.right);
} 


有点投机取巧的解法，思路和我原先的有点像，但是巧妙地用stringify化解了如何移除另一半子树的问题：
var isSubtree = function(s, t) {
    if(s!=null && t==null){return false;}
    let strS = JSON.stringify(s);
    let strT = JSON.stringify(t);
    return strS.indexOf(strT) != -1;
};
*/ 
const dfs = (root)=>{
    if(!root) {
        return [];
    }
    return [root].concat(dfs(root.left), dfs(root.right));
};

/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
    if(!s||!t) {//sanity check
        return false;
    }
    s = dfs(s);
    const validRoots = s.filter(node=>node.val==t.val);
    t = dfs(t).map(node=>node.val).join(",");
    for(let validRoot of validRoots) {
        s = dfs(validRoot);
        s = s.map(node=>node.val).join(",");
        if(s==t) {
            return true;
        }
    }
    return false;
};

