/*
 * @lc app=leetcode id=840 lang=javascript
 *
 * [840] Magic Squares In Grid
 */
/*
✔ Accepted
  ✔ 91/91 cases passed (60 ms)
  ✔ Your runtime beats 76.47 % of javascript submissions
  ✔ Your memory usage beats 21.43 % of javascript submissions (35.6 MB)

//一个优化的点：magic square的中间位置一定是5
*/

var numMagicSquaresInside = function(grid) {
    const isMagicSquare = (rowStart, colStart) => {
        let cache = {};
        let count = 0;
        for(let i = rowStart; i<=rowStart+2; i++) {
            for(let j = colStart; j<=colStart+2; j++) {
                let num = grid[i][j];
                if(!cache[num] && num>0 && num<10) {
                    count++;
                }
                cache[grid[i][j]] = 1;
            }
        }
        if(count<9) {
            return false;
        }

        let sum = -1;
        for(let i = rowStart; i<=rowStart+2; i++) {
            let _sum = 0;
            for(let j = colStart; j<=colStart+2; j++) {
                _sum += grid[i][j];
            }
            if(sum>=0 && _sum!=sum) {
                return false;
            }
            sum = _sum;
        }

        for(let j = colStart; j<=colStart+2; j++) {
            let _sum = 0;
            for(let i = rowStart; i<=rowStart+2; i++) {
                _sum += grid[i][j];
            }
            if(sum>=0 && _sum!=sum) {
                return false;
            }
            sum = _sum;   
        }

        if(grid[rowStart][colStart]+grid[rowStart+1][colStart+1]+grid[rowStart+2][colStart+2]!=sum) {
            return false;
        }
        
        if(grid[rowStart+2][colStart]+grid[rowStart+1][colStart+1]+grid[rowStart][colStart+2]!=sum) {
            return false;
        }

        return true;
    }

    let count = 0;
    for(let i = 0; i<=grid.length-3; i++) {
        for(let j = 0; j<=grid[0].length-3; j++) {
            isMagicSquare(i, j) && count++;
        }
    }

    return count;
};

