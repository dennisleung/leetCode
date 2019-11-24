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
Runtime: 80 ms, faster than 81.44% of JavaScript online submissions for Populating Next Right Pointers in Each Node.
Memory Usage: 39.8 MB, less than 33.33% of JavaScript online submissions for Populating Next Right Pointers in Each Node.

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

