/*
 * @lc app=leetcode id=970 lang=javascript
 *
 * [970] Powerful Integers
 */
/*
✔ Accepted
  ✔ 93/93 cases passed (52 ms)
  ✔ Your runtime beats 87.72 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.2 MB)

better solution:
var powerfulIntegers = function(x, y, bound) {
    var set=new Set();
    for(var a=1; a<bound; a*=x){
       for(var b=1; b+a <= bound; b*=y){
           set.add(a+b);
           if(y == 1)break;
       }
       if(x==1)break;
    }
    return [...set];
};
*/

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function(x, y, bound) {
    if(x==1 && y==1) {
        if(bound>1) {
            return [2];
        }else {
            return [];
        }
    }
    if(x>y) {
        [x, y] = [y, x];
    }

    let result = {};
    let i = 0;
    while(true) {
        let tmpX = x ** i++;
        if(tmpX>bound) {
            break;
        }
        let j = 0;
        while(true) {
            let tmpY = y ** j++;
            if(tmpY>bound-tmpX) {
                break;
            }
            result[tmpX+tmpY] = 1;
        }

        if(x==1) {
            break;
        }
    }

    return Object.keys(result).map(v=>parseInt(v));
};

