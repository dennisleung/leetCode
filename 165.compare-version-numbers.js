/*
 * @lc app=leetcode id=165 lang=javascript
 *
 * [165] Compare Version Numbers
 */
/*
72/72 cases passed (52 ms)
Your runtime beats 77.14 % of javascript submissions
Your memory usage beats 80 % of javascript submissions (33.8 MB)

more clean solution:
var compareVersion = function(version1, version2) {
    const v1 = version1.split('.').map(v => parseInt(v, 10));
    const v2 = version2.split('.').map(v => parseInt(v, 10));
    const max = Math.max(v1.length, v2.length);
    for(let i = 0; i < max; i++) {
        const sem1 = v1[i] || 0;
        const sem2 = v2[i] || 0;
        if (sem1 !== sem2)
            return sem1 > sem2 ? 1 : - 1;
    }
    // looks like it was all equal!
    return 0;
};
*/

// @lc code=start
/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function(version1, version2) {
    let v1s = version1.split(".").map(v=>parseInt(v));
    let v2s = version2.split(".").map(v=>parseInt(v));
    let maxLen = Math.max(v1s.length, v2s.length);
    let pd0 = new Array(maxLen).fill(0);
    v1s = v1s.concat(pd0).slice(0, maxLen);
    v2s = v2s.concat(pd0).slice(0, maxLen);

    for(let i = 0; i<maxLen; i++) {
        if(v1s[i]>v2s[i]) {
            return 1;
        }else if(v1s[i]<v2s[i]) {
            return -1;
        }
    }

    return 0;
};

// test cases:
// assertCompare(()=>compareVersion("0.1", "1.1"), -1);
// assertCompare(()=>compareVersion("1.0.1", "1"), 1);
// assertCompare(()=>compareVersion("7.5.2.4", "7.5.3"), -1);
// assertCompare(()=>compareVersion("1.01", "1.001"), 0);
// assertCompare(()=>compareVersion("1.0", "1.0.0"), 0);

// @lc code=end

