/*
 * @lc app=leetcode id=999 lang=javascript
 *
 * [999] Available Captures for Rook
 */
/*
✔ Accepted
  ✔ 22/22 cases passed (52 ms)
  ✔ Your runtime beats 69.54 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (33.9 MB)

another solution:
//explanation:
//line1: find position of "R",  "i" == col, "j" == row
//line2: get the col and the row of "R" as t1 and t2
//line3: get the part before "R" and reverse it, get the part after "R", now the 4 cases are same
//line4: remove the "." and get the first element, if it's "p", means this case count
//思路一般，可读性一般
var numRookCaptures = function (board) {
  let j, i = board.findIndex(r => (j = r.findIndex((c, j) => c == "R")) != -1);
  let t1 = board.map(r => r[j]), t2 = board[i];
  let res = [t1.slice(0, i).reverse(), t1.slice(i + 1), t2.slice(0, j).reverse(), t2.slice(j + 1)];
  return res.filter(r => r.filter(c => c != ".")[0] == "p").length;
};
*/

/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
    let rook = null;
    const bishops = [];
    const pawns = [];
    outer:for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            if(board[i][j]=="R") {
                rook = [i, j]
                break outer;
            }
        }
    }

    const canReach = function(ax, ay) {
        let [x, y] = rook;
        while(x>=0&&x<board.length&&y>0&&y<board[0].length) {
            switch(board[x][y]) {
                case "p":
                    return 1;
                case "B":
                    return 0;
                default:
                    break;
            }
            x += ax;
            y += ay;
        }
        return 0;
    };

    let sum = 0;
    sum += canReach(0, 1);
    sum += canReach(0, -1);
    sum += canReach(1, 0);
    sum += canReach(-1, 0);
    return sum;
};

