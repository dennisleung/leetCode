/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */
/*
✔ Accepted
  ✔ 184/184 cases passed (88 ms)
  ✔ Your runtime beats 40.28 % of javascript submissions
  ✔ Your memory usage beats 16.67 % of javascript submissions (42.4 MB)

another solution:
var numUniqueEmails = function(emails) {
    const re = /^([^+]*).*(@.*)$/;
    const set = new Set();
    emails.forEach((email) => {
        const [full, name, domain] = email.match(re);
        set.add(name.replace(/\./g, '') + domain);
    });
    return set.size;
};
*/
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    emails = emails.map(email=>{
        let [name, domain] = email.split("@");
        name = name.replace(/\./g, "").replace(/\+.*/, "");
        return `${name}@${domain}`;
    });

    const cache = {};
    return emails.reduce((count, email)=>{
        if(cache[email]) {
            return count;
        }else {
            cache[email] = 1;
            return ++count;
        }
    }, 0);
};

