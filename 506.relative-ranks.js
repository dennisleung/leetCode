/*
 * @lc app=leetcode id=506 lang=javascript
 *
 * [506] Relative Ranks
 */
/*
✔ Accepted
  ✔ 17/17 cases passed (88 ms)
  ✔ Your runtime beats 96.27 % of javascript submissions
  ✔ Your memory usage beats 16.67 % of javascript submissions (39.6 MB)

  题干说明了nums unique guranteed.


更优雅的写法:
var findRelativeRanks = function(nums) {
    // create ranks array in descending order
    let ranks = nums.slice(0).sort((a, b) => b - a);
    
    // map places in ranks if no medal
    return nums.map((num, i) => {
       if (num === ranks[0]) return 'Gold Medal';
       else if (num === ranks[1]) return 'Silver Medal';
       else if (num === ranks[2]) return 'Bronze Medal';
       else return (ranks.indexOf(num) + 1).toString();
    });
};
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var findRelativeRanks = function(nums) {
    const rankDesMap = {};
    let rank = 0;
    let tNums = [].concat(nums);
    tNums.sort((a,b)=>{return b-a});
    for(let i = 0, len = tNums.length; i<len; i++) {
        let rankDes = "";
        switch(++rank) {
            case 1:
                rankDes = "Gold Medal";
                break;
            case 2:
                rankDes = "Silver Medal";
                break;
            case 3:
                rankDes = "Bronze Medal";
                break;
            default:
                rankDes = ""+rank;
                break;
        }
        rankDesMap[tNums[i]] = rankDes;
    }
    
    const result = [];
    for(let num of nums) {
        result.push(rankDesMap[num]);
    }
    return result;
};

