/**
 * 测试牛客网上给定测试用例，接收输入输出，编写函数的方式
 */
//r1中存储输入与输出
//line 指定按行输入

var readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
 
r1.on('line', function(line){
	var tokens = line.split(' ');
	console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});