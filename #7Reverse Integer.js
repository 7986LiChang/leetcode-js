/**
 * Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
 */


/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    //处理x=0的情况
    var renum;
    //32位有符号整数，能表示的最大值，(2^31-1)，2147483647，最小值(-2^31),-2147483648
    const MAX_VALUE = Math.pow(2 ,31) - 1;


    if(x === 0){
        return 0;
    }else if(x > 0){
        //处理x>0的情况,Number()处理字符串，会自动忽略前导0
        //Number()会自动消除字符串的前导0
        renum = Number((x + "").split("").reverse().join(""));
        //判断数字不能溢出
        if(renum <= MAX_VALUE){
            return renum;
        }else{
            return 0;
        }
    }else{
        //处理x<0的情况，利用绝对值，转换为x>0的情况
        var absnum = Math.abs(x);
        renum = Number((absnum + "").split("").reverse().join(""));
        //判断数字不能溢出
        if(renum <= MAX_VALUE){
            return -renum;
        }else{
            return 0;
        }
    }
};