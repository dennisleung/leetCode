/*
 * @lc app=leetcode id=541 lang=javascript
 *
 * [541] Reverse String II
 */
/*
✔ Accepted
  ✔ 60/60 cases passed (68 ms)
  ✔ Your runtime beats 66.45 % of javascript submissions
  ✔ Your memory usage beats 71.19 % of javascript submissions (36.8 MB)

better solution:（思路和我的一样，但是通过splice减少了一次slice）
var reverseStr = function(s, k) {
    if (k > s.length) return s.split('').reverse().join('');//这一行应该可以省略
    
    const split = s.split('');
    
    // reverse the segment and put it back
    for (let i = 0; i < s.length; i += 2*k) {
        const reverse = split.splice(i, k).reverse();
        split.splice(i, 0, ...reverse);
    }
    
    return split.join('');
};

*/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    s = s.split("");
    let i = 0;
    while(i<s.length) {
        let tmp = s.slice(i, i+k);
        s.splice(i, k, ...tmp.reverse());
        i += 2*k;
    }
    return s.join("");
};

