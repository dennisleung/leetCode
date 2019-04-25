/*
 * @lc app=leetcode id=429 lang=javascript
 *
 * [429] N-ary Tree Level Order Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */
/*
better solution, nearly runtime but more intuitive and easy to understand:
var levelOrder = function(root) {
    let levels = [];
    
    function putLevels(root, depth){
        if(!root) {
            return;
        }
        if(!levels[depth]){
            levels[depth] = [];
        }
        levels[depth].push(root.val);
        depth++;
        for(let i = 0; i < root.children.length; i++){
            putLevels(root.children[i], depth);
        }
    };
    
    putLevels(root, 0);  
    return levels;
};
*/

/**
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {//sanity check
        return [];
    }
    let result1 = [];
    let result2 = []
    let queue1 = [];//根
    let queue2 = [root];//子
    while(queue2.length) {
        queue1 = queue2;
        queue2 = [];
        result2 = [];
        while(queue1.length) {
            let rootNode = queue1.shift();
            result2.push(rootNode.val);
            if(rootNode.children) {
                for(let childNode of rootNode.children) {
                    queue2.push(childNode);
                }
            }
        }
        result1.push(result2);
    }

    return result1;
};

