/*
 * @lc app=leetcode id=748 lang=javascript
 *
 * [748] Shortest Completing Word
 */
/*
✔ Accepted
  ✔ 102/102 cases passed (104 ms)
  ✔ Your runtime beats 20.74 % of javascript submissions
  ✔ Your memory usage beats 17.5 % of javascript submissions (42.4 MB)

better solution:
var shortestCompletingWord = function(licensePlate, words) {
    let reg='';    
    for(let char of licensePlate){
        if((char>='a'&&char<='z')||(char>='A'&&char<='Z'))
            reg+=char.toLowerCase();
    }
    reg='[a-z]*'+reg.split('').sort().join('[a-z]*')+'[a-z]*';
    let rex=new RegExp(reg);

    let res='';
    for(let i=0;i<words.length;i++){
        let word=words[i].split('').sort().join('');
        if(rex.test(word)&&(word.length<res.length||res==''))
            res=words[i];
    }
    return res;
    
};

better solution:
var shortestCompletingWord = function(licensePlate, words) {
    
    // Object to hold the shortest word that matches
    var match = {'found':false, 'word':''};
    
    // Char array to hold the upper case characters we want to match
    var licensePlateChars = licensePlate.toUpperCase().replace(/[^A-Z]/g, '').split('');
    
    words.forEach(function (word) {
        // if we already have a match make sure that the word we are checking is shorter
        if (!match.found || word.length < match.word.length) {
            var replaceWord = word.toUpperCase();
            
            // Loop over each character in the license plate and replace one at a time
            // the key here is that replace will only replace 1 S even if there are 2
            licensePlateChars.forEach(function (lChar) {
                replaceWord = replaceWord.replace(lChar, '');
            });
            
            // We know the word works if the length of the word minus 
            // the length of chars equals the length of the new word
            if (word.length - licensePlateChars.length === replaceWord.length) {
                match.found = true;
                match.word = word
            }
        }
    });
    
    return match.word;
};
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
    const getMap = function(str) {
        const map = {};
        for(let ch of str.split("")) {
            if(ch>="a"&&ch<="z" || ch>="A"&&ch<="Z") {
                ch = ch.toLocaleLowerCase();
                map[ch] = (map[ch]||0) + 1;
            }
        }
        return map;
    };
    
    const templateMap = getMap(licensePlate);
    const isComplete = function(word) {
        const map = getMap(word);
        for(let ch in templateMap) {
            if(!templateMap.hasOwnProperty(ch)) {
                continue;
            }
            if((map[ch]||0)<templateMap[ch]) {
                return false;
            }
        }
        return true;
    };

    let minWord = "";
    for(let word of words) {
        if(isComplete(word) && (!minWord || word.length<minWord.length)) {
            minWord = word;
        }
    }

    return minWord;
};

