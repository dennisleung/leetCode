/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */
/*
101/101 cases passed (144 ms)
Your runtime beats 29.81 % of javascript submissions
Your memory usage beats 17.39 % of javascript submissions (46.7 MB)
*/
// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const result = {};
    strs.forEach((str)=>{
        const key = str.split("").sort((a,b)=>a.charCodeAt(0)-b.charCodeAt(0)).join("");
        result[key] = result[key] || [];
        result[key].push(str);
    });

    return Object.values(result);
};

// test cases:
// console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// @lc code=end

