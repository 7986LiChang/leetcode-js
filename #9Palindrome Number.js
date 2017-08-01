/**
 * Determine whether an integer is a palindrome. Do this without extra space.
 */

/**
 * @param {number} x
 * @return {boolean}
 * 负数没有回文
 */
var isPalindrome = function(x) {
    if(x >= 0){
        return (x + "").split("").reverse().join("") === (x + "");
    }
    else{
        return false;
    }
};