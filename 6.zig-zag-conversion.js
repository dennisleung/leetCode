/*
 * @lc app=leetcode id=6 lang=javascript
 *
 * [6] ZigZag Conversion
 */
/*
✔ Accepted
  ✔ 1158/1158 cases passed (96 ms)
  ✔ Your runtime beats 51.22 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (42.4 MB)

//其实就是字符串不断往返

better solution:
var convert = function(s, numRows) {
    // return original string if can't zigzag
    if (numRows === 1 || s.length < numRows) return s;

    let rows = []
    let converted = '';
    let reverse = false;
    let count = 0

    // prepare rows
    for (let i = 0; i < numRows; i++) rows[i] = [];
    // reverse the push flow when reaching turning points
    for (let i = 0; i < s.length; i++) {
        rows[count].push(s[i]);
        reverse ? count-- : count++;
        if (count === numRows - 1 || count === 0) reverse = !reverse;
    }
    // put together converted string
    return rows.reduce((converted, cur) => converted + cur.join(''), '');
};
*/

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    const result = [];
    let row = 0;
    let col = 0;
    let flag = 1;
    for(let ch of s) {
        result[row] = result[row] || [];
        result[row].push(ch);
        if(col%numRows==0) {
            if(row==numRows-1) {
                col++;
            }
        }else {
            col++;
        }
        row = row + flag;
        if(row==numRows-1 || row==0) {
            flag = -flag;
        }
    }

    return result.reduce((a, b)=>a+b.join(""), "");
};

