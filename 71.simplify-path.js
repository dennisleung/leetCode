/*
 * @lc app=leetcode id=71 lang=javascript
 *
 * [71] Simplify Path
 */

// @lc code=start

/*
254/254 cases passed (64 ms)
Your runtime beats 63.71 % of javascript submissions
Your memory usage beats 100 % of javascript submissions (35.4 MB)

shorter solution:
var simplifyPath = function(path) {
    let ret = [];
    path.replace(/[\/]{2,}/g, "/").split("/").forEach(dir => {if (dir !== "." && dir !== "") dir === ".." ? ret.pop() : ret.push(dir)});
    return "/" + ret.join("/");
};
*/

/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    path = path.replace(/\/+/g, "/").replace(/\/$/, "");
    const pts = path.split("/").slice(1);
    const result = [];
    while(pts.length) {
        let pt = pts.shift();
        switch(pt) {
            case ".":
                break;
            case "..":
                result.pop();
                break;
            default:
                result.push(pt);
                break;
        }
    }

    return "/" + result.join("/");
};

// test cases:
// assertCompare(()=>simplifyPath("/home/"), "/home");
// assertCompare(()=>simplifyPath("/../"), "/");
// assertCompare(()=>simplifyPath("/home//foo/"), "/home/foo");
// assertCompare(()=>simplifyPath("/a/./b/../../c/"), "/c");
// assertCompare(()=>simplifyPath("/a/../../b/../c//.//"), "/c");
// assertCompare(()=>simplifyPath("/home/"), "/home");
// assertCompare(()=>simplifyPath("/a//b////c/d//././/.."), "/a/b/c");

// @lc code=end

