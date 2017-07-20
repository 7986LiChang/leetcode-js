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

/**思路一：暴力求解，O(n^2)
 * 1、首先获取全部子串
 * 2、判断子串中是否没有重复字符。其中要注意，Set结构下，其长度表示为set.size
 * 3、在非重复的子串中，选择长度最长的
 */
function uniqueAll(s){
    var arrs = s.split('');
    var uniarrs = new Set(arrs);
    if(arrs.length == uniarrs.length) return true;
    // return (arrs.length == uniarrs.length) ? true : false;
}

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



/**
 * 思路二：利用滑动窗口，[i, j) 时间复杂度O(n)
 * 1、利用map结构，i和j首先指向同一个位置，用map存储j所指向的元素
 * 2、j后移，当j所指向元素在map中已经出现时，前面为止即为非重复最长子串
 * 3、i继续后移
 */
var lengthOfLongestSubstring = function(s) {
    var len = 0, i = 0, j = 0;
    var map = new Map();

    while(i < s.length && j < s.length) {
        if(!map.has(s[j])) {
            map.set(s[j], 1);
            j++;
            len = Math.max(map.size, len);
        }
        else {
        	//map.clear()清除map结构中所有成员
            map.clear();
            i++;
            j = i;
        }        
    }
    return len;
};




