/*
 * @lc app=leetcode id=868 lang=javascript
 *
 * [868] Binary Gap
 */
/*
✔ Accepted
  ✔ 260/260 cases passed (52 ms)
  ✔ Your runtime beats 87.83 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34 MB)
*/
/**
 * @param {number} N
 * @return {number}
 */
var binaryGap = function(N) {
    let bs = N.toString(2);
    let max = 0;
    let pre = bs.indexOf("1");
    for(let i = pre+1; i<bs.length; i++) {
        if(bs[i]=="1") {
            max = Math.max(max, i-pre);
            pre = i;
        }
    }

    return max;
};

