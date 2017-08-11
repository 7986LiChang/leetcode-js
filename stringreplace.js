/**
 * 请实现一个函数，将一个字符串中的空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
 */

function replaceSpace(str)
{
    // write code here
    //字符串的替换
    return str.replace( /\s/g, "%20");
}

/**
 * string 的replace方法：
 * str.replace(正则表达式, 被替换的字符串)  
 * 返回替换结束的结果，但是并不会影响原来的字符串str，只是在副本上的操作
 */

/**
 * 正则表达式，匹配空格 \s
 */