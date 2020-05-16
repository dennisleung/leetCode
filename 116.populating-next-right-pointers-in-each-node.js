/*
 * @lc app=leetcode id=116 lang=javascript
 *
 * [116] Populating Next Right Pointers in Each Node
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/*
12/12 cases passed (100 ms)
Your runtime beats 7.22 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (39.6 MB)

recursive solution:
var connect = function(root) {
    if (!root || !root.left) { // sanity check
        return;
    }
    
    root.left.next = root.right;                         // connect left -> right
    root.right.next = root.next ? root.next.left : null; // connect right -> next's left
    
    connect(root.left);
    connect(root.right);
};
*/

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
    if(!root) {
        return null;
    }
    let arr = [root];
    while(arr.length) {
        const nextArr = [];
        for(let i = 0; i<arr.length; i++) {
            const node = arr[i];
            if(arr[i+1]) {
                node.next = arr[i+1];
            }
            node.left && nextArr.push(node.left);
            node.right && nextArr.push(node.right);
        }
        arr = nextArr;
    }

    return root;
};

// test cases:
// assertCompare(()=>connect(makeTree([])), makeTree([]));
// assertCompare(()=>connect(makeTree([1])), makeTree([1]));
// connect(makeTree([1,2,3,4,5,6,7]));
// @lc code=end

