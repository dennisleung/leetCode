/*
 * @lc app=leetcode id=925 lang=javascript
 *
 * [925] Long Pressed Name
 */
/*
✔ Accepted
  ✔ 71/71 cases passed (76 ms)
  ✔ Your runtime beats 12.24 % of javascript submissions
  ✔ Your memory usage beats 100 % of javascript submissions (36.5 MB)

better solution:
var isLongPressedName = function(name, typed) {
    let i = 0; return typed.split("").filter(s => s == name[i] ? ++i : false).length == name.length;
};

better solution:
var isLongPressedName = function(name, typed) {
    if(name==typed)
        return true;
    let reg=name.split('').join('+');//这里用+而不是{1,}，使用后者可能会超时
    return (new RegExp(reg)).test(typed);    
};
*/

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function(name, typed) {
    return new RegExp("^"+name.replace(/([a-zA-Z])(?!(\1|$))/g, "$1-").split("-").reduce((a, b)=>`${a}${b[0]}{${b.length},}`, "")+"$").test(typed);
    //return new RegExp("^"+name.split("").reduce((a, b)=>`${a}${b}{1,}`, "")+"$").test(typed);//这个有可能会超时
};

