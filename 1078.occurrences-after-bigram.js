/*
 * @lc app=leetcode id=1078 lang=javascript
 *
 * [1078] Occurrences After Bigram
 */
/*
✔ Accepted
  ✔ 29/29 cases passed (56 ms)
  ✔ Your runtime beats 46.54 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (34.1 MB)

another solution:
var findOcurrences = function(text, first, second) {  
    let str=`\\s*${first}\\s${second}\\s+`;
    let reg=new RegExp(str,'g');
    return [...text.matchAll(reg)].map((item)=>{
        let ind=item.index+item[0].length;
        return (((text.substring(ind)).split(' '))[0]);    
    });
};

another solution:
var findOcurrences = function(text, first, second) {
    textArr = text.split(' ');
    ans = [];
    for (var i = 0; i < textArr.length - 2; i++) {
        if(textArr[i] == first && textArr[i + 1] == second) ans.push(textArr[i + 2]);
    }
    return ans;
};
*/
/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */
var findOcurrences = function(text, first, second) {
    const searchReg = new RegExp(`(^|\\s)${first}\\s+${second}\\s+([a-z]+)`, "g");
    const result = [];
    while(true) {
        let match = searchReg.exec(text);
        if(!match) {
            break;
        }
        let matchStr = match[2];
        matchStr && result.push(matchStr);
        searchReg.lastIndex = match.index + first.length;
    }

    return result;
};

