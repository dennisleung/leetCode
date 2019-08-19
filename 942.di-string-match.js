/*
 * @lc app=leetcode id=942 lang=javascript
 *
 * [942] DI String Match
 */
/*
✔ Accepted
  ✔ 95/95 cases passed (76 ms)
  ✔ Your runtime beats 90.3 % of javascript submissions
  ✔ Your memory usage beats 10 % of javascript submissions (39 MB)

  没想出来，用回溯法爆栈。。

  another solution:
  var diStringMatch = function(S) {
        var bottom = S.split('D').length-1; // this will be our start number, 找出有多少个D，即至少有多少个『小数』
        var top = bottom+1;
        return ('D'+S).split('').map(c => c == 'I' ? top++ : bottom--);
    };
*/
/**
 * @param {string} S
 * @return {number[]}
 */
var diStringMatch = function(S) {
    let arr = [];
    for(let i = 0; i<=S.length; i++) {
        arr.push(i);
    }

    let res = [];
    for(let s of S) {
        if(s=="I") {
            res.push(arr.shift())
        }else {
            res.push(arr.pop());
        }
    }
    res.push(arr[0]);

    return res;
};

