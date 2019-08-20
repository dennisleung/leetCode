/*
 * @lc app=leetcode id=949 lang=javascript
 *
 * [949] Largest Time for Given Digits
 */
/*
✔ Accepted
  ✔ 172/172 cases passed (64 ms)
  ✔ Your runtime beats 45.16 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (37.1 MB)
*/
/**
 * @param {number[]} A
 * @return {string}
 */
var largestTimeFromDigits = function(A) {
    let max = "";
    const compare = (arr)=>{
        if((arr[0]*10+arr[1])<=23 && (arr[2]*10+arr[3])<=59) {
            let str = `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`;
            if(str>max) {
                max = str;
            }
        }
    };
    const dfs = (a, b)=>{
        if(a.length==4) {
            compare(a);
            return;
        }
        for(let i = 0, len = b.length; i<len; i++) {
            dfs([...a, b[i]], b.slice(0, i).concat(b.slice(i+1)));
        }
    }

    dfs([], A);

    return max;
};

