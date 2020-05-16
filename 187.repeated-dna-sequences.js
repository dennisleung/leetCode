/*
 * @lc app=leetcode id=187 lang=javascript
 *
 * [187] Repeated DNA Sequences
 */
/*
32/32 cases passed (108 ms)
Your runtime beats 58.08 % of javascript submissions
Your memory usage beats 50 % of javascript submissions (58.3 MB)
*/

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    const cache = {};
    const result = [];
    for(let i = 0, len = s.length-9; i<len; i++) {
        const str = s.substr(i, 10);
        cache[str] = (cache[str] || 0) + 1;
        if(cache[str]==2) {
            result.push(str);
        }
    }

    return result;
};

// test cases:
// assertCompare(()=>findRepeatedDnaSequences("AA"), []);
// assertCompare(()=>findRepeatedDnaSequences("AAAAAAAAA"), []);
// assertCompare(()=>findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"), ["AAAAACCCCC", "CCCCCAAAAA"]);

// @lc code=end

