/*
 * @lc app=leetcode id=874 lang=javascript
 *
 * [874] Walking Robot Simulation
 */
/*
✔ Accepted
  ✔ 47/47 cases passed (168 ms)
  ✔ Your runtime beats 47.62 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (56.7 MB)

better solution:
function robotSim(commands, obstacles) {
  const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const set = new Set(obstacles.map(v => v[0]+':'+v[1]));

  let max = 0;
  let dir = 0;
  let x = 0;
  let y = 0;

  for (let c of commands) {
    if (c === -1) {
      dir = (dir+1)%4;
    } else if (c === -2) {
      dir = (dir+3)%4;
    } else {
      const [dx, dy] = dirs[dir];
      for (let i = 0; i < c; i++) {
        x += dx;
        y += dy;
        if (set.has(x+':'+y)) {
          x -= dx;
          y -= dy;
          break;
        }
      }
      max = Math.max(max, x*x+y*y);
    }
  }

  return max;
}
*/
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
    const getSquare = (x, y)=>{
        return x*x + y*y;
    };

    let obstaclesCache = {};
    for(let obstacle of obstacles) {
        obstaclesCache[obstacle[0]+"_"+obstacle[1]] = 1;
    }
    let maxSquare = 0;
    let x = 0;
    let y = 0;
    let direction = [0, 1];
    for(let command of commands) {
        let newXD;
        let newYD;
        switch(command) {
            case -2:
                newXD = direction[1]<0 ? 1 : Math.abs(direction[0]) - 1;
                newYD = direction[0]>0 ? 1 : Math.abs(direction[1]) - 1;
                direction[0] = newXD;
                direction[1] = newYD;
                continue;
            case -1:
                newXD = direction[1]>0 ? 1 : Math.abs(direction[0]) - 1;
                newYD = direction[0]<0 ? 1 : Math.abs(direction[1]) - 1;
                direction[0] = newXD;
                direction[1] = newYD;
                continue;
            default:
                break;
        }
        for(let i = 0; i<command; i++) {
            let tx = x + direction[0];
            let ty = y + direction[1];
            if(obstaclesCache[tx+"_"+ty]) {
                break;
            }else {
                x = tx;
                y = ty;
                maxSquare = Math.max(maxSquare, getSquare(x, y));
            }
        }
    }  
    return maxSquare;
};

