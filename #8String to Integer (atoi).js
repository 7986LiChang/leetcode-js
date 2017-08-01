/**
 * Implement atoi to convert a string to an integer.
 */

/**
 * @param {string} str
 * @return {number}
 */
//思路一：利用parseInt()方法，将NaN的情况返回0
//还要注意控制边界
/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var num = parseInt(str);

    //return num < -2147483648 ? -2147483648 : result > 2147483647 ? 2147483647 : (result || 0);

    if(isNaN(num)){
        return 0;
    }
    if(num > 2147483647){
        return 2147483647;
    }
    if(num < -2147483648){
        return -2147483648;
    }
    return num;
};

//思路二：枚举各种情况，自己重现
/**
 * [找出给定字符串中非空数字子串]
 * @param  {[string]} firchar [第一个非空字符]
 * @param  {[string]} str     [待查找字符串]
 * @return {[string]}         [非空数字子串]
 */
function getNumStr(firchar, str) {
    var numstr = firchar;
    var curindex = str.indexOf(firchar) + 1;
    while (str[curindex] !== " " && curindex < str.length) {
        if ((/[0-9]/).test(str[curindex])) {
            numstr += str[curindex];
            curindex++;
        } else {
            break;
        }
    }
    return numstr;
}

/**
 * [找出适合十六进制的非空子串]0x || 0X
 * @param  {[type]} firchar [description]
 * @param  {[type]} str     [description]
 * @return {[type]}         [description]
 */
function getHexNumStr(firchar, str) {
    var numstr = "0" + firchar;
    var curindex = str.indexOf(firchar) + 1;
    while (str[curindex] !== " " && curindex < str.length) {
        if ((/[0-9a-fA-F]/).test(str[curindex])) {
            numstr += str[curindex];
            curindex++;
        } else {
            break;
        }
    }
    return numstr;
}

/**
 * [第一个字符为数字/字母情况，计算其值]
 * @param  {[type]} firchar [description]
 * @param  {[type]} str     [description]
 * @return {[type]}         [description]
 */
function getNumber(firchar, str) {
    //为字母
    var numstr = "", num;
    if ((/[a-zA-Z]/).test(firchar)) {
        return 0;
    }
    //为数字
    if ((/[0-9]/).test(firchar)) {
        //0x:十六进制
        if ((firchar === "0" && str[str.indexOf(firchar) + 1] === "x") || (firchar === "0" && str[str.indexOf(firchar) + 1] === "X")) {
            numstr = getHexNumStr(str[str.indexOf(firchar) + 1], str);
            if (numstr !== "0x" && numstr !== "0X") {
                num = Number(numstr);
                return num;
            } else {
                return 0;
            }
        }//找出普通非空数字子串
        else {
            numstr = getNumStr(firchar, str);
            num = Number(numstr);
            return num;
        }
    }
}

var myAtoi = function(str) {
    //空字符串，返回0
    var firNotspaceChar, 
    	curChar, 
    	curindex;
    var numstr = "", 
    	num;
    const MAX_VALUE = Math.pow(2, 31) - 1,
    	  MIN_VALUE = -Math.pow(2, 31);

    if (str === " ") {
        return 0;
    }
    //第一个非空字符
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            firNotspaceChar = str[i];
            break;
        }
    }
     //第一个字符为字母或数字
    if ((/[a-zA-Z]/).test(firNotspaceChar) || (/[0-9]/).test(firNotspaceChar)) {
        num = getNumber(firNotspaceChar, str);
        //数值不能出界
        return num > MAX_VALUE ? MAX_VALUE : num;
    }
    //为'+'
    if (firNotspaceChar === "+") {
        var nextchar = str[str.indexOf(firNotspaceChar) + 1];
        //以第二个字符为起始，字母/数字
        if((/[a-zA-Z]/).test(nextchar) || (/[0-9]/).test(nextchar)){
            num = getNumber(nextchar, str);
            return num > MAX_VALUE ? MAX_VALUE : num;
        }else{
            return 0;
        }
       
    }
    //为'-'
    if (firNotspaceChar === "-") {
        var nextchar = str[str.indexOf(firNotspaceChar) + 1];
        if((/[a-zA-Z]/).test(nextchar) || (/[0-9]/).test(nextchar)){
            num = getNumber(nextchar, str);
            return -num < MIN_VALUE ? MIN_VALUE : -num;
        }else{
            return 0;
        }        
    }
    else{
        return 0;
    }
};



