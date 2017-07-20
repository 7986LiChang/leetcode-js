/**
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example:

Input: "babad"

Output: "bab"

Note: "aba" is also a valid answer.
Example:

Input: "cbbd"

Output: "bb"
 */

/**
 * @param {string} s
 * @return {string}
 */


/**
 * 思路一：暴力求解，time limit exceeded
 */
//判断子串是否是回文串
function isPalindrome(s){
    if(s.split('').reverse().join('') === s){
        return true;
    }
    else  return false;
}

//找出数组中长度最长的元素，数组元素为字符串，并输出
function findLongestItem(arrstr){
    var longestItem = "";
    var maxlen = 0;
    //找到回文字串的最大长度
    for(var i = 0; i < arrstr.length; i++){
        maxlen = Math.max(maxlen, arrstr[i].length);
    }
    //找到符合该长度的任意子串元素
    for(var i = 0; i < arrstr.length; i++){
        if(arrstr[i].length === maxlen){
            longestItem = arrstr[i];
            break;
        }
    }
    return longestItem;
}

var longestPalindrome = function(s) {
    var longsubstr,substr;
    var substrarr = [];

    for(var i = 0; i < s.length; i++){
        for(var j = i + 1; j <= s.length; j++){
            substr = s.substring(i, j);
            //子串是回文
            if(isPalindrome(substr)){
                substrarr.push(substr);
            }
        }
    }
    longsubstr = findLongestItem(substrarr);

    return longsubstr;
};