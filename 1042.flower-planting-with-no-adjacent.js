/*
 * @lc app=leetcode id=1042 lang=javascript
 *
 * [1042] Flower Planting With No Adjacent
 */
/*
✔ Accepted
  ✔ 51/51 cases passed (196 ms)
  ✔ Your runtime beats 29.94 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (50 MB)

经典的图着色问题，主要思路是DFS+剪枝
*/

/**
 * @param {number} N
 * @param {number[][]} paths
 * @return {number[]}
 */
var gardenNoAdj = function(N, paths) {
    const cache = {};
    for(let [a, b] of paths) {
        a--;
        b--;
        cache[a] = cache[a] || [];
        cache[b] = cache[b] || [];
        cache[a].push(b);
        cache[b].push(a);
    }

    const isConflict = (nodes, i)=>{
        let cnodes = cache[i] || [];
        for(let cnode of cnodes) {
            if(cnode<i && nodes[cnode]==nodes[i]) {
                return true;
            }
        }
        return false;
    }; 
    const dfs = (nodes, i, colors)=>{
        if(i>=nodes.length) {//找到解
            return nodes;
        }
        for(let color of colors) {
            nodes[i] = color;
            if(!isConflict(nodes, i)) {
                const result = dfs(nodes, i+1, colors);
                throw result;
            }
        }

        return null;
    };
    const nodes = new Array(N).fill(0);
    const colors = [1, 2, 3, 4];
    try {
        dfs(nodes, 0, colors);
    }catch(result) {
        return result;
    }
};

