/*
 * @lc app=leetcode id=455 lang=javascript
 *
 * [455] Assign Cookies
 */

/*
✔ Accepted
  ✔ 21/21 cases passed (176 ms)
  ✔ Your runtime beats 12.2 % of javascript submissions
  ✔ Your memory usage beats 5 % of javascript submissions (38.9 MB)


better solution:
var findContentChildren = function(g, s) {
    g.sort(function(a, b) { return a - b})
    s.sort(function (a, b) { return a - b })
    var j = 0;

    s.forEach((element) => { 
        if (element >= g[j]) { 
            j++
        }
    })
    return j  
};
*/

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let count = 0;
    g.sort((a, b)=>{return a-b});
    for(let si of s) {
        for(var i = 0, len = g.length; i<len-1; i++) {
            if(g[i]<=si && si<g[i+1]) {
                break;
            }
        }
        if(si>=g[i]) {
            count++;
            g.splice(i, 1);
        }
    }

    return count;
};

