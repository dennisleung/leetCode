/*
 * @lc app=leetcode id=811 lang=javascript
 *
 * [811] Subdomain Visit Count
 */
/*
✔ Accepted
  ✔ 52/52 cases passed (72 ms)
  ✔ Your runtime beats 94.18 % of javascript submissions
  ✔ Your memory usage beats 20.24 % of javascript submissions (39.2 MB)
*/

/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    const result = {};
    for(let cpdomain of cpdomains) {
        let [times, domain] = cpdomain.split(" ");
        let fromIndex = 0;
        while(true) {
            result[domain] = (result[domain]||0) + parseInt(times);
            let index = domain.indexOf(".");
            if(index == -1) {
                break;
            }
            domain = domain.slice(index+1);
        }
    }

    const data = [];
    for(let domain in result) {
        data.push(`${result[domain]} ${domain}`);
    }

    return data;
};

