/*
 * @lc app=leetcode id=917 lang=javascript
 *
 * [917] Reverse Only Letters
 */
/*
✔ Accepted
  ✔ 116/116 cases passed (52 ms)
  ✔ Your runtime beats 85.36 % of javascript submissions
  ✔ Your memory usage beats 75 % of javascript submissions (33.9 MB)

better solution:
//双指针方案，循环的逻辑比我的精简
var isLetter = function(c) {
    return (c >= 65 && c <= 90) || (c >= 97 && c <= 122);
}

var swap = function(array, a, b) {
    let t = array[a];
    array[a] = array[b];
    array[b] = t;
}

var reverseOnlyLetters = function(S) {
    var result = S.split('');
    let l = 0;
    let r = result.length - 1;

    while (l < r) {
        if (!isLetter(result[l].charCodeAt())) {
            l++;
        } else if (!isLetter(result[r].charCodeAt())) {
            r--;
        } else {
            swap(result, l++, r--);
        }
    }

    return result.join('');
};

better solution:
var reverseOnlyLetters = function(S) {
    const isLetter = (c) => /[a-zA-Z]/.test(c);
    const chars = [...S].filter(c => isLetter(c));
	
    let ret = '', index = chars.length - 1;
	
    for (let c of S) 
        ret += isLetter(c) ? chars[index--]: c

    return ret;
};

better solution:
var reverseOnlyLetters = function (S) {
  let i = 0, words = S.replace(/[^a-zA-Z]/g, "").split("").reverse();
  return S.replace(/[a-zA-Z]/g, _ => words[i++]);
};
*/

/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
    let result = [];
    let reg = /[a-z]/i;
    for(let i = 0, j = S.length-1; i<=j;) {
        let si = S[i];
        let sj = S[j];
        let flag = true;
        if(!reg.test(si)) {
            result[i] = si;
            i++;
            flag = false;
        }
        if(!reg.test(sj)) {
            result[j] = sj;
            j--;
            flag = false;
        }
        if(flag) {
            result[i] = sj;
            result[j] = si;
            i++;
            j--;
        }
    }

    return result.join("");
};

