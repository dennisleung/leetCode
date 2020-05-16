/*
 * @lc app=leetcode id=117 lang=javascript
 *
 * [117] Populating Next Right Pointers in Each Node II
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
55/55 cases passed (424 ms)
Your runtime beats 5.67 % of javascript submissions
Your memory usage beats 83.33 % of javascript submissions (68.1 MB)

recursive solution:
var connect = function(root) {
    if(!root) return
    var pass = null
    if(root.next) pass = root.next
    if(root.right) {
        if(root.left) root.left.next = root.right
        if(pass){
            while(!pass.left && !pass.right && pass.next) pass = pass.next
            if(pass.left) root.right.next = pass.left
            if(!pass.left && pass.right) root.right.next = pass.right
        }
    }
    if(root.left && !root.right){
        if(pass){
            while(!pass.left && !pass.right && pass.next) pass = pass.next
            if(pass.left) root.left.next = pass.left
            if(!pass.left && pass.right) root.left.next = pass.right
        }
    }
    connect(root.right)
    connect(root.left)
};

BFS solution:
var connect = function(root) {
    if(!root) return;
    const queue = [root];
    
    while(queue.length) {
        let size  = queue.length;
        
        for(let i = 0; i < size; i++) {
            const currentNode = queue.shift();
            let next;
            if(i < size - 1) {
                next = queue[0] 
            } else {
                next = null;
            }
            currentNode.next = next;
            if(currentNode.left) queue.push(currentNode.left);
            if(currentNode.right) queue.push(currentNode.right);
        }
    }
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
// @lc code=end

