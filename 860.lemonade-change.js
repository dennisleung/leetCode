/*
 * @lc app=leetcode id=860 lang=javascript
 *
 * [860] Lemonade Change
 */
/*
✔ Accepted
  ✔ 45/45 cases passed (92 ms)
  ✔ Your runtime beats 13.43 % of javascript submissions
  ✔ Your memory usage beats 28.57 % of javascript submissions (42.1 MB)

题干说了只有5/10/20三种面值，可以设计一个更简单的实现方式。
var lemonadeChange = function(bills) {
    var five=0;
    var ten=0;
    for(let s of bills){
        if(s == 5) {
            five++;
        }else if(s==10) {
            ten++;
            five--;
        }else if(ten>0){
            ten--;
            five--;
        }else{
            five=five-3;
        }
        if(five<0) return false;
    }
    return true;
};
*/

/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    const cache = {};
    for(bill of bills) {
        let change = bill - 5;
        if(change) {
            let credits = Object.keys(cache).sort((a,b)=>b-a);
            for(let credit of credits) {
                let needCreditCount = Math.min(cache[credit], Math.floor(change/credit));
                cache[credit] = cache[credit] - needCreditCount;
                change -= credit * needCreditCount;
                if(change<=0) {
                    break;
                }
            }
            if(change>0) {
                return false;
            }
        }
        cache[bill] = (cache[bill] || 0) + 1;
    }

    return true;
};

