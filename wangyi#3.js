/**
 * 交错01串：任意两个相邻位置的字符串都不一样
 * 输入：一行字符串
 * 输出：求最长子串长度
 */
var readline = require('readline');
const rl = readline.createInterface({
	input:process.stdin,
	output:process.stdout
});

rl.on('line',function(line){
	var str = line,
	    maxlen = 1;   //输入的字符串
	    console.log(str.length);
	
});