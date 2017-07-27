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


/**
 * 利用动态规划思想
 */
var longestPalindrome = function(s) {
    var longsubstr1 ="", longsubstr2 = "", longsubstr= "";
    var maxlen1 = 0, maxlen2 = 0;
    var i = 0, j = 0;
    while(i < s.length){
        if(s[i - j] === s[i + j]){
            if(maxlen1 < 2 * j + 1){
                maxlen1 = 2 * j + 1;
                longsubstr1 = s.substring(i - j, i + j + 1);
            }
            j++;
            if(i - j < 0 || i + j >= s.length){
                i++;
                j = 0;
            }
        }
        else if(s[i] === s[i + 1]){
            var m =0;
            if(s[i - m] === s[i + 1 + m]){
                if(maxlen2 < 2 * m + 2){
                    maxlen2 = 2 * m + 2;
                    longsubstr2 = s.substring(i - m, i + 2 + m);
                }
                m++;
            }
            if( i - m < 0 || i + m + 1 >= s.length){
                i++;
                m = 0;
            }
            else break;
        }
        else{
            i++;
            j = 0;
            m = 0;
        }
    }
    
    return (longsubstr1.length > longsubstr2.length) ? longsubstr1 : longsubstr2;
};