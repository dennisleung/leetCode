/*
 * @lc app=leetcode id=134 lang=javascript
 *
 * [134] Gas Station
 */
/*
31/31 cases passed (184 ms)
Your runtime beats 15.96 % of javascript submissions
Your memory usage beats 33.33 % of javascript submissions (40.7 MB)

O(n) solution:
var canCompleteCircuit = function(gas, cost) {
    var sum=0;
    var total=0;
    var start=0;
    for(var i=0; i<gas.length; i++){
        sum+= gas[i]-cost[i];
        total+= gas[i]-cost[i];
        if(sum<0){
            sum=0;
            start=i+1;
        }
    }
    return total >=0? start: -1;
};
*/

// @lc code=start
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    const N = gas.map((g,i)=>gas[i]-cost[i]);
    const isValidN = function(index) {
        const arr = N.slice(index).concat(N.slice(0, index));
        let sum = 0;
        for(let n of arr) {
            sum += n;
            if(sum<0) {
                return false;
            }
        }
        return true;
    };
    for(let i = 0; i<N.length; i++) {
        if(N[i]>=0 && isValidN(i)) {
            return i;
        }
    }
    return -1;
};

// test cases:
// assertCompare(()=>canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]), 3);
// assertCompare(()=>canCompleteCircuit([2,3,4], [3,4,3]), -1);
// assertCompare(()=>canCompleteCircuit([2], [2]), 0);

// @lc code=end

