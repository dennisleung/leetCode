/*
 * @lc app=leetcode id=93 lang=javascript
 *
 * [93] Restore IP Addresses
 */

/*
147/147 cases passed (84 ms)
Your runtime beats 10.48 % of javascript submissions
Your memory usage beats 25 % of javascript submissions (37.1 MB)

没想出来，看了百度的解题思路后实现的。。
https://www.cnblogs.com/grandyang/p/4305572.html

*/

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s, preArr=[], result=[]) {
    if(preArr.length>=4) {
        if(!s) {
            result.push(preArr);
        }else {
            return [];
        }
    }

    let tmp = "";
    for(let i = 0; i<Math.min(3, s.length); i++) {
        tmp += s[i];
        if(tmp.length>1 && tmp[0]=="0") {
            continue;
        }
        if(parseInt(tmp)>255) {
            continue;
        }

        restoreIpAddresses(s.slice(i+1), [...preArr, tmp], result);
    }

    return result.map(v=>v.join("."));
};

// test cases:
// assertCompare(()=>restoreIpAddresses("25525511135"), ["255.255.11.135", "255.255.111.35"]);
// assertCompare(()=>restoreIpAddresses("000"), []);
// assertCompare(()=>restoreIpAddresses(""), []);
// assertCompare(()=>restoreIpAddresses("256256256256"), []);
// assertCompare(()=>restoreIpAddresses("2562562562567"), []);
// assertCompare(()=>restoreIpAddresses("0000"), ["0.0.0.0"]);

// @lc code=end

