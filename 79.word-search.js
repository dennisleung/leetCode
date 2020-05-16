/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */
/*
87/87 cases passed (816 ms)
Your runtime beats 5.06 % of javascript submissions
Your memory usage beats 23.08 % of javascript submissions (92.3 MB)

straight-forward solution:
function exist(board, word) {
  if (board.length === 0) return false;

  const h = board.length;
  const w = board[0].length;

  function go(i, j, k) {
    if (i < 0 || j < 0 || i >= h || j >= w) return false;
    if (board[i][j] !== word[k]) return false;
    if (k === word.length - 1) return true;

    board[i][j] = '*';      // mark as visited

    if (go(i - 1, j, k + 1)) return true;  // up
    if (go(i + 1, j, k + 1)) return true;  // down
    if (go(i, j - 1, k + 1)) return true;  // left
    if (go(i, j + 1, k + 1)) return true;  // right

    board[i][j] = word[k];  // reset
    return false;
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true;
    }
  }

  return false;
}
*/
// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const queue = [];
    const addCell = (x,y,nextWordIndex,previousPath)=> {
        const path = {...previousPath};
        path[`${x}_${y}`] = 1;
        queue.push({x,y,nextWordIndex,path});
    };
    board.forEach((row, rowIndex)=>{
        row.forEach((cellVal,colIndex)=>{
            if(cellVal==word[0]) {
                addCell(rowIndex, colIndex, 1);
            }
        });
    });

    while(true) {
        if(!queue.length) {
            return false;
        }

        const {x,y,nextWordIndex,path} = queue.pop();
        if(nextWordIndex>=word.length) {
            return true;
        }

        if(!path[`${x-1}_${y}`] && x>0 && board[x-1][y]==word[nextWordIndex]) {
            addCell(x-1, y, nextWordIndex+1, path);
        }
        if(!path[`${x}_${y+1}`] && y<board[0].length-1 && board[x][y+1]==word[nextWordIndex]) {
            addCell(x, y+1, nextWordIndex+1, path);
        }
        if(!path[`${x+1}_${y}`] && x<board.length-1 && board[x+1][y]==word[nextWordIndex]) {
            addCell(x+1, y, nextWordIndex+1, path);
        }
        if(!path[`${x}_${y-1}`] && y>0 && board[x][y-1]==word[nextWordIndex]) {
            addCell(x, y-1, nextWordIndex+1, path);
        }
    }

    return false;
};

// test cases:
// const board = [
//     ['A','B','C','E'],
//     ['S','F','C','S'],
//     ['A','D','E','E']
//   ];
//   assertCompare(()=>exist(board, "ABCCED"), true);
//   assertCompare(()=>exist(board, "SEE"), true);
//   assertCompare(()=>exist(board, "ABCB"), false);
//   assertCompare(()=>exist(board, ""), false);
//   assertCompare(()=>exist([], "ABCCED"), false);
// @lc code=end

