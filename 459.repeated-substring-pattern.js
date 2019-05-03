/*
 * @lc app=leetcode id=459 lang=javascript
 *
 * [459] Repeated Substring Pattern
 */

/*
✔ Accepted
  ✔ 120/120 cases passed (76 ms)
  ✔ Your runtime beats 76.79 % of javascript submissions
  ✔ Your memory usage beats 30.77 % of javascript submissions (39.3 MB)

better solution:
var repeatedSubstringPattern = function(s) {
    if (s.length === 0 || s.length === 1) return false;
    for (let i = 1; i <= s.length / 2; i++) {//i是子串长度
        if (s.length % i === 0 && s.slice(0, i).repeat(s.length / i) === s) {
            return true;
        }
    }
    return false;
};
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const isRepeatedSubStr = function(subStr) {
        let ss = s;
        while(true) {
            let slicePart = ss.slice(0, subStr.length);
            if(slicePart!=subStr) {
                return false;
            }
            ss = ss.slice(subStr.length);
            if(!ss) {
                break;
            }
        }

        return true;
    }

    if(!s) {
        return false;
    }
    let lastLetter = s[s.length-1];
    let cursor = -1;
    let indexArr = s.split(lastLetter).map(v=>{
        cursor = cursor + v.length + 1
        return cursor;
    });
    for(let index of indexArr) {
        if(index>=s.length-1) {
            break;
        }
        if(isRepeatedSubStr(s.slice(0, index+1))) {
            return true;
        }
    }

    return false;
};

