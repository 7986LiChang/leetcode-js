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

/*
    利用动态规划思想，O(n*2)
 */
var longestPalindrome = function(s) {
    var longsubstr1 ="", longsubstr2 = "";
    var maxlen1 = 0, maxlen2 = 0;
    //如aba，利用动态规划判断奇数的情况，以中间元素为基准，向两边扩展
    for(var i = 0; i < s.length; i++){
        for(var j = 0; i - j >= 0 && i + j < s.length; j++){
            if(s[i - j] == s[i + j]){
                //比较长度，只记录更长的子串
                if(maxlen1 < 2 * j + 1){
                    maxlen1 = 2 * j + 1;
                    longsubstr1 = s.substring(i - j, i + j + 1);
                }
            }
            //只要出现不相等的情况，就不可能再是回文，跳出当前循环，i++
            else break;
                
        }
    }
    //如abba，利用动态规划再判断偶数的情况，首先当前元素与其后面元素相等，其次再比较两边
    for(var m = 0; m < s.length; m++){
        if(s[m] == s[m + 1]){
            for(var n = 0; m - n >= 0 && m + 1 + n < s.length; n++){
                if(s[m - n] == s[m + 1 + n]){
                    if(maxlen2 < 2 * n + 2){
                        maxlen2 = 2 * n + 2;
                        longsubstr2 = s.substring(m - n , m + 2 + n);
                    }
                }
                //只要出现不相等的情况，就不可能再是回文，跳出当前循环，m++
                else break;
            }
        }
    }
    //返回奇数、偶数情况下，更长的子串
    return (longsubstr1.length > longsubstr2.length) ? longsubstr1 : longsubstr2;
};