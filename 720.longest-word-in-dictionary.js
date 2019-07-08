/*
 * @lc app=leetcode id=720 lang=javascript
 *
 * [720] Longest Word in Dictionary
 */
/*
✔ Accepted
  ✔ 57/57 cases passed (100 ms)
  ✔ Your runtime beats 68.66 % of javascript submissions
  ✔ Your memory usage beats 89.02 % of javascript submissions (39.7 MB)

找出所有前缀都在words里面的word

more elegant solution:
var longestWord = function(words) { 
    let set = new Set(words);
    let res = "";
    words.forEach(a => {
        if(a.length < res.length) return;
        if(a.length == res.length && a > res) return;
        for(let i = a.length - 1; i> 0 ; i--) {
            if( !set.has( a.substring(0, i))) return
            
        }
        res = a;
    })
    return res;
};
*/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    words.sort((a, b)=>{
        if(a.length<b.length) {
            return 1;
        }else if(a.length>b.length) {
            return -1;
        }else {
            return a>b ? 1 : -1;
        }
    });//can be simplied to words.sort();

    const map = {};
    for(let word of words) {
        map[word] = 1;
    }

    for(let word of words) {
        let flag = true;
        for(let i = 1, len = word.length; i<len; i++) {
            if(!map[word.slice(0, i)]) {
                flag = false;
                break;
            }
        }
        if(flag) {
            return word;
        }
    }

    return "";
};

