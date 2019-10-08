/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */
/*
504/504 cases passed (112 ms)
Your runtime beats 8.61 % of javascript submissions
Your memory usage beats 20 % of javascript submissions (42.2 MB)

better solution:
var isValidSudoku = function(board) {    
    const boxes = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
    const cols = [{}, {}, {}, {}, {}, {}, {}, {}, {}]; 
    const rows = [{}, {}, {}, {}, {}, {}, {}, {}, {}];   
    
    for (let i = 0; i < 9; i++) {              
        for (let j = 0; j < 9; j++) {            
            const digit = board[i][j];
            
            if (digit !== '.') {
                const k = Math.floor(j / 3) + (Math.floor(i / 3) * 3);

                if (boxes[k][digit] || cols[j][digit] || rows[i][digit]) {
                    return false;
                }

                boxes[k][digit] = cols[j][digit] = rows[i][digit] = true;       
            }
        }
    }
    
    return true;
};
*/

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isSubValid = (row)=>{
        const cache = {};
        for(let dg of row) {
            if(dg!=="." && cache[dg]) {
                return false;
            }
            cache[dg] = 1;
        }

        return true;
    };
    const isValid = (i, j) => {
        if(!isSubValid(board[i])) {
            return false;
        }

        if(!isSubValid(board.map(row=>row[j]))) {
            return false;
        }

        const rowStart = ~~(i/3) * 3;
        const colStart = ~~(j/3) * 3;
        const arr = board.slice(rowStart, rowStart+3).reduce((arr,row)=>arr.concat(row.slice(colStart, colStart+3)), []);
        if(!isSubValid(arr)) {
            return false;
        }

        return true;
    };

    for(let i = 0; i<board.length; i++) {
        for(let j = 0; j<board[i].length; j++) {
            if(!isValid(i, j)) {
                return false;
            }
        }
    }

    return true;
};

// test cases:
// console.log(isValidSudoku([
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]));//true
//   console.log(isValidSudoku([
//     ["8","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ["8",".",".",".","6",".",".",".","3"],
//     ["4",".",".","8",".","3",".",".","1"],
//     ["7",".",".",".","2",".",".",".","6"],
//     [".","6",".",".",".",".","2","8","."],
//     [".",".",".","4","1","9",".",".","5"],
//     [".",".",".",".","8",".",".","7","9"]
//   ]));//false
// @lc code=end

