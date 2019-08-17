/*
 * @lc app=leetcode id=17 lang=javascript
 *
 * [17] Letter Combinations of a Phone Number
 */
/*
✔ Accepted
  ✔ 25/25 cases passed (48 ms)
  ✔ Your runtime beats 89.32 % of javascript submissions
  ✔ Your memory usage beats 35.71 % of javascript submissions (33.9 MB)

better solution:
var letterCombinations = function (digits) {
  const combo = (arr1, arr2) => arr1.reduce((arr, s1) => arr.concat(arr2.map(s2 => s1 + s2)), []);
  return digits ? digits.split("").map(n => ["abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"][n - 2].split("")).reduce((res, arr) => combo(res, arr)) : [];
};

dfs solution:
function letterCombinations(digits) {
    var map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
    var res = [];
    var prefix = [];
    
    if (digits.length) {
        traverse(0);
    }
    return res;
    
    function traverse(idx) {
        if (idx === digits.length) {
            return res.push(prefix.join(''));
        }
        
        var str = map[digits[idx] - '0'];
        
        for (var i = 0; i < str.length; i++) {
            prefix.push(str[i]);
            traverse(idx + 1);
            prefix.pop();
        }
    }
}
*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits) {
        return [];
    }
    const map = {
        "1" : [],
        "2" : ["a", "b", "c"],
        "3" : ["d", "e", "f"],
        "4" : ["g", "h", "i"],
        "5" : ["j", "k", "l"],
        "6" : ["m", "n", "o"],
        "7" : ["p", "q", "r", "s"],
        "8" : ["t", "u", "v"],
        "9" : ["w", "x", "y", "z"],
        "0" : [" "],
    };
    let result = [""];
    digits = digits.split("");
    while(digits.length) {
        let letters = map[digits.shift()];
        let tmp = [];
        for(let letter of letters) {
            for(let str of result) {
                tmp.push(str+letter);
            }
        }
        result = tmp;
    }

    return result;
};

