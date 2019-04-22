/*
 * @lc app=leetcode id=401 lang=javascript
 *
 * [401] Binary Watch
 *
 * https://leetcode.com/problems/binary-watch/description/
 *
 * algorithms
 * Easy (45.17%)
 * Total Accepted:    62.2K
 * Total Submissions: 137.6K
 * Testcase Example:  '0'
 *
 * A binary watch has 4 LEDs on the top which represent the hours (0-11), and
 * the 6 LEDs on the bottom represent the minutes (0-59).
 * Each LED represents a zero or one, with the least significant bit on the
 * right.
 * 
 * For example, the above binary watch reads "3:25".
 * 
 * Given a non-negative integer n which represents the number of LEDs that are
 * currently on, return all possible times the watch could represent.
 * 
 * Example:
 * Input: n = 1Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04",
 * "0:08", "0:16", "0:32"]
 * 
 * 
 * Note:
 * 
 * The order of output does not matter.
 * The hour must not contain a leading zero, for example "01:00" is not valid,
 * it should be "1:00".
 * The minute must be consist of two digits and may contain a leading zero, for
 * example "10:2" is not valid, it should be "10:02".
 * 
 * 
 */
/*
✔ Accepted
  ✔ 10/10 cases passed (56 ms)
  ✔ Your runtime beats 100 % of javascript submissions
  ✔ Your memory usage beats 33.33 % of javascript submissions (35 MB)

more intuitive solution:
var readBinaryWatch = function(num) {
    const output = [];
    
    // find the number of ones in bit expression of time and match with num
    for (let h = 0; h < 12; h++) {
        for (let m = 0; m < 60; m++) {
            const ones = Number(h * 64 + m).toString(2).split('').filter(d => d === '1').length;
            if (ones === num) output.push(m < 10 ? `${h}:0${m}` : `${h}:${m}`);
        }
    }
    
    return output;
};
*/
//求所有组合
var getCom = function(len, numOfOne) {
    let result = [];
    if(len<=1) {
        result.push(numOfOne>0?"1":"0");
    }else if(numOfOne<=0) {
        result.push(Array(len+1).join("0"));
    }else if(len<=numOfOne) {
        result.push(Array(numOfOne+1).join("1"));
    }else {
        result = result.concat(getCom(len-1, numOfOne-1).map(v=>"1"+v));
        result = result.concat(getCom(len-1, numOfOne).map(v=>"0"+v));
    }
    return result;
};

var translate = function(str) {
    let hour = str.slice(0, 4);
    let min = str.slice(4);
    hour = parseInt(hour, 2);
    min = ('00'+parseInt(min, 2)).slice(-2);
    if(hour>11) {
        return false;
    }
    if(min>59) {
        return false;
    }
    return `${hour}:${min}`;
}

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    const coms = getCom(10, num);
    return coms.map(translate).filter(v=>!!v);
};

