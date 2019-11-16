/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 */
/*
19/19 cases passed (1704 ms)
Your runtime beats 15.23 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (34.4 MB)

better dp solution:
var numTrees = function(n) {
    var dp = new Array(n+1).fill(0);
    dp[0] = 1;
    dp[1] = 1;
    var i,j;
    for(i = 2; i <= n; i++){
        for(j = 1; j <= i;j++){
            dp[i] += dp[i - j]*dp[j-1]
        }        
    }
    return dp[n];
};

math solution:
//https://leetcode.com/problems/unique-binary-search-trees/discuss/276140/Javascript-SIMPLEST-Just-math-no-loops.-Faster-than-97.
var numTrees = function(n) {
    return factorial( 2 * n ) / ( factorial( n + 1 ) * factorial( n ) );
};

function factorial( num ){
    if( num <= 0 )
        return 1;
    else
        return num * factorial( num - 1 );
}
*/
// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(max, min=1) {
    if(min>max) {
        return 0;
    }
    if(max-min<2) {
        return max-min+1;
    }

    let count = 0;
    for(let i = min; i<=max; i++) {
        let leftCount = i>min ? numTrees(i-1, min) : 1;
        let rightCount = i<max ? numTrees(max, i+1) : 1;
        count += leftCount * rightCount;
    }

    return count;
};

// test cases:
// assertCompare(()=>numTrees(0), 0);
// assertCompare(()=>numTrees(1), 1);
// assertCompare(()=>numTrees(3), 5);
// @lc code=end

