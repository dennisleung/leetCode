/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */

/*
42/42 cases passed (3460 ms)
Your runtime beats 5.02 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (72.3 MB)

判断图中是否有环的通用解法：
https://www.cnblogs.com/cmai/p/7517729.html
1.统计各个图中各个点的入度数（能够到达这个点的点的数量）。
2.然后找出入度数为0的点（无向图找入度数为1的点）。
3.删除入度数为0的点，将其边也删除。
4.重复2，直到所有点入度都为0，则为无环图，如果找不到入度为0的点，则为有环图。

dfs solution:
function canFinish(numCourses, prerequisites) {
  const seen = new Set();
  const seeing = new Set();
  const adj = [...Array(numCourses)].map(r => []);
  
  for (let [u, v] of prerequisites) {
    adj[v].push(u);
  }
  
  for (let c = 0; c < numCourses; c++) {
    if (!dfs(c)) {
      return false;
    }
  }
  return true;
  
  function dfs(v) {
    if (seen.has(v)) return true;
    if (seeing.has(v)) return false;
    
    seeing.add(v);
    for (let nv of adj[v]) {
      if (!dfs(nv)) {
        return false;
      }
    }
    seeing.delete(v);
    seen.add(v);
    return true;
  }
}

js array的forEach, every, some的区别:
1、forEach对每一个元素无差别调用，无返回值
2、every只要其中一个返回false终止循环
3、some只要其中一个返回true终止循环
*/

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const getMap = function(prerequisites) {
        const map = {};
        for(let prerequisity of prerequisites) {
            const [a, b] = prerequisity;
            map[b] = map[b] || [];
            map[b].push(prerequisity);
        }

        return map;
    };

    while(true) {
        const map = getMap(prerequisites);
        let _prerequisites = [];
        for(let b in map) {
            _prerequisites = _prerequisites.concat(map[b].filter(([a, b])=>{
                return !!map[a];
            }));
        }
        if(!_prerequisites.length) {
            return true;
        }else if(prerequisites.length==_prerequisites.length) {
            return false;
        }else {
            prerequisites = _prerequisites;
        }
    }
};
// @lc code=end

