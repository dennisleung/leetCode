/*
 * @lc app=leetcode id=1010 lang=javascript
 *
 * [1010] Pairs of Songs With Total Durations Divisible by 60
 */
/*
✔ Accepted
  ✔ 34/34 cases passed (5448 ms)
  ✔ Your runtime beats 35.22 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (37.5 MB)

better solution:
var numPairsDivisibleBy60 = time => {
    let c = new Array(60).fill(0)
    return time.reduce((acc, cur) => {
        acc += c[(60 - cur % 60) % 60]//注意这里最后要对60求余，防止出现(60-120%60)的情况
        c[cur % 60] += 1 
        return acc
    }, 0)
}
*/
/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(time) {
    let count = 0;
    for(let i = 0; i<time.length; i++) {
        for(let j = i+1; j<time.length; j++) {
            if((time[i]+time[j])%60==0) {
                count++;
            }
        }
    }

    return count;
};

