/*
 * @lc app=leetcode id=1029 lang=javascript
 *
 * [1029] Two City Scheduling
 */
/*
✔ Accepted
  ✔ 49/49 cases passed (56 ms)
  ✔ Your runtime beats 82.11 % of javascript submissions
  ✔ Your memory usage beats 20 % of javascript submissions (35.1 MB)

没做出来。。
解答：https://www.cnblogs.com/xiaochuan94/p/11186875.html
我们可以通过计算去A市、B市之间花费的差值cost[i][0]-cost[i][1]，来判断哪一部分人去A市，哪一部分人去B市，差值最小的人去A市，因为差值越小，去A市是越省钱的。只要把去A市的人确定了，剩下的都去B市就行。

dp的解法：
https://leetcode.com/problems/two-city-scheduling/discuss/278731/Java-DP-Easy-to-Understand
*/

/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    costs.sort(([Aofa, Bofa], [Aofb, Bofb])=>(Aofa-Bofa)-(Aofb-Bofb));
    return costs.reduce((sum, v, i)=>{
        return sum + (i<costs.length/2?v[0]:v[1]);
    }, 0);
};

