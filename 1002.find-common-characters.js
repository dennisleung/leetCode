/*
 * @lc app=leetcode id=1002 lang=javascript
 *
 * [1002] Find Common Characters
 */
/*
✔ Accepted
  ✔ 83/83 cases passed (104 ms)
  ✔ Your runtime beats 24.21 % of javascript submissions
  ✔ Your memory usage beats 7.14 % of javascript submissions (43.7 MB)

better solution:
var commonChars = function(A) {
    let originalChars = A[0].split('');
    for (let i = 1; i < A.length; i++) {
        let tempChars = A[i].split('');
        originalChars = originalChars.filter(char => {
            let ind = tempChars.indexOf(char);
            return ind > -1 ? tempChars[ind] = true : false;
        });
    }
    return originalChars;
};

better solution:
let tmp = A.map(elm=>elm.split(''));
    return tmp.reduce((res,arr, i)=>{
        if (i===0)return res;
        return res.filter(char =>{
            let position = arr.indexOf(char);
            if ( position ===-1) return false;
            arr.splice(position,1);
            return true;
        });
    },tmp[0]);

better solution:
const commonChars = (A) => {
    return A.reduce((acc, i) => {
        return Array.from(i).filter((c) => {
            const index = acc.indexOf(c);
            if(index >= 0) {
                acc.splice(index, 1)
                return c;
            }
        })
    }, A[0].split(''));
  };
*/
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
    let cache = {};
    let inited = false;
    for(let str of A) {
        let newCache = {};
        for(let ch of str) {
            if(inited) {
                newCache[ch] = Math.min((newCache[ch]||0)+1, cache[ch]||0);
            }else {
                newCache[ch] = (newCache[ch]||0) + 1;
            }
        }
        inited = true;
        cache = newCache;
    }

    const result = [];
    for(let ch in cache) {
        for(let i = 0; i<(cache[ch]||0); i++) {
            result.push(ch);
        }
    }
    return result;
};

