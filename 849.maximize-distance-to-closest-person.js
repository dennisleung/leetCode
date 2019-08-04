/*
 * @lc app=leetcode id=849 lang=javascript
 *
 * [849] Maximize Distance to Closest Person
 */
/*
✔ Accepted
  ✔ 79/79 cases passed (64 ms)
  ✔ Your runtime beats 65.28 % of javascript submissions
  ✔ Your memory usage beats 5.56 % of javascript submissions (36.8 MB)


better solution:
var maxDistToClosest = function(seats) {
    if (seats.length <= 1) {
        return 0;
    } 
    let maxDistance = 0;
    let lastSeated = -1;
    for (let i = 0; i < seats.length; i++) {
        if (seats[i] === 1 && lastSeated === -1) {
            lastSeated = i;
            maxDistance = lastSeated - 0;    //take care of cases [0, 0, 0, 1, ....]
        } else if (seats[i] === 1 && lastSeated !== -1) {
            maxDistance = Math.max(maxDistance, Math.floor((i - lastSeated) / 2));
            lastSeated = i;
        }
    }
    return Math.max(maxDistance, seats.length - 1 - lastSeated ); // take care of cases [....., 1, 0, 0] etc.
};

better two pointers solution:
const maxDistToClosest = seats => {
    const n = seats.length;
    let max = -Infinity;
    
    for (let i = 0, j = 0; i < n; i = j) {
        // locate the left border of 0 [i]
        for (i = j; i < n && seats[i] === 1; i++) {}
        
        // locate the right border of 0 [j-1]
        for (j = i; j < n && seats[j] === 0; j++) {}
        
        if (i === 0 || j === n) {
            max = Math.max(max, j - i);
        } else {
            max = Math.max(max, Math.floor((j - i + 1) / 2));
        }
    }
    
    return max;
};

better clean solution:
var maxDistToClosest = function(seats) {
  const zeros = seats.join('').split('1');
  return Math.max(
    zeros.shift().length,
    zeros.pop().length,
    ...zeros.map(i => i.length > 0 ? Math.floor((i.length + 1) / 2) : 0)
  );
};
*/

/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let preSeated = false;
    let count = 0;
    let max = 0;
    for(let seat of seats) {
        if(seat) {
            if(preSeated>0) {
                max = Math.max(max, Math.floor((count+1)/2));
            }else {//[0,0,1]
                max = Math.max(max, count);
            }
            preSeated = true;
            count = 0;
        }else {
            count++;
        }
    }
    max = Math.max(max, count);//[1,0,0,0]
    
    return max;
};

