/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 */

/*
better solution:
var findAnagrams = function(s, p) {
    
    const resultArray = [];
    const pLength = p.length;
    const sLength = s.length;

    // create two empty arrays with 0 inside
    const pWindow = new Array(26).fill(0);
    const sWindow = new Array(26).fill(0);

    //assume only a-z
    //TODO: add checker later if input has invalid characters
    [...p].forEach(character => {
        // charCodeAt returns a--> 97, b --> 98, c--> 99, etc
        pWindow[character.charCodeAt(0)-97]++
    });
    
    [...s].forEach((character, index) => {
        //jump into next position, and minus the previous chart from window
        if (index >= pLength) sWindow[s.charCodeAt(index-pLength)-97]--
        sWindow[character.charCodeAt(0)-97]++
        // compare two strings
        if (pWindow.join()===sWindow.join()) resultArray.push(index+1-pLength)
    });

    return resultArray
};

考察点：滑动窗口

性能更优：
var findAnagrams = function(s, p) {
    var map = {};
    var result = [];
    var slideWindow = {};
    for(var i = 0; i < p.length; i++){
        map[p[i]] = map[p[i]] ? map[p[i]] + 1 : 1;
    }
    // two pointers here: the characters in between are anagrams needed
    var left = 0;
    var right = 0;
    while(right < s.length){
        //
        if(map[s.charAt(right)]){
		    // NOTICE: we only need to update left for non-continuous duplicated character,
			// because the following "if" will automatically handle the situation: "baa" "aa"
            if(slideWindow[s.charAt(right)] && map[s.charAt(right)] === 1){
                left = Math.max(slideWindow[s.charAt(right)], left);
            }
            if(right - left + 1 === p.length){
                result.push(left);
                left++;
            }
        }else{
            left = right + 1;
            slideWindow = {};
        }
        // the core of sliding window: need to save next index to current key,
        // so we can leverage it whenever we meet this key again in the future.
        slideWindow[s.charAt(right)] = right + 1;
        right++;
    }
    return result;
};
*/

const isAnagrams = function(aStr, bStr) {
    let aMap = {};
    for(let ch of aStr) {
        aMap[ch] = (aMap[ch] || 0) + 1;
    }
    
    for(let ch of bStr) {
        aMap[ch] = (aMap[ch] || 0) - 1;
        if(aMap[ch]<0) {
            return false;
        }
    }

    for(let ch in aMap) {
        if(aMap[ch]) {
            return false;
        }
    }

    return true;
};


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    const pMap = {};
    for(let ch of p) {
        pMap[ch] = 1;
    }

    const _findAnagrams = function(s, startIndex) {
        if(!s.length || !p.length || s.length<p.length) {
            return [];
        }

        const result = [];
        for(let i = 0, max = s.length-p.length; i<=max; i++) {
            if(isAnagrams(s.slice(i, i+p.length), p)) {
                result.push(startIndex+i);
            }
        }

        return result;
    };

    let result = [];
    let preNotMatch = 0;
    for(let i = 0, len = s.length; i<len; i++) {
        if(!pMap[s[i]] || i==s.length-1) {
            result = result.concat(_findAnagrams(s.slice(preNotMatch, i+1), preNotMatch));
            preNotMatch = i;
        }
    }

    return result;
};

