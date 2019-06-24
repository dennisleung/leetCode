/*
 * @lc app=leetcode id=682 lang=javascript
 *
 * [682] Baseball Game
 */
/*
✔ Accepted
  ✔ 39/39 cases passed (68 ms)
  ✔ Your runtime beats 29.57 % of javascript submissions
  ✔ Your memory usage beats 16.13 % of javascript submissions (35.7 MB)
*/

/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let scores = [];
    for(let op of ops) {
        switch(op) {
            case "+":
                scores.push(scores.slice(-2).reduce((a,b)=>a+b, 0));
                break;
            case "D":
                scores.push((scores[scores.length-1]||0)*2);
                break;
            case "C":
                scores.pop();
                break;
            default:
                scores.push(parseInt(op));
                break;
        }
    }

    return scores.reduce((a,b)=>a+b, 0);
};

