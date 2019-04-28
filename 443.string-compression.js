/*
 * @lc app=leetcode id=443 lang=javascript
 *
 * [443] String Compression
 */

/*
✔ Accepted
  ✔ 70/70 cases passed (68 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 80 % of javascript submissions (36.9 MB)

这道题插件的例子太少描述不清，还是去lc上看原题吧。。

*/

/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let cur = 0;
    for(let i = cur; i<chars.length;) {//注意这里不能用缓存chars.length,因为数组长度在动态变化
        let ch = chars[cur];
        let count = 1;
        while(chars[i+1]==ch) {
            count++;
            i++;
        }
        if(count>1) {
            count = "" + count;
            chars.splice(cur+1, i-cur, ...count);
            cur = i = cur + count.length + 1;
        }else {
            cur = ++i;
        }
    }
};

