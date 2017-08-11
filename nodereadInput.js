/**
 * 使用readline模块实现Node.js的输入输出
 * 1、'line'事件：用户输入完一行，按下回车后就会触发，会将用户输入的数据通过回调函数传回。
 *    可以在其中处理用户输入的数据
 * 2、rl.question('query', function(answer){}) 交互式问题
 */

/**
 * [读取一行输入，按逗号/空格分开]
 * @type {[type]}
 */
// var readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// rl.on("line", function(line){
// 	var tokens = line.split(",");
// 	console.log("You input :" + 
// 		parseInt(tokens[0]) + ", " + parseInt(tokens[1]));
// });


/**
 * 输入2行数据，并输出
 */
var readline = require('readline');
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
var countLine = 1;
var tokens = [];

rl.on('line', function(line){
	tokens.push(line);
	if(countLine === 2){
		console.log("第一行输入" + tokens[0] + "第二行输入" + tokens[1]);

		countLine = 1;
		tokens = [];
	}
	else{
		countLine++;
	}
});

/**
 * 读取多行输入
 */
// process.stdin.resume();
// process.stdin.setEncoding("ascii");

// var input = "";
// var input_array = "";

// process.stdin.on("data", function(data){
// 	input += data;
// });

// process.stdin.on("end", function(){
// 	input_array = input.split("\n");
// 	console.log("多行输入：" + input_array[0] + " , " + input_array[1]);
// });


/**
 * example
 */
// var readline = require('readline');

// var rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout
// });

// //设置类似real编辑器的">"提示
// rl.setPrompt('Input>');
// rl.prompt();

// rl.question('你是2B吗？', function(answer){
// 	switch(answer){
// 		case 'no':
// 			console.log('no no no,显然你就是！hahahahah');
// 			break;
// 		case 'yes':
// 			console.log('good bye,2b!');
// 			rl.close();
// 			break;
// 		default:
// 			console.log('只能回答yes / no!');
// 			break;
// 	}
// });
