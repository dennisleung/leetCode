/*
 * @lc app=leetcode id=1033 lang=javascript
 *
 * [1033] Moving Stones Until Consecutive
 */
/*
✔ Accepted
  ✔ 187/187 cases passed (56 ms)
  ✔ Your runtime beats 80 % of javascript submissions
  ✔ Your memory usage beats 50 % of javascript submissions (34.1 MB)

better solution:
var numMovesStones = function(a, b, c) {
    let arr = [a,b,c].sort((a,b) => a - b);
    
    // the num of moves that the last stone can make is the maximum
    const max = arr[2] - arr[0] - 2;
    
    // Normally, the num of minimum moves is which is moving `b` next to `a`, then moving `c` next to `b`
    let min = 2;
    
    // if there are no gaps between  `c` and `b`, or `b` and `a`, the num of minimum moves is 1
    if (arr[2] - arr[1] < 3 || arr[1] - arr[0] < 3) min = 1;
    
    // if these three stones are adjacent, there are no moves can be made
    if (arr[2] - arr[1] === 1 && arr[1] - arr[0] === 1) min = 0;
    
    return [min, max];
};
*/

/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number[]}
 */
var numMovesStones = function(a, b, c) {
    [a, b, c] = [a, b, c].sort((a, b)=>a-b);
    let dis1 = b-a;
    let dis2 = c-b;
    if(dis1<dis2) {
        [dis1, dis2] = [dis2, dis1];
    }
    if(dis2>2) {
        dis3 = 2
    }else if(dis2==2){
        dis3 = 1;
    }else {
        dis3 = dis1>1 ? 1 : 0;
    }

    return [dis3, dis1+dis2-2];
};

