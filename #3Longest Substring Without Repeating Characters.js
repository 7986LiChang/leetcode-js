/**
Given a string, find the length of the longest substring without repeating characters.

Examples:

Given "abcabcbb", the answer is "abc", which the length is 3.

Given "bbbbb", the answer is "b", with the length of 1.

Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 */

/**
 * @param {string} s
 * @return {number}
 */
function uniqueAll(s){
    var arrs = s.split('');
    var uniarrs = new Set(arrs);
    if(arrs.length == uniarrs.length) return true;
    // return (arrs.length == uniarrs.length) ? true : false;
}

// (function(s){
//                 var arrs = s.split('');
//                 var uniarrs = new Set(arrs);
//                 return (arrs.length == uniarrs.length) ? true : false;
//             })(substr)

var lengthOfLongestSubstring = function(s) {
    var len = 0;
    for(let i = 0; i < s.length; i++){
        for(let j = i + 1; j <= s.length; j++){
            var substr = s.substring(i, j);
            //判断子串是否非重复
            if(uniqueAll(substr)){
                len = Math.max(len, j - i);
            }
        }
    }
    return len;
};

