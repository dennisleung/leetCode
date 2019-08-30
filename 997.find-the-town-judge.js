/*
 * @lc app=leetcode id=997 lang=javascript
 *
 * [997] Find the Town Judge
 */
/*
✔ Accepted
  ✔ 89/89 cases passed (108 ms)
  ✔ Your runtime beats 53.59 % of javascript submissions
  ✔ Your memory usage beats 40 % of javascript submissions (43.7 MB)

better solution:
var findJudge = function(N, trust) {
  var graph = new Map ()
  for (let i = 1; i <= N; i ++) {
    graph.set(i, 1)
  }
  for (let [v, e] of trust) {
    // console.log(v, e)
    graph.set(v, graph.get(v) - 1) // the node which is not  trusted -1
    graph.set(e, graph.get(e) + 1) // the node which is  trusted + 1
  }
  for (let [key, value] of graph) {
    if (value === N) return key
  }
  return -1
};
*/
/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(N, trust) {
    if(N==1&&!trust.length) {//1\n[]
        return 1;
    }
    const cache = {};//存储被谁信任
    const cache2 = {};//存储信任谁
    for(let [a, b] of trust) {
        cache[b]=cache[b] || 0;
        cache[b]++;
        
        cache2[a]=cache2[a] || 0;
        cache2[a]++;
    }
    for(let index in cache) {
        if(cache[index]==N-1 && !cache2[index]) {
            return index;
        }
    }

    return -1;
};

