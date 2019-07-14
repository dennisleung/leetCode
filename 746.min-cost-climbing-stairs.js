/*
 * @lc app=leetcode id=746 lang=javascript
 *
 * [746] Min Cost Climbing Stairs
 */
/*
✔ Accepted
  ✔ 276/276 cases passed (68 ms)
  ✔ Your runtime beats 36.36 % of javascript submissions
  ✔ Your memory usage beats 5.16 % of javascript submissions (40.2 MB)

better solution:
var minCostClimbingStairs = function(cost) {
    if(!cost) return 0;
    var n=cost.length;
    if(n == 1) return cost[0];
    var dp=[];
    dp[0]=cost[0];
    dp[1]=cost[1];
    if(n==2) return dp[1];
    for(var i=2; i<n; i++){
        dp[i] =Math.min(dp[i-2], dp[i-1])+cost[i];
    }
    return Math.min(dp[n-1], dp[n-2]);
};

better solution:
var minCostClimbingStairs = function(cost) {
	for(let i = 2; i < cost.length; i++) {
		cost[i] += Math.min(cost[i - 1], cost[i - 2]);
    }
    return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
}
*/

/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost, mustStartFromZero = false) {
    const cache = {};
    const climb = (start, mustStartFromZero = false)=>{
        const cacheKey = `${start}_${mustStartFromZero}`;
        if(cache[cacheKey]===void 0) {
            if(start>=cost.length) {
                return 0;
            }else if(start+2>cost.length) {
                return cost[start];
            }

            let a = cost[start] + climb(start+1);
            let b = cost[start] + climb(start+2, true);
            let c = mustStartFromZero ? Infinity : (cost[start+1] + climb(start+2));
            let d = mustStartFromZero ? Infinity : (cost[start+1] + climb(start+3, true));

            cache[cacheKey] = Math.min(a, b, c, d);
        }
        
        return cache[cacheKey];
    };

    return climb(0);
};

