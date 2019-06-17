/*
 * @lc app=leetcode id=657 lang=javascript
 *
 * [657] Robot Return to Origin
 */

 /*
 ✔ Accepted
  ✔ 63/63 cases passed (64 ms)
  ✔ Your runtime beats 85.36 % of javascript submissions
  ✔ Your memory usage beats 49.61 % of javascript submissions (36.7 MB)
 
一种思路，但是感觉不是很好：
const judgeCircle = (moves) => {
    return moves.split('')
        .reduce((p, m) => [p[0] + (m === 'R') - (m === 'L'), p[1] + (m === 'U') - (m === 'D')], [0, 0])
        .join('') === '00'
};
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    let x = 0;
    let y = 0;
    for(let move of moves) {
        switch(move) {
            case "L":
                x -= 1;
                break;
            case "R":
                x += 1;
                break;   
            case "U":
                y += 1;
                break;
            default:
                y -= 1;
                break;
        }
    }

    return !x && !y;
};

