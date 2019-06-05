/*
 * @lc app=leetcode id=594 lang=javascript
 *
 * [594] Longest Harmonious Subsequence
 */
/*
✔ Accepted
  ✔ 201/201 cases passed (160 ms)
  ✔ Your runtime beats 36.1 % of javascript submissions
  ✔ Your memory usage beats 16.1 % of javascript submissions (46.6 MB)


more elegant solution without sort:
var findLHS = function(nums) {
    let res = 0, s = {};
    nums.forEach(e => e in s ? s[e]++ : s[e]=1);
    Object.keys(s).forEach(e => (~~e + 1) in s && (res = Math.max(res, s[e] + s[~~e + 1])));
    return res;
}
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function(nums) {
    const map = {};
    for(let num of nums) {
        map[num] = (map[num] || 0) +1;
    }

    const difNums = Object.keys(map).sort((a,b)=>a-b);
    let maxLen = 0;
    for(let i = 1, len = difNums.length;i<len;i++) {
        let a = difNums[i];
        let b = difNums[i-1];
        if(a-b==1 && map[a]+map[b]>maxLen) {
            maxLen = map[a]+map[b];
        }
    }

    return maxLen;
};

