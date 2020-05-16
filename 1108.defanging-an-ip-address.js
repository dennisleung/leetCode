/*
 * @lc app=leetcode id=1108 lang=javascript
 *
 * [1108] Defanging an IP Address
 */
/*
✔ Accepted
  ✔ 62/62 cases passed (48 ms)
  ✔ Your runtime beats 89.14 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.1 MB)
*/
/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]');
};

