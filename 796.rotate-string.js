/*
 * @lc app=leetcode id=796 lang=javascript
 *
 * [796] Rotate String
 */
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
/*
runtime beats 65.92%
memory usage beats 69.91%

better solution:
var rotateString = function (A, B) {
	return (B + B).indexOf(A) != -1 && A.length == B.length
};
*/

var rotateString = function(A, B) {
    const shift = (str)=>{
        if(str.length<1) {
            return str;
        }

        return str.slice(1) + str[0];
    };
    for(let i = 0, len = A.length; i<=len; i++) {
        if(A==B) {
            return true;
        }
        A = shift(A);
    }

    return false;
};

