/**
 * 测试牛客网上给定测试用例，接收输入输出，编写函数的方式
 */
//r1中存储输入与输出
//line 指定按行输入

/*var readline = require('readline');

const r1 = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
 
r1.on('line', function(line){
	var tokens = line.split(' ');
	console.log(parseInt(tokens[0]) + parseInt(tokens[1]));
});*/

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function(data) {
    input += data;
});

process.on('SIGINT', function() {
    input_array = input.split("\n");
    var nLine = 0;

    while (nLine < input_array.length) {
        var line = input_array[nLine++].trim();
        if (line === '') {
            continue;
        }
        console.log("1:"+ input_array);
        var input_arrays = line.split(' ');
        console.log(input_arrays);
        process.exit(0);
    }
});