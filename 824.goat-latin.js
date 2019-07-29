/*
 * @lc app=leetcode id=824 lang=javascript
 *
 * [824] Goat Latin
 */
/*
✔ Accepted
  ✔ 99/99 cases passed (56 ms)
  ✔ Your runtime beats 68.51 % of javascript submissions
  ✔ Your memory usage beats 23.81 % of javascript submissions (34.7 MB)
*/

/**
 * @param {string} S
 * @return {string}
 */
var toGoatLatin = function(S) {
    const vowels = {"a":true, "e":true, "i":true, "o":true, "u":true, "A":true, "E":true, "I":true, "O":true, "U":true};
    return S.split(" ").map((v, i)=>{
        let str = new Array(i+2).join("a");
        if(vowels[v[0]]) {
            str = v + "ma" + str;
        }else {
            str = v.slice(1) + v[0] + "ma" + str;
        }

        return str;
    }).join(" ");
};

