/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

/*
59/59 cases passed (104 ms)
Your runtime beats 16.4 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (43.4 MB)
*/

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
    const cache = {};
    const dfs = function(i, j) {//逆向思维， 先处理开口， 将开口连在一起的O先替换成$，那么剩下的自然O自然都是可替换的了
        if(i<0 || j<0 || i>=board.length || j>=board[0].length || cache[`${i}_${j}`]) {
            return;
        }

        cache[`${i}_${j}`] = 1;
        if(board[i][j]=="O") {
            board[i][j] = "$";
        }else {
            return;
        }
        dfs(i-1, j);
        dfs(i, j-1);
        dfs(i+1, j);
        dfs(i, j+1);
    }

    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            if((i==0 || j==0 || i==board.length-1 || j==board[0].length-1) && board[i][j]=="O") {
                dfs(i, j);
            }
        }
    }

    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            if(board[i][j]=="O") {
                board[i][j] = "X";
            }else if(board[i][j]=="$") {
                board[i][j] = "O";
            }
        }
    }

    return board;
};

// test cases:
// assertCompare(()=>solve([]), []);
// assertCompare(()=>solve([["X"]]), [["X"]]);
// assertCompare(()=>solve([["O"]]), [["O"]]);
// assertCompare(()=>solve([
//     ["X", "X", "X", "X"],
//     ["X", "O", "O", "X"],
//     ["X", "X", "O", "X"],
//     ["X", "O", "X", "X"]
// ]), [
//     ["X", "X", "X", "X"],
//     ["X", "X", "X", "X"],
//     ["X", "X", "X", "X"],
//     ["X", "O", "X", "X"]
// ]);
// @lc code=end

