/*
 * @lc app=leetcode id=937 lang=javascript
 *
 * [937] Reorder Log Files
 */
/*
✔ Accepted
  ✔ 62/62 cases passed (88 ms)
  ✔ Your runtime beats 12.51 % of javascript submissions
  ✔ Your memory usage beats 42.86 % of javascript submissions (37.4 MB)

better solution:
var reorderLogFiles = function(logs) {
    var letters = [], nums = [];
    
    // Separate digit-logs from letter-logs
    logs.forEach(function(log) {
        if((/[0-9]/i).test(log[log.indexOf(" ") + 1])) nums.push(log);
        else
            letters.push(log);
    });
    // Sort letter-logs
    letters.sort(function(a, b) {
        var cmp = a.slice(a.indexOf(" ")).localeCompare(b.slice(b.indexOf(" ")));
        return cmp === 0 ? a.localeCompare(b) : cmp;
    });
    
    return [...letters, ...nums];
};

*/
const compare = (a, b)=>{
    const digitLog = /^\S+\s\d/;
    let isADigit = digitLog.test(a);
    let isBDigit = digitLog.test(b);
    if(isADigit&&isBDigit) {
        return 0;
    }else if(isADigit) {
        return 1;
    }else if(isBDigit) {
        return -1;
    }else {
        let aPart = a.replace(/^\S+\s/, "");
        let bPart = b.replace(/^\S+\s/, "");
        if(aPart==bPart) {
            return a > b ? 1 : -1;
        }else {
            return aPart>bPart ? 1 : -1;
        }
    }
};
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let result = [];
    while(logs.length) {//选择排序
        let minIndex = 0;
        for(let j = 0; j<logs.length; j++) {
            if(compare(logs[minIndex], logs[j])>0) {
                minIndex = j;
            }
        }
        result.push(logs[minIndex]);
        logs.splice(minIndex, 1);
    }

    return result;
};

