/*
 * @lc app=leetcode id=133 lang=javascript
 *
 * [133] Clone Graph
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/*
20/20 cases passed (96 ms)
Your runtime beats 57 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (44.8 MB)

这道题一直ac不过去，但是比对过输出是正确的。。

dfs solution:
var cloneGraph = function(node) {
    if (!node) return node;
    
    const seen = {};
    const copy = new Node(node.val, []);
    
    seen[node.val] = copy;
    dfs(node, seen, copy)
    
    return copy
};
var dfs = function(node, seen, copies) {
    for (let neighbor of node.neighbors) {
        if (!seen[neighbor.val]) {
            const copy = new Node(neighbor.val, []);
            seen[neighbor.val] = copy;
            copies.neighbors.push(copy);
            dfs(neighbor, seen, copy);
        } else {
            copies.neighbors.push(seen[neighbor.val])
        }
    }
}


another solution work for duplicate value:
var cloneGraph = function(node) {
    
    const visited = new Set();
    const cloned = new Map();
    
    const helper = (node) => {
        
        if(!node || visited.has(node)) return;
        
        visited.add(node);
        
        const clone = new Node(node.val, []);
        cloned.set(node, clone);
        
        for(let i = 0; i < node.neighbors.length; i++) {
            
            const neighbor = node.neighbors[i];
            helper(neighbor);
            clone.neighbors.push(cloned.get(neighbor));
            
        }
        
        return clone;
        
    };
    
    return helper(node);
    
};
*/

/*
//一直ac不过去的解法
var cloneGraph = function(node) {
    if(!node) {
        return null;
    }
    const queue = [node];
    const everInQueue = new Set();
    const map = new Map();
    let rootNode = null;
    everInQueue.add(node);
    while(queue.length) {
        const n = queue.shift();        
        const _node = new Node(n.val, []);
        map.set(n, _node);
        for(let _n of n.neighbors) {
            let _newN = map.get(_n);
            if(_newN) {
                _node.neighbors.push(_newN);
                _newN.neighbors.push(_node);
            }else {
                if(!everInQueue.has(_n)) {
                    queue.push(_n);
                    everInQueue.add(_n);
                }
            }
        }
        if(!rootNode) {
            rootNode = _node;
        }
    }

    return rootNode;
};
*/

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, cache = {}) {
    if(cache[node.val]) {
        return cache[node.val];
    }

    cache[node.val] = new Node(node.val, []);
    cache[node.val].neighbors = node.neighbors.map(v=>cloneGraph(v, cache));
    
    return cache[node.val];
};

// test cases:
// const node1 = new Node(1, []);
// const node2 = new Node(2, []);
// const node3 = new Node(3, []);
// const node4 = new Node(4, []);
// node1.neighbors = [node2, node4];
// node2.neighbors = [node1, node3];
// node3.neighbors = [node2, node4];
// node4.neighbors = [node1, node3];
// console.log(cloneGraph(node1));
// @lc code=end

