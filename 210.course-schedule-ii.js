/*
 * @lc app=leetcode id=210 lang=javascript
 *
 * [210] Course Schedule II
 */

/*
44/44 cases passed (3404 ms)
Your runtime beats 5.06 % of javascript submissions
Your memory usage beats 11.11 % of javascript submissions (72.8 MB)

better solution:
const findOrder = (numCourses, prerequisites) => {
  const inDegrees = Array(numCourses).fill(0);
  for (const [v] of prerequisites) {
    inDegrees[v]++;
  }

  const q = [];
  for (let i = 0; i < inDegrees.length; i++) {
    const degree = inDegrees[i];
    if (degree === 0) q.push(i);
  }

  const res = [];
  while (q.length) {
    const u0 = q.shift();
    numCourses--;
    res.push(u0);
    for (const [v, u] of prerequisites) {
      if (u === u0) {
        inDegrees[v]--;
        if (inDegrees[v] === 0) q.push(v);
      }
    }
  }
  return numCourses === 0 ? res : [];
};

BFS:
var findOrder = function(numCourses, prerequisites) {
  let adj = Array(numCourses).fill(null);
  let deg = Array(numCourses).fill(0);
  let order = [];
  for(let i = 0; i < prerequisites.length; i++) {
    let curr = prerequisites[i];
    if(!adj[curr[1]]) {
      adj[curr[1]] = [curr[0]];
    } else {
      adj[curr[1]].push(curr[0]);
    }
    deg[curr[0]]++;
  }
  
  let queue = [];
  for(let i = 0; i < numCourses; i++) {
    if(!deg[i]) queue.push(i);
  }
  while(queue.length) {
    let course = queue.shift();
    order.push(course);
    numCourses--;
    if(adj[course]) {
      for(let next of adj[course]) {
        if(--deg[next] == 0) {
          queue.push(next);
        }
      }
    }
  }
  
  return numCourses ? [] : order;
};


DFS:
var findOrder = function(numCourses, prerequisites) {
  let adj = Array(numCourses).fill(null);
  let visited = Array(numCourses).fill(0);
  let order = [];
  for(let i = 0; i < prerequisites.length; i++) {
    let curr = prerequisites[i];
    if(!adj[curr[1]]) {
      adj[curr[1]] = [curr[0]];
    } else {
      adj[curr[1]].push(curr[0]);
    }
  }
  
  for(let i = 0; i < numCourses; i++) {
    if(!dfs(order, adj, i, visited)) return [];
  }

  for(let i = 0; i < Math.floor(numCourses / 2); i++) {
    let temp = order[i];
    order[i] = order[numCourses - i - 1];
    order[numCourses - i - 1] = temp;
  }
  
  return order;
};

function dfs(order, g, course, visited) {
  if(g[course] == null) g[course] = [];
  if(visited[course] == 2) return true;
  if(visited[course] == 1) return false;
  visited[course] = 1;
  
  for(let next of g[course]) {
    if(!dfs(order, g, next, visited)) return false;
  }
  visited[course] = 2;
  order.push(course);
  return true;
}
*/

// @lc code=start
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    const getMap = function(prerequisites) {//依赖b的数组
        const map = {};
        for(let prerequisity of prerequisites) {
            const [a, b] = prerequisity;
            map[b] = map[b] || [];
            map[b].push(prerequisity);
        }

        return map;
    };

    const result = [];
    while(true) {
        const map = getMap(prerequisites);
        let _prerequisites = [];
        for(let b in map) {
            _prerequisites = _prerequisites.concat(map[b].filter(([a, b])=>{
                if(map[a]) {
                    return true;
                }else {
                    if(result.indexOf(a)===-1) {
                        result.unshift(a);
                    }
                    return false;
                }
            }));
        }
        if(!_prerequisites.length) {
            break;
        }else if(prerequisites.length==_prerequisites.length) {
            return [];
        }else {
            prerequisites = _prerequisites;
        }
    }

    for(let i = 0; i<numCourses; i++) {
        if(result.indexOf(i)===-1) {
            result.unshift(i);
        }
    }
    return result;
};

// test cases:
// assertCompare(()=>findOrder(2, [[1,0]]), [0,1]);
// assertCompare(()=>findOrder(4, [[1,0],[2,0],[3,1],[3,2]]), [0,2,1,3]);//[0,1,2,3]

// @lc code=end

